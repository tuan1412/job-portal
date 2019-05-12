import React, { Component, Fragment } from 'react'
import client from '../../core/api/client';
import CustomModal from '../modal';
import FormUploadCV from '../formuploadcv';
import { NotificationRef } from '../../App';
import classnames from 'classnames';

export default class FormCV extends Component {
    state = {
        listCVs: [],
        openEdit: false,
        openUpload: false,
        choosedCV: {},
        editCV: {}
    }
    componentDidMount() {
        client.getAllCVs()
            .then((listCVs) => {
                this.setState({ listCVs })
            })
    }

    renderCVs = () => {
        const { listCVs = [], choosedCV = {}} = this.state;
        if (listCVs.length === 0) return <tr><th>Không có cái CV</th></tr>
        return listCVs.map((cv, i) => {
            const { name, id } = cv;
            const cls = classnames({ 'bg-primary': id === choosedCV.id })
            return (
                <tr key={id} className={cls} onClick={() => this.chooseCV(cv)}>
                    <th scope='row' className='w-10'>{i + 1}</th>
                    <td className='w-60'>{name}</td>
                    <td className='w-30'>
                        <button type='button' className='btn btn-info mr-2' onClick={() => this.openCV(cv)}>
                            <i className='fa fa-search' aria-hidden='true'></i>
                        </button>
                        <button type='button' className='btn btn-warning mr-2' onClick={() => this.editCV(cv)}>
                            <i className='fa fa-pencil' aria-hidden='true'></i>
                        </button>
                        <button type='button' className='btn btn-danger mr-2' onClick={() => this.deleteCV(cv)}>
                            <i className='fa fa-trash' aria-hidden='true'></i>
                        </button>
                       
                    </td>
                </tr>
            )
        })
    }

    chooseCV = (cv) => {
        const { choosedCV } = this.state;
        if (cv.id === choosedCV.id) {
            return this.setState({ choosedCV: {} }, () => {
                this.props.chooseCV({});
            });
        } 
        this.setState({ choosedCV: cv }, () => {
            this.props.chooseCV(cv);
        });
    }

    editCV = (cv) => {
        this.setState({ openEdit: true, editCV: cv });
    }

    closeEdit = () => {
        this.setState({ openEdit: false })
    }

    closeUpload = () => {
        this.setState({ openUpload: false })
    }

    openUploadCV = () => {
        this.setState({ openUpload: true })
    }

    openCV = (cv) => {
        window.open(`${process.env.REACT_APP_API_URL}/${cv.path}`, '_blank');
    }

    onChangeEdit = (event) => {
        const name = event.target.value;
        this.setState(({ editCV }) => {
            return {
                editCV: { ...editCV, name }
            }
        });
    }

    confirmEdit = (event) => {
        event.preventDefault();
        const { editCV, listCVs } = this.state;
        this.setState({ openEdit: false });
        client.updateCV(editCV)
            .then(() => {
                const index = listCVs.findIndex((cv) => cv.id === editCV.id);
                let newListCVs = [...listCVs];
                newListCVs[index] = editCV;
                NotificationRef.current.addNotification({
                    message: 'Chỉnh sủa thành công',
                    level: 'success',
                    position: 'tc',
                    autoDismiss: '2'
                });
                this.setState({
                    listCVs: newListCVs,
                })
            })
    }

    deleteCV(deleteCV) {
        const { listCVs } = this.state;

        client.delete(deleteCV)
            .then(() => {
                let newListCVs = listCVs.filter((cv) => {
                    return cv.id !== deleteCV.id;
                })
                NotificationRef.current.addNotification({
                    message: 'Xóa thành công',
                    level: 'success',
                    position: 'tc',
                    autoDismiss: '2'
                });
                this.setState({
                    listCVs: newListCVs,
                })
            })
    }

    uploadCV = ({ name, file }) => {
        client.createCV({ name, cv: file })
            .then(({ cv }) => {
                const { listCVs } = this.state;
                const newListCVs = [...listCVs, { ...cv }];
                this.setState({
                    listCVs: newListCVs,
                    openUpload: false
                });
                NotificationRef.current.addNotification({
                    message: 'Upload thành công',
                    level: 'success',
                    position: 'tc',
                    autoDismiss: '2'
                });
            })
    }

    render() {
        const { openEdit, editCV = {}, openUpload } = this.state;
        return (
            <Fragment>
                <CustomModal
                    open={openEdit}
                    onClose={this.closeEdit}
                >
                    <div className='container' style={{ width: 500 }}>
                        <div className='row'>
                            <form className='w-100 p-3' onSubmit={this.confirmEdit} >
                                <div className='form-row'>
                                    <div className='col'>
                                        <input type='text' className='form-control' placeholder='Tên cv' value={editCV.name} onChange={this.onChangeEdit} />
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-primary form-control'>Chỉnh sửa</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </CustomModal>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <i className='fa fa-user fa-fw'></i> Hồ sơ của tôi
                    </div>
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col' className='w-10'>#</th>
                            <th scope='col' className='w-60'>Tên CV</th>
                            <th scope='col' className='w-30'>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCVs()}
                    </tbody>
                </table>
                <div className='custom-file-upload' onClick={this.openUploadCV}>
                    <i className='fa fa-cloud-upload'></i> Tải CV của bạn
                </div>
                <CustomModal
                    open={openUpload}
                    onClose={this.closeUpload}
                >
                    <FormUploadCV callback={this.uploadCV} />
                </CustomModal>
            </Fragment>
        )
    }
}
