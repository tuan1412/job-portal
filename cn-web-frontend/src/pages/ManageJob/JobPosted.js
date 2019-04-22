import React, { Component } from 'react'
import JobList from '../../components/JobList';

export default class JobPosted extends Component {
    state = {
        jobs: [
            { title: 'Frontend Development', type: 'Partime', company: 'Facebook, Inc.', location: 'New York City, USA' },
            { title: 'Full Stack Developer', type: 'Full Time', company: 'Google, Inc.', location: 'New York City, USA' },
            { title: 'Open Source Interactive Developer', type: 'Freelance', company: 'New York Times', location: 'New York City, USA' },
            { title: 'Frontend Development', type: 'Internship', company: 'Facebook, Inc.', location: 'New York City, USA' },
            { title: 'Full Stack Developer', type: 'Full Time', company: 'Google, Inc.', location: 'New York City, USA' },
            { title: 'Open Source Interactive Developer', type: 'Temporary', company: 'New York Times', location: 'New York City, USA' },
            { title: 'Frontend Development', type: 'Internship', company: 'Facebook, Inc.', location: 'New York City, USA' },
        ]
    }
    render() {
        return (
            <JobList jobs={this.state.jobs} />
        )
    }
}
