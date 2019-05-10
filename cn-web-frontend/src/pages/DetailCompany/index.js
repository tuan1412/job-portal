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
        if (_.isCandidateUser()) {
            client.getDetailCompanyByCandidate(id)
                .then(({ company }) => {
                    this.setState({ company })
                })
        } else {
            client.getDetailCompany({ id })
                .then(({ company }) => {
                    this.setState({ company })
                });
        }

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
    followCompany = () => {
        const { company } = this.state;
        const { id } = company;
        client.followCompany(id)
            .then(() => {
                this.setState({
                    company: { ...company, isFollow: true }
                })
            });
    }

    unfollowCompany = () => {
        const { company } = this.state;
        const { id } = company;
        client.unfollowCompany(id)
            .then(() => {
                this.setState({
                    company: { ...company, isFollow: false }
                })
            });
    }
    renderAvatar = () => {
        const { match } = this.props;
        const { id } = match.params;
        const { company } = this.state;
        const avatar = _.buildAvatarUrl(company.path_avatar, 'company');

        if (_.isAuthUser(id)) {
            return (
                <div className='avatar-container' onClick={this.changeAvatar}>
                    <img src={avatar} alt='' className='img-responsive' />
                    <div className='edit-avatar'>
                        <label htmlFor='avatar'>Thay ảnh</label>
                        <input id='avatar' type='file' accept='.png, .jpg, .jpeg' onChange={this.readUrl} />
                    </div>
                </div>
            )
        }
        return (
            <div className='avatar-container'>
                <img src={avatar} alt='' className='img-responsive' />
            </div>
        )
    }

    renderBtnFollow = () => {
        const { isFollow } = this.state.company;

        if (_.isCandidateUser()) {
            if (!isFollow) {
                return (
                    <button className='btn btn-warning' onClick={this.followCompany} style={{ float: 'right' }}>
                        Theo dõi
                    </button>
                )
            }
            return (
                <button className='btn btn-warning' onClick={this.unfollowCompany} style={{ float: 'right' }}>
                    Không theo dõi
                </button>
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
                                            {this.renderAvatar()}
                                        </div>
                                        <div className='col-md-9 col-sm-9'>
                                            <div className='profile-content'>
                                                {this.renderBtnFollow()}
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

