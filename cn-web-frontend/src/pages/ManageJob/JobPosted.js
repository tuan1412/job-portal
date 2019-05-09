import React, { Component, Fragment } from 'react'
import JobList from '../../components/joblist/JobList';
import _ from '../../core/utils';
import client from '../../core/api/client';
import Modal from '../../components/modal';
import ListApplyCV from './ListApplyCV';

export default class JobPosted extends Component {
    state = {
        jobs: [],
        pageIndex: 1,
        pageSize: 10,
        totalItems: 0,
        loading: false,
        openModal: false,
    }

    userInfo = _.getUserInfo();

    componentDidMount() {
        this.searchJob();
    }

    searchJob = () => {
        const { company_id } = this.userInfo;
        const { pageIndex } = this.state;
        client.searchJobByCompany({ company_id, status: 1, page: pageIndex })
            .then(({ data: jobs, current_page: pageIndex, total: totalItems }) => {
                jobs = jobs.map(job => {
                    return { title_job: job.title, ...job }
                })
                this.setState({
                    loading: false,
                    pageIndex,
                    jobs,
                    totalItems,
                })
            });
    }

    onChangePage = (page) => {
        const { company_id } = this.userInfo;
        this.searchJob({ company_id, status: 1, page });
    }

    onBtnAction = (id) => {
        client.getAllCVsByJob({ id })
            .then(({ data }) => {
                this.setState({
                    openModal: true,
                    listCvs: data
                })
            })
    }

    closeModal = () => {
        this.setState({
            openModal: false
        })
    }

    render() {
        const { openModal, listCvs } = this.state;
        return (
            <Fragment>
                <Modal
                    cls='list-apply-cv'
                    open={openModal}
                    onClose={this.closeModal}
                >
                    <ListApplyCV listCvs={listCvs}/>
                </Modal>
                <JobList
                    {...this.state}
                    onChangePage={this.onChangePage}
                    btnText='Xem chi tiết'
                    btnAction={this.onBtnAction}
                />
            </Fragment>

        )
    }
}
