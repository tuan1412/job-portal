import React, { Component } from 'react';
import HomeService from '../services/HomeSerivce';
import Loadable from '../components/lazyload';

export const HomePage = Loadable({
  loader: () => import(_HomePage)
});


class _HomePage extends Component {
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
export default _HomePage;
