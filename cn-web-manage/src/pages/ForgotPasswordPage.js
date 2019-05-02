import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
class ForgotPasswordPage extends Component {
  username = "";
  redirect_to = "";
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }

  changePage(page) {
    console.log("next-page: ", page);
    this.redirect_to = page;
    this.forceUpdate();
  }


  handleChangeUsername(event) {
    this.username = event.target.value;
    this.forceUpdate();
  }

  submit(event) {
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
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Your Username" value={this.username} onChange={this.handleChangeUsername} />
            <input onClick={(e) => this.submit(e)} type="submit" class="fadeIn fourth" value="Reset Password" />
          </form>

        </div>
      </div>
    );
  }
}

export default ForgotPasswordPage;
