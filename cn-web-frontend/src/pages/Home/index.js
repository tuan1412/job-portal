import React, { Component, Fragment } from 'react'
import CoverSite from './CoverSite';
import JobListSection from './JobListSection';
import Loadable from '../../components/lazyload';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <CoverSite />
                <JobListSection />
            </Fragment>
        )
    }
}

export const AsyncHome = Loadable({
    loader: () => import('pages/Home')
});
