import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AsyncHome } from './pages/Home';
import { AsyncLogin } from './pages/Login';
import { AsyncDetailUser } from './pages/DetailUser';
import { AsyncDetailCompany } from './pages/DetailCompany';
import { AsyncManageJob } from './pages/ManageJob';

import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/login" component={AsyncLogin} />
          <Route path="/detail-user" component={AsyncDetailUser} />
          <Route path="/detail-company" component={AsyncDetailCompany} />
          <Route path="/manage-job" component={AsyncManageJob} />
        </Router>
      </Layout>
    );
  }
}

export default App;
