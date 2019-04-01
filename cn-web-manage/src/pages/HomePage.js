import React, { Component } from 'react';
import Header from '../components/layout/Header';
import HomeService from '../services/HomeSerivce';
import LeftMenu from '../components/layout/LeftMenu';
import Alert from '../components/Alert';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.service = new HomeService();
    // this.service.getWorks();
  }


  render() {
    return (
      <>
        <Header></Header>
        <LeftMenu></LeftMenu>
      </>
    );
  }
}

export default HomePage;
