import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import Loadable from '../../components/lazyload';
import DetailJobContent from '../../components/detailjob/DetailJob';
import client from '../../core/api/client';

export default class DetailJob extends Component {

  state = {
    job: {},
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    client.getDetailJob({ id })
      .then((res) => {
        this.setState({
          job: {...res}
        })
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  render() {
    return (
      <Layout>
        <div className='site-section bg-light'>
          <DetailJobContent job={this.state.job} />
        </div>
      </Layout>
    )
  }
}


export const AsyncDetailJob = Loadable({
  loader: () => import('pages/DetailJob')
});

