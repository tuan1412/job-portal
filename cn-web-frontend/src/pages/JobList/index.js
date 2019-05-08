import React, { Component } from 'react'
import FormSearchJob from '../../components/formsearchjob/FormSearchJob';
import JobList from '../../components/joblist/JobList';
import Loadable from '../../components/lazyload';
import client from '../../core/api/client';
import Layout from '../../components/layout/Layout';

export default class ListJobSearch extends Component {
    state = {
        title: '',
        location: '',
        category: '',
        jobs: [],
        pageIndex: 1,
        pageSize: 10,
        totalItems: 0
    }

    componentDidMount() {
        const { history } = this.props;
        const { state } = history.location;
        if (state) {
            this.setState({ ...state });
        }
    }

    searchJob = ({ title, location, category, page }) => {
        this.setState({ loading: true });
        page = page || this.state.pageIndex;
        client.searchJob({ title, location, category, page })
            .then(({ data: jobs, current_page: pageIndex, per_page: pageSize, total: totalItems }) => {
                this.setState({
                    jobs,
                    pageIndex,
                    pageSize,
                    totalItems,
                    title,
                    location,
                    category,
                    loading: false
                });
            })
            .catch((err) => console.warn(err))
    }

    searchJobAdvance = ({ category, expireDate, fromSalary, location, title, toSalary, callback }) => {
        client.searchJobAdvance({ category, expireDate, fromSalary, location, title, toSalary })
            .then(({ data: jobs, current_page: pageIndex, per_page: pageSize, total: totalItems }) => {
                this.setState({
                    jobs,
                    pageIndex,
                    pageSize,
                    totalItems,
                    title,
                    location,
                    category,
                    loading: false
                });
                callback();
            })
            .catch((err) => console.warn(err))
    }

    onChangePage = (page) => {
        const { title, location, category } = this.state;
        this.searchJob({ title, location, category, page });
    }

    showDetailJob = (id) => {
        const { history } = this.props;
        history.push({
            pathname: `/detail-job/${id}`,
        });
    }

    render() {
        const { jobs, pageIndex, pageSize, totalItems, loading, ...rest } = this.state
        return (
            <Layout>
                <div className="site-section bg-light">
                    <div className="container mb-4">
                        <div className="col-md-12 bg-white py-5">
                            <FormSearchJob {...rest} callback={this.searchJob} searchAdvance={this.searchJobAdvance} />
                        </div>
                    </div>
                    <div className="container">
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
            </Layout>
        )
    }
}

export const AsyncListJob = Loadable({
    loader: () => import('pages/JobList')
});
