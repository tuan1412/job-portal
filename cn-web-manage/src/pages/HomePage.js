import React, { Component } from 'react';
import HomeService from '../services/HomeSerivce';

class HomePage extends Component {
  constructor(props) {
    super(props);
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
