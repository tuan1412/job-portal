import React, { Component } from 'react';

class ForgotPasswordPage extends Component {
  username = "";
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }

  changePage(page) {
    console.log("next-page: ", page);
    this.props.history.push(page);
  }

  handleChangeUsername(event) {
    this.username = event.target.value;
    this.forceUpdate();
  }

  submit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div class="wrapper fadeInDown">
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
