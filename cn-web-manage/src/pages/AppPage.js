import React, { Component } from 'react';
import { HomePage } from './HomePage';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Header from '../components/layout/Header';
import LeftMenu from '../components/layout/LeftMenu';
import Loadable from '../components/lazyload';
import CompaniesPage from './CompaniesPage';
import CompanyDetailPage from './CompanyDetailPage';
import JobsPage from './JobsPage';
import NewJobsPage from './NewJobsPage';
import JobDetailPage from './JobDetailPage';
import UsersPage from './UsersPage';
import UserDetailPage from './UserDetailPage';
import ErrorPage from './ErrorPage';
class _AppPage extends Component {
    url = "";
    constructor(props) {
        super(props);
        console.log('AppPage', props);
        this.state = {};
        this.url = props.match.url;
    }
    render() {
        return (
            <>
                <Header></Header>
                <LeftMenu></LeftMenu>
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
            </>
        );
    }
}

export default _AppPage;

export const AppPage = Loadable({
    loader: () => import(_AppPage)
});

