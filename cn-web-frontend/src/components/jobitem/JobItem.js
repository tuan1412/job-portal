/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Button from '../formcontrols/Button';
import _ from '../../core/utils';
import client from '../../core/api/client';

export default class JobItem extends Component {

    colors = ['bg-primary', 'bg-warning', 'bg-info', 'bg-secondary', 'bg-danger'];

    onAction = () => {
        const { btnAction, id } = this.props;
        btnAction(id)
    }

    getDetail = () => {
        const { title_company } = this.props;
        client.getCompanyId({ title: title_company })
            .then((resData) => {
                
            })
    }

    render() {
        const {
            title_job: title,
            category_name: type,
            address: location,
            title_company: company,
            btnText,
            to_salary,
            from_salary,
            expire_date
        } = this.props;
        return (
            <div className="row aos-init aos-animate" data-aos="fade">
                <div className="col-md-12">
                    <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                        <div className="mb-4 mb-md-0 mr-5">
                            <div className="job-post-item-header d-flex align-items-center">
                                <h2 className="mr-3 text-black h4">{title}</h2>
                                <div className="badge-wrap">
                                    <span className={`${_.sample(this.colors)} text-white badge py-2 px-4`}>{type}</span>
                                </div>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                                <div className="mr-3"><span className="fl-bigmug-line-portfolio23"> </span>
                                    <span onClick={this.getDetail}>{company}</span>
                                </div>
                                <div className="mr-3">
                                    <span className="fl-bigmug-line-big104"></span>
                                    <span> {location}</span>
                                </div>
                                <div className="mr-3">
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                    <span> {from_salary}-{to_salary}</span>
                                </div>
                                <div className="mr-3">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                    <span> {expire_date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <Button className="py-2 ml-2" onClick={this.onAction}>{btnText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
