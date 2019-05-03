import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';
import ConfirmModal from '../services/confirm-modal';
import JobService from '../services/JobService';
import { Redirect } from "react-router-dom";
class JobsPage extends Component {
    list = [];
    optionsState = -1;
    optionsStateDetailChange = -1;
    check_disable_button = true;
    job_current;
    constructor(props) {
        super(props);
        console.log("Goto JobsPage")
        this.state = {};
        this.service = new JobService();
        this.page = 1;
        this.total = 0;
        this.paramsSearch = {
            page: this.page,
            per_page: 20
        };
        this.selectSearch = this.selectSearch.bind(this);
        this.changeStatusJob = this.changeStatusJob.bind(this);
        this.getJobs();
    }

    async getJobs() {
        try {
            let data = await this.service.getJobs(this.paramsSearch);
            this.list = data.data;
            this.page = data.current_page;
            this.total = data.total;
            console.log("getJobs: " + this.page, data);
            this.forceUpdate();
        } catch (error) {
            console.log()
        }
    }

    async acceptJob() {
        try {
            await this.service.acceptJob({ job_id: this.job_current.id });
            alert("accept sucess job: " + this.job_current.id);
            this.getJobs();
        } catch (error) {
            alert("accept sucess job: " + this.job_current.id);
        }
    }

    async rejectJob() {
        try {
            await this.service.rejectJob({ job_id: this.job_current.id });
            this.getJobs();
            alert("reject sucess job: " + this.job_current.id);
        } catch (error) {
            alert("reject fail job: " + this.job_current.id);
        }
    }

    callbackDetail(data) {
        if (data == 'submit') {
            if (this.optionsStateDetailChange == 2) {
                this.rejectJob();
            } else if (this.optionsStateDetailChange == 1) {
                this.acceptJob();
            }
        }

        this.check_disable_button = true;
        this.optionsStateDetailChange = -1;
    }

    changeStatusJob(e) {
        let data = e.target.value;
        this.optionsStateDetailChange = data;
        if (data != this.job_current.status) {
            this.check_disable_button = false;
        } else {
            this.check_disable_button = true;
        }
        this.forceUpdate();
    }

    preGotoDetail(id, index) {
        this.job_current = this.list[index];
        this.forceUpdate();
        document.getElementById("btn-modal-confirm").click()
    }
    selectSearch(e) {
        let data = e.target.value;
        console.log(data);
        this.optionsState = data;
        if (data == -1) {
            delete this.paramsSearch.status;
        } else {
            this.paramsSearch['status'] = data;
        }
        this.getJobs();
    }
    inputSearch(e) {
        if (e.target.value == "") {
            delete this.paramsSearch.title;
        } else {
            this.paramsSearch['title'] = e.target.value;
        }
        this.getJobs();
    }

    render() {
        return (

            <>
                <TitlePage data={["Jobs"]}></TitlePage>
                <form style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <div class="form-row">
                        <div class="form-group col-md-8">
                            <label for="title">Title</label>
                            <input onChange={(e) => this.inputSearch(e)} type="email" class="form-control" id="title" placeholder="Enter title" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputStatus">Status</label>
                            <select value={this.optionsState} onChange={this.selectSearch} class="form-control" id="inputStatus">
                                <option value="-1" >Default</option>
                                <option value="0" >New</option>
                                <option value="1" >Accepted</option>
                                <option value="2" >Rejected</option>
                            </select>
                        </div>
                    </div>
                </form>
                <h1>Total : {this.total}</h1>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title Job</th>
                            <th scope="col">Address</th>
                            <th scope="col">Company</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.list.map((item, index) => {
                                return <tr key={index} onClick={() => { this.preGotoDetail(item.id, index) }}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title_job}</td>
                                    <td>{item.address}</td>
                                    <td>{item.name_company}</td>
                                    <td>{item.from_salary}$ - {item.to_salary}$</td>
                                    {(() => {
                                        switch (item.status) {
                                            case 0:
                                                return <td>New</td>;
                                            case 1:
                                                return <td>Accepted</td>;
                                            case 2:
                                                return <td>Rejected</td>;
                                            default:
                                                return null;
                                        }
                                    })()}

                                    {/* <td><FormButton name={"abcd: " + index} ></FormButton></td> */}
                                </tr>;
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title Job</th>
                            <th scope="col">Address</th>
                            <th scope="col">Company</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Status</th>
                        </tr>
                    </tfoot>
                </table>

                {
                    this.job_current ?
                        <div class="modal fade" id="_detail" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Change status job: {this.job_current.id}</h5>
                                    </div>
                                    <div class="modal-body">
                                        <form style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">ID: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.id}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Job: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.title_job}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Status: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">
                                                    <select class="col-sm-9 col-form-label" value={this.optionsStateDetailChange} onChange={this.changeStatusJob} class="form-control" id="exampleSelect1">
                                                        {
                                                            this.job_current.status == 0 ? <option value="0" >New</option> : <></>
                                                        }
                                                        {
                                                            this.job_current.status != 2 ? <option value="1" >Accepted</option> : <></>
                                                        }
                                                        <option value="2" >Rejected</option>
                                                    </select></label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Category: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.category_name}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Address: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.address}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Company: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.name_company}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Salary: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.from_salary}$ - {this.job_current.to_salary}$</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Expire Date: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.expire_date}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Description: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.job_current.description}</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" onClick={() => { this.callbackDetail("cancel") }} class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button disabled={this.check_disable_button} type="button" onClick={() => { this.callbackDetail("submit") }} class="btn btn-success" data-dismiss="modal">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div> : <></>
                }
                <button style={{ "display": "none" }} id={"btn-modal-confirm"} type="button" class="btn btn-info" data-toggle="modal" data-target="#_detail"></button>
            </>
        );
    }
}

export default JobsPage;