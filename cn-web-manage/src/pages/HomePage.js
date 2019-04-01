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
        <Alert type="danger" mess="trongnv" timeout="3000"></Alert>
      </>
    );
  }
}

export default HomePage;
