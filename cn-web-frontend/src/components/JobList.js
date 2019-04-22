import React, { Component, Fragment } from 'react'
import JobItem from './JobItem';
import Pagination from './Pagination';

export default class JobList extends Component {

  renderListJob = () => {
    return this.props.jobs.map((job, index) => {
      return (
        <JobItem key={index} {...job} />
      )
    });
  }
  render() {
    return (
      <Fragment>
        {this.renderListJob()}
        <Pagination pageIndex={1} pageSize={10} pageRange={5} totalItems={200} />
      </Fragment>
    )
  }
}
