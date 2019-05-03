import React, { Component } from 'react'
import CoverSite from './CoverSite';
import JobListSection from './JobListSection';
import Loadable from '../../components/lazyload';
import client from '../../core/api/client';
import Layout from '../../components/layout/Layout';

export default class Home extends Component {
    searchJob = ({ title, location, category }) => {
        client.searchJob({ title, location, category, page: 1 })
            .then(({ data: jobs, current_page: pageIndex, per_page: pageSize, total: totalItems }) => {
                const { history } = this.props;
                history.push({
                    pathname: '/list-job',
                    state: { title, location, category, jobs, pageIndex, pageSize, totalItems }
                });
            })
            .catch((err) => console.warn(err))
    }

    render() {
        return (
            <Layout>
                <CoverSite callback={this.searchJob} />
                <JobListSection history={this.props.history} />
            </Layout>
        )
    }
}

export const AsyncHome = Loadable({
    loader: () => import('pages/Home')
});
