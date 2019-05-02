import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';
import UserService from '../services/UserService'
class UsersPage extends Component {
    list = [];
    optionsState = -1;
    optionsStateDetailChange = -1;
    check_disable_button = true;
    user_current;
    constructor(props) {
        super(props);
        console.log("Goto JobsPage")
        this.state = {};
        this.service = new UserService();
        this.page = 1;
        this.total = 0;
        this.paramsSearch = {
            page: this.page,
            per_page: 20
        };
        this.selectSearch = this.selectSearch.bind(this);
        this.changeStatusUser = this.changeStatusUser.bind(this);
        this.getUsers();
    }

    async getUsers() {
        try {
            let data = await this.service.getUsers(this.paramsSearch);
            this.list = data.data;
            this.page = data.current_page;
            this.total = data.total;
            console.log("getUsers: " + this.page, data);
            this.forceUpdate();
        } catch (error) {
            console.log()
        }
    }

    async banUser() {
        try {
            await this.service.banUser({ user_id: this.user_current.id });
            this.getUsers();
            alert("ban sucess user: " + this.user_current.id);
        } catch (error) {
            alert("ban fail user: " + this.user_current.id);
        }
    }

    callbackDetail(data) {
        if (data == 'submit') {
            if (this.optionsStateDetailChange == 2) {
                this.banUser();
            }
        }

        this.check_disable_button = true;
        this.optionsStateDetailChange = -1;
    }

    changeStatusUser(e) {
        let data = e.target.value;
        this.optionsStateDetailChange = data;
        if (data != this.user_current.status) {
            this.check_disable_button = false;
        } else {
            this.check_disable_button = true;
        }
        this.forceUpdate();
    }

    preGotoDetail(id, index) {
        this.user_current = this.list[index];
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
        this.getUsers();
    }
    inputSearch(e,type) {
        if (e.target.value == "") {
            delete this.paramsSearch[type];
        } else {
            this.paramsSearch[type] = e.target.value;
        }
        this.getUsers();
    }
    render() {
        return (
            <>
                <TitlePage data={["Users"]}></TitlePage>
                <form style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="title">Username</label>
                            <input onChange={(e) => this.inputSearch(e,'username')} type="email" class="form-control" id="title" placeholder="Enter username" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="title">Fullname</label>
                            <input onChange={(e) => this.inputSearch(e,'fullname')} type="email" class="form-control" id="title" placeholder="Enter fullname" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="title">Email</label>
                            <input onChange={(e) => this.inputSearch(e,'email')} type="email" class="form-control" id="title" placeholder="Enter email" />
                        </div>
                        {/* <div class="form-group col-md-4">
                            <label for="inputStatus">Status</label>
                            <select value={this.optionsState} onChange={this.selectSearch} class="form-control" id="inputStatus">
                                <option value="-1" >Default</option>
                                <option value="0" >New</option>
                                <option value="1" >Accepted</option>
                                <option value="2" >Rejected</option>
                            </select>
                        </div> */}
                    </div>
                </form>
                <h1>Total : {this.total}</h1>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Username</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.list.map((item, index) => {
                                return <tr key={index} onClick={() => { this.preGotoDetail(item.id, index) }}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.full_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.username}</td>
                                    <td>{item.description}</td>
                                    {/* <td>{item.from_salary}$ - {item.to_salary}$</td>
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
                                    })()} */}

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
                            <th scope="col">Birthday</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Username</th>
                            <th scope="col">Description</th>
                        </tr>
                    </tfoot>
                </table>

                {
                    this.user_current ?
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
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.full_name}</label>
                                            </div>
                                            {/* <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Status: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">
                                                    <select class="col-sm-9 col-form-label" value={this.optionsStateDetailChange} onChange={this.changeStatusUser} class="form-control" id="exampleSelect1">
                                                        {
                                                            this.user_current.status == 0 ? <option value="0" >New</option> : <></>
                                                        }
                                                        {
                                                            this.user_current.status != 2 ? <option value="1" >Accepted</option> : <></>
                                                        }
                                                        <option value="2" >Rejected</option>
                                                    </select></label>
                                            </div> */}
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Email: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.email}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Birthday: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.birthday}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Mobile: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.mobile}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Username: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.username}</label>
                                            </div>
                                            <div class="form-group row">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">Description: </label>
                                                <label for="inputEmail3" class="col-sm-9 col-form-label">{this.user_current.description}</label>
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

export default UsersPage;