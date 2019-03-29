import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AsyncHome } from './pages/Home';
import { AsyncLogin } from './pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/login" component={AsyncLogin} />
      </Router>
    );
  }
}

export default App;
