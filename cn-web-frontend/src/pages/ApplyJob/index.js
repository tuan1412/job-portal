/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Layout from '../../components/layout/Layout';
import Loadable from '../../components/lazyload';

export default class ApplyJob extends Component {
    render() {
        return (
            <Layout>
                <div className='pl-pr-3 pt-5 bg-light apply-job'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12 col-lg-8 mb-5">
                                <div className="p-5 bg-white">
                                    <div className="job-post-item-header d-flex align-items-center border-bottom">
                                        <h2 className="mr-3 text-black h4">
                                            <span className='text-primary'>Nộp hồ sơ ứng tuyển </span>
                                            Full Stack Developer
                                        </h2>
                                    </div>
                                    <div className="user-info text-warning h4 mt-3">
                                        Thông tin của bạn
                                    </div>
                                    <p>Họ và tên: Nguyễn Anh Tuấn</p>
                                    <p>Email: tuannguyenanh1412@gmail.com</p>
                                    <div className="user-info text-warning h4 mt-3">
                                        Hồ sơ của bạn
                                    </div>
                                    <p>
                                        Bạn chưa có hồ sơ?
                                    </p>
                                    <p><button type="button" class="btn btn-warning">Chọn hồ sơ</button></p>
                                    <div className="apply-job-footer border-top pt-3 mt-4">
                                        <a href="#" class="btn btn-primary  py-2 px-4">Apply Job</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="p-5 mb-3 bg-white">
                                    <h3 class="h5 text-black mb-3 border-bottom">Thông tin việc làm</h3>
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Tiêu đề</th>
                                                <td>Lập trình viên</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Ngành</th>
                                                <td>Công nghệ thông tin</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Địa điểm</th>
                                                <td>Hà Nội</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export const AsyncApply = Loadable({
    loader: () => import('pages/ApplyJob')
});
