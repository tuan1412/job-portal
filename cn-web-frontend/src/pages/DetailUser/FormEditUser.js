import React, { Component } from 'react'


export default class FormEditUser extends Component {

    state = {
        user: this.props.user
    }

    componentWillReceiveProps({ user }) {
        this.setState({
            user
        });
    }

    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState(({ user }) => {
            return {
                user: { ...user, [name]: value }
            }
        });
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.callback(this.state);
    }

    render() {
        const { full_name, email, mobile, birthday, description } = this.state.user;

        return (
            <div className='container'>
                <div className='row'>
                    <form className='p-3 w-100' onSubmit={this.onSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm' className='col-sm-4 col-form-label'>Họ và tên</label>
                            <div className='col-sm-8'>
                                <input type='text' value={full_name} name='full_name' onChange={this.onChange} className='form-control' id='colFormLabelSm' placeholder='Nguyễn Anh Tuấn' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm1' className='col-sm-4 col-form-label'>Email</label>
                            <div className='col-sm-8'>
                                <input type='email' value={email} name='email' onChange={this.onChange} className='form-control' id='colFormLabelSm1' placeholder='tuan@gmail.com' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm3' className='col-sm-4 col-form-label'>Điện thoại</label>
                            <div className='col-sm-8'>
                                <input type='text' value={mobile} name='mobile' onChange={this.onChange} className='form-control' id='colFormLabelSm3' placeholder='0123456789' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm5' className='col-sm-4 col-form-label'>Ngày sinh</label>
                            <div className='col-sm-8'>
                                <input type='date' value={birthday} name='birthday' onChange={this.onChange} className='form-control' id='colFormLabelSm5' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm6' className='col-sm-4 col-form-label'>Mô tả</label>
                            <div className='col-sm-8'>
                                <textarea value={description} name='description' onChange={this.onChange} className='form-control' id='colFormLabelSm6' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label className='col-sm-4 col-form-label'></label>
                            <div className='col-sm-8'>
                                <button type='submit' className='btn btn-primary'>Chỉnh sửa</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
