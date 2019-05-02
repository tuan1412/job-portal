import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.service = new HomeService();
    // this.service.getWorks();
  }

  redirect(){
    return <Redirect exact to='/app/new-jobs' />
  }

  render() {
    return (
      <>{this.redirect()}
        {/* <Header></Header>
        <LeftMenu></LeftMenu> */}
      </>
    );
  }
}

export default HomePage;
