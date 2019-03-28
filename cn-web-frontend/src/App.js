import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

// TODO: Lazy load cho nay
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;
