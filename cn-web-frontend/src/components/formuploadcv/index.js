import React, { Component } from 'react'

export default class FormUploadCV extends Component {
    state = {
        name: '',
        file: null
    }


    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value,
        })
    }

    onChangeFile = (ev) => {
        const { files } = ev.target;

        if (files.length > 0) {
            this.setState({ file: files[0] })
        }
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        const { callback } = this.props
        callback({ ...this.state })
    }

    render() {
        const { name } = this.state;
        return (
            <div className='container'>
                <div className='row'>
                    <form className='p-3 w-100' onSubmit={this.onSubmit}>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm' className='col-sm-4 col-form-label'>Tên CV</label>
                            <div className='col-sm-8'>
                                <input type='text' value={name} name='name' onChange={this.onChange} className='form-control' id='colFormLabelSm' placeholder='CV React' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='colFormLabelSm' className='col-sm-4 col-form-label'>File upload</label>
                            <div className='col-sm-8'>
                                <input type='file' onChange={this.onChangeFile} className='form-control' id='colFormLabelSm' />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className='col-sm-4 col-form-label'></label>
                            <div className="col-sm-8">
                                <button type="submit" className="btn btn-primary">Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
