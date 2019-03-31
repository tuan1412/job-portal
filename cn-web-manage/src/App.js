import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/sign-up" exact component={SignUpPage} />
          <Route path="/forgot-password" exact component={ForgotPasswordPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
