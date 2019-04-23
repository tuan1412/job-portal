import React, { Component, Fragment } from 'react'
import FormSearchJob from '../../components/FormSearchJob';
import JobList from '../../components/JobList';
import Loadable from '../../components/lazyload';

export default class ListJobSearch extends Component {
    jobs = [
        { title: 'Frontend Development', type: 'Partime', company: 'Facebook, Inc.', location: 'New York City, USA' },
        { title: 'Full Stack Developer', type: 'Full Time', company: 'Google, Inc.', location: 'New York City, USA' },
        { title: 'Open Source Interactive Developer', type: 'Freelance', company: 'New York Times', location: 'New York City, USA' },
        { title: 'Frontend Development', type: 'Internship', company: 'Facebook, Inc.', location: 'New York City, USA' },
        { title: 'Full Stack Developer', type: 'Full Time', company: 'Google, Inc.', location: 'New York City, USA' },
        { title: 'Open Source Interactive Developer', type: 'Temporary', company: 'New York Times', location: 'New York City, USA' },
        { title: 'Frontend Development', type: 'Internship', company: 'Facebook, Inc.', location: 'New York City, USA' },
    ]
    render() {
        return (
            <Fragment>
                <div className="site-section bg-light">
                    <div className="container mb-4">
                        <div className="col-md-12 bg-white py-5">
                            <FormSearchJob />
                        </div>
                    </div>
                    <div className="container">
                        <JobList jobs={this.jobs} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export const AsyncListJob = Loadable({
    loader: () => import('pages/JobList')
});
