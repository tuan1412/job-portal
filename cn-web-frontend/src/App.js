import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AsyncHome } from './pages/Home';
import { AsyncLogin } from './pages/Login';
import { AsyncDetailUser } from './pages/DetailUser';
import { AsyncDetailCompany } from './pages/DetailCompany';
import { AsyncManageJob } from './pages/ManageJob';
import { AsyncListJob } from './pages/JobList';
import { Async404 } from './pages/404';
import { AsyncApply } from './pages/ApplyJob';

import NotificationSystem from 'react-notification-system';
import PrivateRoute from './components/validator/PrivateRoute';
import { AsyncPostJob } from './pages/PostJob';
import { AsyncDetailJob } from './pages/DetailJob';
import FormSearchAdvance from './components/formsearchadvance';


export const NotificationRef = React.createRef();

class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
              <Route path="/" exact component={AsyncHome} />
              <Route path="/login" component={AsyncLogin} />
              <Route path="/detail-user" component={AsyncDetailUser} />
              <Route path="/detail-company" component={AsyncDetailCompany} />
              <PrivateRoute path="/manage-job" component={AsyncManageJob} />
              <Route path="/list-job" component={AsyncListJob} />
              <Route path="/apply-job" component={AsyncApply} />
              <Route path="/post-job" component={AsyncPostJob} />
              <Route path="/detail-job/:id" component={AsyncDetailJob} />
              <Route path="/test" component={FormSearchAdvance} />
              <Route component={Async404} />
          </Switch>
        </Router>

        <NotificationSystem ref={NotificationRef} />
      </Fragment >
    );
  }
}

export default App;
