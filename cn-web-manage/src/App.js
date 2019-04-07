import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import AppPage from './pages/AppPage';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('path:', window.location.pathname);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact to="/app" from="/" />
          <Route path="/app" component={AppPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

