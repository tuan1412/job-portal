import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Header from '../components/layout/Header';
import LeftMenu from '../components/layout/LeftMenu';
import CompaniesPage from './CompaniesPage';
import CompanyDetailPage from './CompanyDetailPage';
import JobsPage from './JobsPage';
import NewJobsPage from './NewJobsPage';
import JobDetailPage from './JobDetailPage';
import UsersPage from './UsersPage';
import UserDetailPage from './UserDetailPage';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import AppService from '../services/AppService';
class AppPage extends Component {
    url = "";
    constructor(props) {
        super(props);
        this.url = props.match.url;
        this.service = new AppService();
    }
    redirect() {
        let access_token = localStorage.getItem('access_token');
        if (!access_token) {
            return <Redirect exact to='/login' />
        } else {
            try {
                this.service.checkApi();
            } catch (error) {
                return <Redirect exact to='/login' />
            }
        }
    }
    render() {
        return (
            <>
                {this.redirect()}
                <div class="dashboard-main-wrapper">
                    <Header></Header>
                    <LeftMenu></LeftMenu>
                    <div class="dashboard-wrapper">
                        <div class="container-fluid dashboard-content">
                            <Router>
                                <Switch>
                                    <Route path={this.url + "/"} exact component={HomePage} />
                                    <Route path={this.url + "/companies"} component={CompaniesPage} />
                                    <Route path={this.url + "/company/:id"} component={CompanyDetailPage} />
                                    <Route path={this.url + "/jobs"} component={JobsPage} />
                                    <Route path={this.url + "/new-jobs"} component={NewJobsPage} />
                                    <Route path={this.url + "/job/:id"} component={JobDetailPage} />
                                    <Route path={this.url + "/users"} component={UsersPage} />
                                    <Route path={this.url + "/user/:id"} component={UserDetailPage} />
                                    <Route component={ErrorPage} />
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AppPage;


