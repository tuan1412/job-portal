import React, { Component } from 'react'
import CoverSite from './CoverSite';
import JobListSection from './JobListSection';
import Layout from '../../components/layout/Layout';
import Loadable from '../../components/lazyload';

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <CoverSite />
                <JobListSection />
            </Layout>
        )
    }
}

export const AsyncHome = Loadable({
    loader: () => import('pages/Home')
});
