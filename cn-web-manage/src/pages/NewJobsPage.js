import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';
import ConfirmModal from '../services/confirm-modal';
import JobService from '../services/JobService';
import FormButton from '../components/form/FormButton'
class NewJobsPage extends Component {
    list = [];
    job_current;
    constructor(props) {
        super(props);
        this.confirmModal = new ConfirmModal();
        this.state = {};
        this.service = new JobService();
        this.page = 1;
        this.total = 0;
        this.paramsSearch = {
            page: this.page,
            per_page: 20,
            status: 0
        };
        this.selectRow = this.selectRow.bind(this);
        this.getJobs();
    }

    selectRow(row) {
        this.list[row].checked = !this.list[row].checked;
        console.log('row', this.list);
        this.forceUpdate();
    }

    selectAll() {
        let typeAll; // if exist a row haven't selected, typyAll = true
        if (this.checkTypeAll()) {
            typeAll = true;
        } else {
            typeAll = false;
        }

        for (let i = 0; i < this.list.length; i++) {
            this.list[i].checked = typeAll;
        }
        console.log('done', this.checkTypeAll());
        this.forceUpdate();
    }

    checkTypeAll() {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == false) {
                return true;
            }
        }
        return false;
    }

    preGotoDetail(index) {
        this.confirmModal.show(1);
        console.log(index);

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

    preGotoDetail(id) {
        this.id_current_job = id;
        console.log('id : ', this.id_current_job);
        this.confirmModal.show(1);
    }

    inputSearch(e) {
        if (e.target.value == "") {
            delete this.paramsSearch.title;
        } else {
            this.paramsSearch['title'] = e.target.value;
        }
        this.getJobs();
    }

    async acceptJob() {
        try {
            for (let i = 0; i < this.list.length; i++) {
                if (!!this.list[i]["checked"]) {
                    await this.service.acceptJob({ job_id: this.list[i].id });
                }
            }
            this.getJobs();
        } catch (error) {

        }
    }

    callbackAccept(data) {
        if (data == 'submit') {
            this.acceptJob();
        }
    }

    selectItem(item,index){
        this.job_current = item;
        document.getElementById("btn-modal-confirm").click()
        this.forceUpdate();
    }

    render() {
        return (
            <>
                <TitlePage data={["New-Jobs"]}></TitlePage>
                <form style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <div class="form-group">
                        {/* <label for="exampleInputEmail1">Title</label> */}
                        <input onChange={(e) => this.inputSearch(e)} type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter title" />
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
                            <th scope="col" style={{ width: '10%' }}><FormButton callback={data => this.callbackAccept(data)} name="Accept" confirm="true" type="primary" title="Accept?" content="Accept"></FormButton></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.list.map((item, index) => {
                                let i = index;
                                return <tr key={index} onClick={() => { this.selectItem(item, index) }}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title_job}</td>
                                    <td>{item.address}</td>
                                    <td>{item.name_company}</td>
                                    <td>{item.from_salary}$ - {item.to_salary}$</td>
                                    <td>
                                        <div class="switch-button switch-button-success" onClick={(e) => { e.stopPropagation(); this.selectRow(index) }}>
                                            <input type="checkbox" disabled checked={item.checked} name="switch13" id="switch13" />
                                            <span><label for="switch13"></label></span>
                                        </div>

                                    </td>
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
                            <th scope="col" onClick={() => this.selectAll()}>Select All</th>
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
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">New</label>
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
                                        <button type="button" onClick={() => { }} class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        {/* <button disabled={this.check_disable_button} type="button" onClick={() => { this.callbackDetail("submit") }} class="btn btn-success" data-dismiss="modal">Submit</button> */}
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

export default NewJobsPage;