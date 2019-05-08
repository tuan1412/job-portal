import React, { Component } from 'react';

import { withRouter } from 'react-router';
import LoginService from '../services/LoginService';
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
    account = {
        username: "",
        password: ""
    }
    redirect_to = "";
    constructor(props) {
        super(props);
        console.log("Goto LoginPage")
        this.service = new LoginService();
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.login = this.login.bind(this);
        localStorage.clear();
    }

    changePage(page) {
        console.log("next-page: ", page);
        this.redirect_to = page;
        this.forceUpdate();
    }

    handleChangeUsername(event) {
        this.account.username = event.target.value;
        this.forceUpdate();
    }
    handleChangePassword(event) {
        this.account.password = event.target.value;
        this.forceUpdate();
    }

    async login(event) {
        console.log('account-login', this.account);
        event.preventDefault();
        try {
            let data = await this.service.login(this.account);
            if (data.hasOwnProperty('access_token')) {
                localStorage.setItem("access_token", data.access_token);
                this.changePage("/");
            } else {
                alert("login fail");
            }
        } catch (error) {

        }

    }

    redirect() {
        if (!!this.redirect_to) {
            return <Redirect to={this.redirect_to} />
        }
    }

    render() {
        return (

            <div class="wrapper fadeInDown">
                {this.redirect()}
                <div id="formContent">
                    <div class="fadeIn first">
                        <img onClick={(e) => this.changePage("/")} src="/assets/images/login.png" id="icon" alt="User Icon" />
                    </div>

                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username" value={this.account.username} onChange={this.handleChangeUsername} />
                        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" value={this.account.password} onChange={this.handleChangePassword} />

                        <input onClick={(e) => this.login(e)} type="submit" class="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" onClick={() => this.changePage("/sign-up")}>Sign Up?</a>
                        <br />
                        <a class="underlineHover" onClick={() => this.changePage("/forgot-password")}>Forgot Password?</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);
