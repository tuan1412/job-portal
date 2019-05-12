import React, { Component } from 'react'
import Layout from '../../components/layout/Layout';
import Loadable from '../../components/lazyload';
import Select from '../../components/formcontrols/Select';
import client from '../../core/api/client';
import { NotificationRef } from '../../App';

export default class PostJob extends Component {
    state = {
        title: '',
        address: '',
        category: '',
        fromSalary: 0,
        toSalary: 0,
        expireDate: '',
        categories: [{ value: '', name: 'Ngành nghề' }],
    }

    componentDidMount() {
        client.getCategories()
            .then((res) => {
                const result = res.map(({ name }) => {
                    return { value: name, name };
                });

                const { classLayout, ...rest } = this.props

                this.setState(({ categories }) => {
                    return {
                        categories: [...categories, ...result],
                        ...rest,
                    }
                })
            });
    }

    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value,
        })
    }

    onSelectCategory = (category) => {
        this.setState({
            category,
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        client
            .createJob({ ...this.state })
            .then(({ status }) => {
                if (status) {
                    NotificationRef.current.addNotification({
                        message: 'Tạo việc thành công',
                        level: 'success',
                        position: 'tc',
                        autoDismiss: '1'
                    });
                    this.setState({
                        title: '',
                        address: '',
                        category: '',
                        fromSalary: 0,
                        toSalary: 0,
                        expireDate: '',
                        description: '',
                        categories: [{ value: '', name: 'Ngành nghề' }],
                    })
                }
            })
            .catch((err) => {
                console.warn(err);
            })
    }

    render() {
        const { title, address, category, fromSalary, toSalary, expireDate, categories, description } = this.state
        return (
            <Layout>
                <div className='pl-pr-3 pt-5 pb-5 bg-light post-job'>
                    <div className='container bg-white'>
                        <div className='row'>
                            <form className='p-3 w-100' onSubmit={this.onSubmit}>
                                <div className='form-group row'>
                                    <label htmlFor='colFormLabelSm' className='col-sm-3 col-form-label'>Tiêu đề</label>
                                    <div className='col-sm-9'>
                                        <input type='text' value={title} name='title' onChange={this.onChange} className='form-control' id='colFormLabelSm' placeholder='e.g Lập trình web' />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='colFormLabelSm1' className='col-sm-3 col-form-label'>Địa chỉ</label>
                                    <div className='col-sm-9'>
                                        <input type='text' value={address} name='address' onChange={this.onChange} className='form-control' id='colFormLabelSm1' placeholder='Hà Nội' />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='colFormLabelSm7' className='col-sm-3 col-form-label'>Mô tả</label>
                                    <div className='col-sm-9'>
                                        <textarea value={description} name='description' onChange={this.onChange} className='form-control' id='colFormLabelSm7' placeholder='Quyền lợi làm việc..' />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='colFormLabelSm' className='col-sm-3 col-form-label'>Ngành nghề</label>
                                    <div className='col-sm-9'>
                                        <Select items={categories} value={category} onChange={this.onSelectCategory} />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='colFormLabelSm3' className='col-sm-3 col-form-label'>Lương từ</label>
                                    <div className='col-sm-9'>
                                        <input type='number' value={fromSalary} name='fromSalary' onChange={this.onChange} className='form-control' id='colFormLabelSm3' placeholder='0' />

                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='colFormLabelSm4' className='col-sm-3 col-form-label'>Lương đến</label>
                                    <div className='col-sm-9'>
                                        <input type='number' value={toSalary} name='toSalary' onChange={this.onChange} className='form-control' id='colFormLabelSm4' placeholder='0' />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='colFormLabelSm5' className='col-sm-3 col-form-label'>Ngày hết hạn</label>
                                    <div className='col-sm-9'>
                                        <input type='date' value={expireDate} name='expireDate' onChange={this.onChange} className='form-control' id='colFormLabelSm5' />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className='col-sm-3 col-form-label'></label>
                                    <div className="col-sm-9">
                                        <button type="submit" className="btn btn-primary">Tạo việc làm</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export const AsyncPostJob = Loadable({
    loader: () => import('pages/PostJob')
});