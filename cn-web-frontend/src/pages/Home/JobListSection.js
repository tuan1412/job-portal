/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Button from '../../components/formcontrols/Button';
import JobItem from '../../components/JobItem';
import Pagination from '../../components/Pagination';
import Modal from '../../components/modal';
import DetailJob from '../../components/DetailJob';

export default class JobListSection extends Component {
    state = {
        showDetailJob: false,
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
    renderHeader = () => {
        return (
            <div className="row justify-content-start text-left mb-5">
                <div className="col-md-9 aos-init aos-animate" data-aos="fade">
                    <h2 className="font-weight-bold text-black">Recent Jobs</h2>
                </div>
                <div className="col-md-3 aos-init aos-animate" data-aos="fade" data-aos-delay="200">
                    <Button className="py-3" blockStyle={true}>
                        <span className="h5">+</span> Post a Job
                    </Button>
                </div>
            </div>
        )
    }

    onClickJob = () => {
        this.setState({
            showDetailJob: true
        });
        $('[data-aos="fade"]').removeClass('aos-init aos-animate');
    }

    hideJobDetail = () => {
        this.setState({
            showDetailJob: false
        })
        $('[data-aos="fade"]').addClass('aos-init aos-animate');
    }

    renderListJob = () => {
        return this.state.jobs.map((job, index) => {
            return (
                <JobItem key={index} {...job} showJobDetail={this.onClickJob} />
            )
        });
    }

    render() {
        return (
            <div className="site-section bg-light">
                <Modal open={this.state.showDetailJob} onClose={this.hideJobDetail}>
                    <DetailJob />
                </Modal>
                <div className="container">
                    {this.renderHeader()}
                    {this.renderListJob()}
                    <Pagination pageIndex={1} pageSize={10} pageRange={5} totalItems={200} />
                </div>
            </div>
        )
    }
}
