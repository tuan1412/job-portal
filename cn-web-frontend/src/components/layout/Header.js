/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PermissionComponent from '../validator/PermissionComponent';
import { ROLE_COMPANY, ROLE_MANAGER } from '../../core/utils/constant';
import _ from '../../core/utils';
import client from '../../core/api/client';
import NotifcationBell from '../notificationbell';

var siteMenuClone = function () {
    $('.site-mobile-menu-body').empty();
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });
    $('.site-mobile-menu-body .notification-bell-container').remove();

    setTimeout(function () {
        var counter = 0;
        $('.site-mobile-menu .has-children').each(function () {
            var $this = $(this);
            $this.prepend('<span class="arrow-collapse collapsed">');
            $this.find('.arrow-collapse').attr({
                'data-toggle': 'collapse',
                'data-target': '#collapseItem' + counter,
            });
            $this.find('> ul').attr({
                'class': 'collapse',
                'id': 'collapseItem' + counter,
            });
            counter++;
        });
    }, 1000);
}

export default class Header extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        if (_.isAuth()) {
            const userInfo = _.getUserInfo();
            const id = userInfo.id;
            client.getDetailUser({ id })
                .then(({ user }) => {
                    this.setState({ user })
                });
        }
    }

    componentDidUpdate() {
        siteMenuClone();
    }

    onLogout = () => {
        this.setState({ user: null }, () => {
            _.logout();
            this.props.history.push('/')
        });
    }

    renderUserInfo = () => {
        const { user } = this.state;
        const avatar = _.buildAvatarUrl(user.path_avatar);
        return (
            <Fragment>
                <NotifcationBell count='5' />

                <li className="has-children">
                    <span>
                        <img
                            className='img img-thumbnail'
                            src={avatar}
                            alt='avatar'
                            style={{ width: 38, height: 38, borderRadius: '50%' }}
                        />
                        {user.fullname}
                    </span>

                    <ul className="dropdown">
                        <li>
                            <Link to={`/detail-user/${user.id}`}>
                                Trang cá nhân
                        </Link>
                        </li>
                        <li>
                            <Link to='/logout'>
                                Đăng xuất
                        </Link>
                        </li>
                    </ul>
                </li>
            </Fragment>

        )
    }
    render() {
        const { user } = this.state;
        let company_id = '';
        if (_.isAuth()) {
            company_id = _.getUserInfo()['company_id'];
        }
        return (
            <Fragment>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <header className="site-navbar py-1" role="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-xl-2">
                                <h1 className="mb-0">
                                    <Link to='/'>
                                        <span className="text-black h2 mb-0">Job<strong>start</strong></span>
                                    </Link>
                                </h1>
                            </div>

                            <div className="col-10 col-xl-10 d-none d-xl-block">
                                <nav className="site-navigation text-right" role="navigation">

                                    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li>
                                            <Link to='/'>
                                                Trang chủ
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to='/list-job'>Tìm việc ngay</Link>
                                        </li>

                                        <PermissionComponent permission={[ROLE_COMPANY, ROLE_MANAGER]} requireAuth>
                                            <li>
                                                <Link to={`/detail-company/${company_id}`}>
                                                    Công ty của tôi
                                                </Link>
                                            </li>
                                        </PermissionComponent>
                                        <PermissionComponent permission={[ROLE_COMPANY, ROLE_MANAGER]} requireAuth>
                                            <li>
                                                <Link to='/manage-job'>
                                                    Quản lý việc
                                                </Link>
                                            </li>
                                        </PermissionComponent>
                                        <PermissionComponent permission={[ROLE_COMPANY, ROLE_MANAGER]}>
                                            <li>
                                                <Link to='/post-job'>
                                                    Tạo việc làm
                                                </Link>
                                            </li>
                                        </PermissionComponent>
                                        {!_.isAuth() && (
                                            <li><Link to='/login'>Đăng nhập</Link></li>
                                        )}
                                        {user && this.renderUserInfo()}
                                    </ul>
                                </nav>
                            </div>

                            <div className="col-6 col-xl-2 text-right d-block">
                                <div className="d-inline-block d-xl-none ml-md-0 mr-3 py-3" style={{ position: 'relative', top: '3px' }}>

                                    {_.isAuth() && <NotifcationBell count='5' />}
                                </div>
                                <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: '3px' }}>

                                    <a href="#" className="site-menu-toggle js-menu-toggle text-black">
                                        <span className="icon-menu h3">
                                        </span></a></div>

                            </div>

                        </div>
                    </div>

                </header>
            </Fragment>
        )
    }
}
