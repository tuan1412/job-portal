import React, { Component } from 'react';

class ForgotPasswordPage extends Component {
  render() {

    return (
      <div class="splash-container">
        <div class="card">
          <div class="card-header text-center"><img class="logo-img" src="../assets/images/logo.png" alt="logo" /><span class="splash-description">Please enter your user information.</span></div>
          <div class="card-body">
            <form>
              <p>Don't worry, we'll send you an email to reset your password.</p>
              <div class="form-group">
                <input class="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" autocomplete="off" />
              </div>
              <div class="form-group pt-1"><a class="btn btn-block btn-primary btn-xl" href="../index.html">Reset Password</a></div>
            </form>
          </div>
          <div class="card-footer text-center">
            <span>Don't have an account? <a href="pages-sign-up.html">Sign Up</a></span>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordPage;
