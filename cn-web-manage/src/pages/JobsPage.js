import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';
import ModalConfirm2 from '../components/modal/ModalConfirm2';
import ConfirmModal from '../services/confirm-modal';
import JobService from '../services/JobService';
import { Redirect } from "react-router-dom";
class JobsPage extends Component {
    list = [];
    id_current_job;
    changePage = false;
    optionsState = -1;
    constructor(props) {
        super(props);
        console.log("Goto JobsPage")
        this.state = {};
        this.service = new JobService();
        this.confirmModal = new ConfirmModal();
        this.page = 1;
        this.total = 0;
        this.paramsSearch = {
            page: this.page,
            per_page: 20
        };
        this.selectSearch = this.selectSearch.bind(this);
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

    search() {

    }

    preGotoDetail(id) {
        this.id_current_job = id;
        console.log('id : ', this.id_current_job);
        this.confirmModal.show(1);
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

    redirect() {
        if (this.changePage) {
            return <Redirect to={'/app/job/' + this.id_current_job} />
        }
    }

    render() {
        return (

            <> {this.redirect()}
                <TitlePage data={["Jobs"]}></TitlePage>
                <form style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input onChange={(e) => this.inputSearch(e)} type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter title" />
                    </div>
                    <div class="form-group">
                        <label for="exampleSelect1">Status</label>
                        <select value={this.optionsState} onChange={this.selectSearch} class="form-control" id="exampleSelect1">
                            <option value="-1" >Default</option>
                            <option value="0" >New</option>
                            <option value="1" >Accepted</option>
                            <option value="2" >Rejected</option>
                        </select>
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
                                return <tr key={index} onClick={() => { this.preGotoDetail(item.id) }}>
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
                <ModalConfirm2 id="1" callback={(res) => {
                    if (res == 'submit') {
                        this.changePage = true;
                        this.forceUpdate();
                        // return <Redirect from='/app/jobs' to='/login' />
                    }
                }}></ModalConfirm2>
            </>
        );
    }
}

export default JobsPage;