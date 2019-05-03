import React, { Component } from 'react'
import JobList from '../../components/joblist/JobList';
import _ from '../../core/utils';
import client from '../../core/api/client';

export default class JobProcessing extends Component {
    state = {
        jobs: [],
        pageIndex: 1,
        pageSize: 10,
        totalItems: 0,
        loading: false,
    }

    userInfo = _.getUserInfo();

    componentDidMount() {
        this.searchJob();
    }

    searchJob = () => {
        const { company_id } = this.userInfo;
        const { pageIndex } = this.state;
        client.searchJobByCompany({ company_id, status: 0, page: pageIndex })
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

    render() {
        return (
            <JobList {...this.state} onChangePage={this.onChangePage} />
        )
    }
}
