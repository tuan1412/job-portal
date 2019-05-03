import React, { Component, Fragment } from 'react'
import JobItem from '../jobitem/JobItem';
import Pagination from '../pagination/Pagination';
import Loading from '../loading';

export default class JobList extends Component {

  renderConent = () => {
    const { jobs, loading, btnAction, btnText, ...rest } = this.props;
    return (
      <Fragment>
        {
          jobs.length === 0
          ? <div className="bg-white p-5 text-center">Không có công việc nào</div>
          : jobs.map(({ id, ...rest }) => {
            return (
              <JobItem key={id} id={id} {...rest} btnAction={btnAction} btnText={btnText} />
            )
          })
        }
        <Pagination {...rest} />
      </Fragment>
    )

  }
  render() {
    const { loading } = this.props
    return (
      <Fragment>
        {
          loading
            ? <Loading />
            : this.renderConent()
        }
      </Fragment>
    )
  }
}
