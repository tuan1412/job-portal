import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';
import CompanySerivce from '../services/CompanyService';

class CompanyDetailPage extends Component {
    page = 1;
    company_info = {};
    list_user = [];
    list_job = [];
    optionsStateDetailChange = -1;
    check_disable_button = true;
    state_tabs = "staff";
    constructor(props) {
        super(props);
        console.log('Goto CompanyDetailPage');
        this.state = {};
        this.service = new CompanySerivce();
        this.company_id = this.props.match.params.id;
        this.changeStatusUser = this.changeStatusUser.bind(this);
        this.changeStatusJob = this.changeStatusJob.bind(this);
        this.getDetailCompany();
        this.getDataTabs();
    }

    async getDetailCompany() {
        let params = {
            page: this.page,
        }
        try {
            let data = await this.service.getDetail(this.company_id);
            this.company_info = data.company;
            console.log('company_info', this.company_info);
            this.forceUpdate();
        } catch (error) {

        }
    }

    getDataTabs() {
        if (this.state_tabs == "staff") {
            this.getUsers();
        } else if (this.state_tabs = "jobs") {
            this.getJobs();
        }
    }

    async getJobs() {
        try {
            let params = {
                page: 1,
                per_page: 10000
            }
            let data = await this.service.getJobs(params, this.company_id);
            this.list_job = data.data;
            this.total_job = data.total;
            this.forceUpdate();
        } catch (error) {
        }
    }

    async getUsers() {
        try {
            let params = {
                page: 1,
                per_page: 10000,
                company_id: this.company_id
            }
            let data = await this.service.getUsers(params);
            this.list_user = data.data;
            this.total_user = data.total;
            this.forceUpdate();
        } catch (error) {
        }
    }

