/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Loadable from '../../components/lazyload';
import Layout from '../../components/layout/Layout';
import ListCV from './ListCV';
import client from '../../core/api/client';
import _ from '../../core/utils';
import CustomModal from '../../components/modal';
import FormEditUser from './FormEditUser';

export default class DetailUser extends Component {

    state = {
        user: {},
        openEdit: false
    }

    componentDidMount() {
        const { match } = this.props;
        const { id } = match.params;
        client.getDetailUser({ id })
            .then(({ user }) => {
                this.setState({ user })
            });
    }

    editUser = () => {
        this.setState({ openEdit: true })
    }

    closeEdit = () => {
        this.setState({ openEdit: false })
    }

    renderBtnEdit = () => {
        const { match } = this.props;
        const { id } = match.params;

        if (_.isAuthUser(id)) {
            return (
                <button className='btn btn-warning' onClick={this.editUser} style={{ float: 'right' }}>
                    <i className='fa fa-pencil' aria-hidden='true'></i>
                </button>
            )
        }
        return null;
    }

    renderCV = () => {
        const { match } = this.props;
        const { id } = match.params;

        if (_.isAuthUser(id)) {
            const { list_cvs: listCVS } = this.state.user;
            return (
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <i className='fa fa-leaf fa-fw'></i> Danh sách CV
                    </div>
                    <div className='panel-body'>
                        <p>Quản lý công việc của mình một cách dễ dàng</p>
                        <ListCV listCVs={listCVS} />
                    </div>
                </div>
            )
        }
        return null;
    }

    render() {
        const { user, openEdit } = this.state;
        const { full_name, username, email, mobile, birthday, description } = user;
        return (
            <Layout>
                <section className='profile-detail bg-light'>
                    <CustomModal 
                        open={openEdit}
                        onClose={this.closeEdit}
                    >
                        <FormEditUser user={user}/>
                    </CustomModal>
                    <div className='container'>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='basic-information mb-4'>
                                    <div className='row mb-4'>
                                        <div className='col-md-3 col-sm-3'>
                                            <img src='/images/person_1.jpg' alt='' className='img-responsive' />
                                        </div>
                                        <div className='col-md-9 col-sm-9'>
                                            <div className='profile-content'>
                                                {this.renderBtnEdit()}
                                                <h2>{full_name}<span>{username}</span>
                                                </h2>
                                                <ul className='information'>
                                                    <li><span>Họ và tên:</span>{full_name}</li>
                                                    <li><span>Email:</span>{email}</li>
                                                    <li><span>Số điện thoại:</span>{mobile}</li>
                                                    <li><span>Ngày sinh:</span>{birthday}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>
                                            <i className='fa fa-user fa-fw'></i> Về tôi
								    </div>
                                        <div className='panel-body'>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    {this.renderCV()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export const AsyncDetailUser = Loadable({
    loader: () => import('pages/DetailUser')
});
