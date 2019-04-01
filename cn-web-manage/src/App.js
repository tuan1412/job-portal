import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import CompaniesPage from './pages/CompaniesPage';
import CompanyDetailPage from './pages/CompanyDetailPage';
import JobsPage from './pages/JobsPage';
import NewJobsPage from './pages/NewJobsPage';
import JobDetailPage from './pages/JobDetailPage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import Header from './components/layout/Header';
import LeftMenu from './components/layout/LeftMenu';
class App extends Component {
  hide_menu = false;
  constructor(props) {
    super(props);
    let paths_hide_menu = [
      '/job',
      '/login',
      '/forgot-password',
      'sign-up'
    ]
    let path = window.location.pathname;
    for(let i = 0;i<paths_hide_menu.length; i++){
      if(paths_hide_menu[i] == path){
        this.hide_menu = true;
      }
    }
    console.log('path:', window.location.pathname);
  }
  render() {
    return (
      <Router>
        { !this.hide_menu ? 
          <>
          <Header></Header>
          <LeftMenu></LeftMenu>
          </>
          : <></>
        }
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/companies" component={CompaniesPage} />
          <Route path="/company/:id" component={CompanyDetailPage} />
          <Route path="/jobs" component={JobsPage} />
          <Route path="/new-jobs" component={NewJobsPage} />
          <Route path="/job/:id" component={JobDetailPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/user/:id" component={UserDetailPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

