import React, { Component } from 'react'
import Loadable from '../../components/lazyload';
import Layout from '../../components/layout/Layout';
import client from '../../core/api/client';
import _ from '../../core/utils';
import ListUser from './ListUser';

export default class DetailCompany extends Component {
    state = {
        company: {}
    }

    componentDidMount() {
        const { match } = this.props;
        const { id } = match.params;
        client.getDetailCompany({ id })
            .then(({ company }) => {
                this.setState({ company })
            });
    }

    renderUsers = () => {
        const { match } = this.props;
        const { id } = match.params;
        const { listUsers } = this.state.company;

        if (_.isCompanyManager(id)) {
            return (
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <i className='fa fa-leaf fa-fw'></i> Danh sách nhân viên
                    </div>
                    <div className='panel-body'>
                        <p>Quản lý nhân viên của mình một cách dễ dàng</p>
                        <div>
                            <ListUser listUsers={listUsers} />
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }

    render() {
        const { company } = this.state;
        const { name, email, website, description, title } = company;

        return (
            <Layout>
                <section className='profile-detail'>
                    <div className='container'>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='basic-information'>
                                    <div className='row mb-4'>
                                        <div className='col-md-3 col-sm-3'>
                                            <img src='/images/microsoft.png' alt='' className='img-responsive' />
                                        </div>
                                        <div className='col-md-9 col-sm-9'>
                                            <div className='profile-content'>
                                                <h2>{title}<span>{name}</span></h2>
                                                <ul className='information'>
                                                    <li><span>Tên:</span>{name}</li>
                                                    <li><span>Website:</span>{website}</li>
                                                    <li><span>Mail:</span>{email}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>
                                            <i className='fa fa-user fa-fw'></i> Về công ty
							            </div>
                                        <div className='panel-body'>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    {this.renderUsers()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export const AsyncDetailCompany = Loadable({
    loader: () => import('pages/DetailCompany')
});

