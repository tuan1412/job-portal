/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Button from '../../components/formcontrols/Button';
import JobList from '../../components/joblist/JobList';
import client from '../../core/api/client';
import PermissionComponent from '../../components/validator/PermissionComponent';
import { ROLE_COMPANY } from '../../core/utils/constant';

export default class JobListSection extends Component {
    state = {
        showDetailJob: false,
        jobs: [],
        pageIndex: 1,
        pageSize: 10,
        totalItems: 0
    }

    componentDidMount() {
        this.searchJob(this.state.pageIndex);
    }

    searchJob = ({ page }) => {
        this.setState({ loading: true });
        page = page || this.state.pageIndex;
        client.searchJob({ page })
            .then(({ data: jobs, current_page: pageIndex, per_page: pageSize, total: totalItems }) => {
                this.setState({
                    jobs,
                    pageIndex,
                    pageSize,
                    totalItems,
                    loading: false
                });
            })
            .catch((err) => console.warn(err))
    }

    onChangePage = (page) => {
        this.searchJob({ page });
    }

    createJob = () => {
        const { history } = this.props;
        history.push('/post-job');
    }

    renderHeader = () => {
        return (
            <div className='row justify-content-start text-left mb-5'>
                <div className='col-md-9 aos-init aos-animate' data-aos='fade'>
                    <h2 className='font-weight-bold text-black'>Việc gần đây</h2>
                </div>
                <div className='col-md-3 aos-init aos-animate' data-aos='fade' data-aos-delay='200'>
                    <PermissionComponent permission={ROLE_COMPANY}>
                        <Button className='py-3' blockStyle={true} onClick={this.createJob}>
                            <span className='h5'>+</span> Tạo việc mới
                        </Button>
                    </PermissionComponent>

                </div>
            </div>
        )
    }

    showDetailJob = (id) => {
        const { history } = this.props;
        history.push({
            pathname: `/detail-job/${id}`,
        });
    }


    render() {
        const { loading, jobs, pageIndex, pageSize, totalItems } = this.state

        return (
            <div className='site-section bg-light'>
                <div className='container'>
                    {this.renderHeader()}
                    <JobList
                        btnText='Xem chi tiết'
                        btnAction={this.showDetailJob}
                        loading={loading}
                        jobs={jobs}
                        pageIndex={pageIndex}
                        pageSize={pageSize}
                        totalItems={totalItems}
                        onChangePage={this.onChangePage}
                    />
                </div>
            </div>
        )
    }
}
