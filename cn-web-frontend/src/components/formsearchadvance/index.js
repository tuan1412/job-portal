import React, { Component } from 'react';
import Select from '../formcontrols/Select';

export default class FormSearchAdvance extends Component {
    state = {
        title: '',
        location: '',
        category: '',
        fromSalary: 0,
        toSalary: '',
        expireDate: ''
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
        const { callback } = this.props
        callback({ ...this.state })
    }

    render() {
        const { items } = this.props
        const { title, location, category, fromSalary, toSalary, expireDate } = this.state
        return (
            <div className='container'>
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
                                <input type='text' value={location} name='location' onChange={this.onChange} className='form-control' id='colFormLabelSm1' placeholder='Hà Nội' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm' className='col-sm-3 col-form-label'>Ngành nghề</label>
                            <div className='col-sm-9'>
                                <Select items={items} value={category} onChange={this.onSelectCategory} />
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
                                <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
