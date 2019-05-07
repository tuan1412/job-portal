/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PermissionComponent from '../validator/PermissionComponent';
import { ROLE_CANDIDATE } from '../../core/utils/constant';
import FormCV from './FormCV';

class DetailJobContent extends Component {

    applyJob = () => {
        console.log('applyJob');
    }

    render() {
        const { title_job, address, description, category_name, name_company } = this.props.job;

        return (
            <div className="container p-5 bg-white">
                <div className="row">
                    <div className="mb-md-5 col-md-12 col-xs-6">
                        <div className='panel panel-default'>
                            <div className='panel-heading'>
                                <i className='fa fa-briefcase'></i> Thông tin công việc
                            </div>
                        </div>
                        <div className='panel-body mt-3'>
                            <div className="job-post-item-header d-flex align-items-center">
                                <h2 className="mr-3 text-black h4">{title_job}</h2>
                                <div className="badge-wrap">
                                    <span className="bg-danger text-white badge py-2 px-4">{category_name}</span>
                                </div>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                                <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">{name_company}</a></div>
                                <div><span className="fl-bigmug-line-big104"></span> <span>{address}</span></div>
                            </div>
                            <p className='mt-3'>{description}</p>
                        </div>
                    </div>
                </div>
                <FormCV />
                <p className="mt-5">
                    <PermissionComponent permission={ROLE_CANDIDATE}>
                        <button className="btn btn-primary py-2 px-4" onClick={this.applyJob}>Apply Job</button>
                    </PermissionComponent>
                </p>
            </div>
        )
    }
}

export default DetailJobContent;