    async banUser() {
        try {
            await this.service.banUser({ user_id: this.user_current.id });
            alert("ban sucess user: " + this.user_current.id);
            this.getUsers();
        } catch (error) {
            alert("ban fail user: " + this.user_current.id);
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

    preGotoDetail(id, index) {
        if (this.state_tabs == "staff") {
            this.user_current = this.list_user[index];
        } else {
            this.job_current = this.list_job[index];
        }
        this.forceUpdate();
        document.getElementById("btn-modal-confirm").click()
    }

    callbackDetail(data) {
        if (data == 'submit') {
            if (this.state_tabs == 'staff') {
                if (this.optionsStateDetailChange == 1) {
                    this.banUser();
                }
            } else {
                if (this.optionsStateDetailChange == 2) {
                    this.rejectJob();
                } else if (this.optionsStateDetailChange == 1) {
                    this.acceptJob();
                }
            }
        }

        this.check_disable_button = true;
        this.optionsStateDetailChange = -1;
    }

    changeStatusUser(e) {
        let data = e.target.value;
        this.optionsStateDetailChange = data;
        if (data == 1) {
            this.check_disable_button = false;
        } else {
            this.check_disable_button = true;
        }
        this.forceUpdate();
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

    render() {
        return (
            <>
                <TitlePage data={["Companies", "Detail"]}></TitlePage>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card influencer-profile-data">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div class="text-center">
                                            <img src="/assets/images/avatar-1.jpg" alt="User Avatar"
                                                class="rounded-circle user-avatar-xxl" />
                                        </div>
                                    </div>
                                    <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
                                        <div class="user-avatar-info">
                                            <div class="m-b-20">
                                                <div class="user-avatar-name">
                                                    <h2 class="mb-1">{this.company_info.name}</h2>
                                                </div>
                                                <div class="rating-star  d-inline-block">
                                                    {/* <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <p class="d-inline-block text-dark">14 Reviews </p> */}
                                                </div>
                                            </div>
                                            <div class="user-avatar-address">
                                            <p class="mb-2">Email: {this.company_info.email}<br />
                                                            <span class="m-l-2">Description: {this.company_info.description}<span class="m-l-20">Website: {this.company_info.website}</span></span>
                                                        </p>
                                                {/* <div class="mt-3">
                                                    <a href="#" class="badge badge-light mr-1">Fitness</a> <a
                                                        href="#" class="badge badge-light mr-1">Life Style</a> <a
                                                            href="#" class="badge badge-light">Gym</a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="border-top user-social-box">
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2 twitter-color">
                                    <i class="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                <div class="user-social-media d-xl-inline-block"><span
                                    class="mr-2  pinterest-color"> <i
                                        class="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2 instagram-color">
                                    <i class="fab fa-instagram"></i></span><span>12,300</span></div>
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2  facebook-color">
                                    <i class="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                <div class="user-social-media d-xl-inline-block "><span class="mr-2 medium-color">
                                    <i class="fab fa-medium"></i></span><span>291</span></div>
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2 youtube-color">
                                    <i class="fab fa-youtube"></i></span><span>1291</span></div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Total Views</h5>
                                    <h2 class="mb-0"> 10,28,056</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                    <i class="fa fa-eye fa-fw fa-sm text-info"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Total Followers</h5>
                                    <h2 class="mb-0"> 24,763</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
                                    <i class="fa fa-user fa-fw fa-sm text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Partnerships</h5>
                                    <h2 class="mb-0">14</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
                                    <i class="fa fa-handshake fa-fw fa-sm text-secondary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Total Earned</h5>
                                    <h2 class="mb-0"> $149.00</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
                                    <i class="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-12">
                    <div class="tab-outline">
                        <ul class="nav nav-tabs" id="myTab2" role="tablist">
                            <li class="nav-item" onClick={() => { this.state_tabs = "staff"; this.getDataTabs(); }}>
                                <a class="nav-link active" id="tab-outline-one" data-toggle="tab" href="#outline-one" role="tab" aria-controls="home" aria-selected="true">Staff</a>
                            </li>
                            <li class="nav-item" onClick={() => { this.state_tabs = "jobs"; this.getDataTabs(); }}>
                                <a class="nav-link" id="tab-outline-two" data-toggle="tab" href="#outline-two" role="tab" aria-controls="profile" aria-selected="false">Jobs</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent2">
                            <div class="tab-pane fade show active" id="outline-one" role="tabpanel" aria-labelledby="tab-outline-one">

                                <h1>Total : {this.total_user} Staffs</h1>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Full name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.list_user.map((item, index) => {
                                                return <tr key={index} onClick={() => { this.preGotoDetail(item.id, index) }}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.fullname}</td>
                                                    <td>{item.email}</td>
                                                    {(() => {
                                                        switch (item.gender) {
                                                            case 0:
                                                                return <td>Male</td>;
                                                            default:
                                                                return <td>Female</td>;
                                                        }
                                                    })()}
                                                    <td>{item.username}</td>
                                                    {(() => {
                                                        switch (item.role) {
                                                            case 'inactive':
                                                                return <td>Inactive</td>;
                                                            default:
                                                                return <td>Active</td>;
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
                                            <th scope="col">Full name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="outline-two" role="tabpanel" aria-labelledby="tab-outline-two">
                                <h1>Total : {this.total_job} Jobs</h1>
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
                                            this.list_job.map((item, index) => {
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
                            </div>
                            {(() => {
                                switch (this.state_tabs) {
                                    case "staff":
                                        return this.user_current ?
                                            <div class="modal fade" id="_detail" tabindex="-1" role="dialog" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Change status user: {this.user_current.id}</h5>
                                                        </div>
                                                        <div class="modal-body">
                                                            <form style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                                                                <div class="form-group row">
                                                                    <label for="inputEmail3" class="col-sm-3 col-form-label">ID: </label>
                                                                    <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.id}</label>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Full name: </label>
                                                                    <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.fullname}</label>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Status: </label>
                                                                    <label for="inputEmail3" class="col-sm-9 col-form-label">
                                                                        <select class="col-sm-9 col-form-label" value={this.optionsStateDetailChange} onChange={this.changeStatusUser} class="form-control" id="exampleSelect1">
                                                                            {
                                                                                this.user_current.role == 'inactive' ? <></> : <option value="0" >Active</option>
                                                                            }
                                                                            <option value="1" >Inactive</option>
                                                                        </select></label>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Email: </label>
                                                                    <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.email}</label>
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Gender: </label>
                                                                    {(() => {
                                                                        switch (this.user_current.gender) {
                                                                            case 0:
                                                                                return <label for="inputEmail3" class="col-sm-9 col-form-label">Male</label>
                                                                            default:
                                                                                return <label for="inputEmail3" class="col-sm-9 col-form-label">Famale</label>
                                                                        }
                                                                    })()}
                                                                </div>
                                                                <div class="form-group row">
                                                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Username: </label>
                                                                    <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.username}</label>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" onClick={() => { this.callbackDetail("cancel") }} class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                            <button disabled={this.check_disable_button} type="button" onClick={() => { this.callbackDetail("submit") }} class="btn btn-success" data-dismiss="modal">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : <></>;
                                    case "jobs":
                                        return this.job_current ?
                                            <div class="modal fade" id="_detail" tabindex="-1" role="dialog" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Change status user: {this.job_current.id}</h5>
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
                                            </div> : <></>;
                                    default:
                                        return null;
                                }
                            })()
                            }
                            <button style={{ "display": "none" }} id={"btn-modal-confirm"} type="button" class="btn btn-info" data-toggle="modal" data-target="#_detail"></button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CompanyDetailPage;