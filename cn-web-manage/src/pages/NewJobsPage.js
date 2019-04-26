import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';
import ModalConfirm2 from '../components/modal/ModalConfirm2';
import ConfirmModal from '../services/confirm-modal';
import { Redirect } from "react-router-dom";
import JobService from '../services/JobService';
import FormButton from '../components/form/FormButton'
class NewJobsPage extends Component {
    list = [];

    constructor(props) {
        super(props);
        this.confirmModal = new ConfirmModal();
        this.state = {};
        this.service = new JobService();
        this.confirmModal = new ConfirmModal();
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

    redirect() {
        if (this.changePage) {
            return <Redirect to={'/app/job/' + this.id_current_job} />
        }
    }


    render() {
        return (
            <> {this.redirect()}
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
                                return <tr key={index} onClick={() => { this.selectRow(index) }}>
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
                <ModalConfirm2 id="1" callback={(data) => {
                    if (data == 'submit') {
                        this.changePage = true;
                        this.forceUpdate()
                    }
                }}></ModalConfirm2>
            </>
        );
    }
}

export default NewJobsPage;