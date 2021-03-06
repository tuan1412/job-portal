import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
class SignUpPage extends Component {
    account = {
        username: "",
        password: ""
    }
    redirect_to = "";
    constructor(props) {
        super(props);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.signup = this.signup.bind(this);
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

    signup(event) {
        console.log('account-login', this.account);
        event.preventDefault();

    }
    redirect() {
        if (!!this.redirect_to) {
            return <Redirect to={this.redirect_to} />
        }
    }
    render() {

        return (
            <div class="wrapper fadeInDown">{this.redirect()}
                <div id="formContent">
                    <div class="fadeIn first">
                        <img onClick={(e) => this.changePage("/")} src="/assets/images/login.png" id="icon" alt="User Icon" />
                    </div>

                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username" value={this.account.username} onChange={this.handleChangeUsername} />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" value={this.account.password} onChange={this.handleChangePassword} />
                        <input onClick={(e) => this.signup(e)} type="submit" class="fadeIn fourth" value="Sign Up" />
                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" onClick={() => this.changePage("/login")} href="">Login</a>
                        <br />
                        <a class="underlineHover" onClick={() => this.changePage("/forgot-password")} href="">Forgot Password?</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default SignUpPage;
