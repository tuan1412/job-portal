import React, { Component, Fragment } from 'react'
import CoverSite from './CoverSite';
import JobListSection from './JobListSection';
import Loadable from '../../components/lazyload';
import client from '../../core/api';

export default class Home extends Component {
    
    searchJob = ({ title, location, category }) => {
        client({
            method: 'post',
            url: '/api/find_job',
            data: { title, location, category, page: 1 }
        }).then((res) => {
            console.log(res);
        })
    }

    render() {
        return (
            <Fragment>
                <CoverSite callback={this.searchJob}/>
                <JobListSection />
            </Fragment>
        )
    }
}

export const AsyncHome = Loadable({
    loader: () => import('pages/Home')
});
