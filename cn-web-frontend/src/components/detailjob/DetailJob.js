/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PermissionComponent from '../validator/PermissionComponent';
import { ROLE_CANDIDATE } from '../../core/utils/constant';
import FormCV from './FormCV';
import client from '../../core/api/client';
import { NotificationRef } from '../../App';

class DetailJobContent extends Component {


    state = {
        chooseCV: {}
    }
    
    applyJob = () => {
        const { chooseCV } = this.state;
        const { job } = this.props;
        if (typeof chooseCV.id === 'undefined') {
            return NotificationRef.current.addNotification({
                message: 'Chưa chọn cv',
                level: 'error',
                position: 'tc',
                autoDismiss: '100'
            });
        }
        client.applyCV({ cvId: chooseCV.id, jobId: job.id })
            .then((res) => {
                NotificationRef.current.addNotification({
                    message: 'Apply thành công',
                    level: 'success',
                    position: 'tc',
                    autoDismiss: '100'
                });
                this.setState({
                    appliedCV: chooseCV
                })
            })
    }

    chooseCV = (cv) => {
        this.setState({ chooseCV: cv })
    }

    render() {
        let { title_job, address, description, category_name, name_company, appliedCV = {} } = this.props.job;
        appliedCV = this.state.appliedCV ? this.state.appliedCV  : appliedCV;
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
                <PermissionComponent permission={ROLE_CANDIDATE}>
                    <FormCV chooseCV={this.chooseCV} />
                </PermissionComponent>
                <p className="mt-5">
                    {
                        (typeof appliedCV.id !== 'undefined')
                            ? (
                                <PermissionComponent permission={ROLE_CANDIDATE}>
                                    <span>Bạn đã appky công việc này với cv: 
                                        <a href={`${process.env.REACT_APP_API_URL}/${appliedCV.path}`} target='_blank'>{appliedCV.name}</a>
                                    </span>
                                </PermissionComponent>
                            )
                            : (
                                <PermissionComponent permission={ROLE_CANDIDATE}>
                                    <button className="btn btn-primary py-2 px-4" onClick={this.applyJob}>Apply Job</button>

                                </PermissionComponent>

                            )
                    }
                </p>
            </div>
        )
    }
}

export default DetailJobContent;
