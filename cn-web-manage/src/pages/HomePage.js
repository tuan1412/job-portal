import React, { Component } from 'react';
import HomeService from '../services/HomeSerivce';
import Header from '../components/layout/Header';
import LeftMenu from '../components/layout/LeftMenu';

class HomePage extends Component {
  constructor(props) {
    super(props);
    console.log('trongnv');
    this.service = new HomeService();
    // this.service.getWorks();
  }


  render() {
    return (
      <>
        {/* <Header></Header>
        <LeftMenu></LeftMenu> */}
      </>
    );
  }
}

export default HomePage;
