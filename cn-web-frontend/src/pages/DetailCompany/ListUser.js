/* eslint-disable no-restricted-globals */
import React, { Component, Fragment } from 'react'
import client from '../../core/api/client';
import { NotificationRef } from '../../App';
import CustomModal from '../../components/modal';

export default class ListUser extends Component {
    state = {
        openCreate: false,
        listUsers: this.props.listUsers,
    }

    componentWillReceiveProps({ listUsers }) {
        this.setState({
            listUsers
        })
    }

    openUser = ({ id }) => {
        window.open(`${location.origin}/detail-user/${id}`, '_blank');
    }

    deleteUser = (deleteUser) => {
        const { listUsers } = this.state;

        client.deleteUserByCM(deleteUser)
            .then(() => {
                let newListUsers = listUsers.filter((user) => {
                    return user.id !== deleteUser.id;
                })
                NotificationRef.current.addNotification({
                    message: 'Xóa thành công',
                    level: 'success',
                    position: 'tc',
                    autoDismiss: '2'
                });
                this.setState({
                    listUsers: newListUsers,
                })
            })
    }

    openCreateUser = () => {
        this.setState({ openCreate: true })
    }

    closeCreate = () => {
        this.setState({ openCreate: false })
    }

    onChangeEdit = ({ target }) => {
        const { name, value } = target;
        this.setState(({ createUser }) => {
            return {
                createUser: { ...createUser, [name]: value }
            }
        });
    }

    confirmCreate = (ev) => {
        ev.preventDefault();
        client.createUserByCM(this.state.createUser)
            .then((res) => {
                const { listUsers } = this.state;
                const newListUsers = [...listUsers, { ...res }];
                this.setState({
                    listUsers: newListUsers,
                    openUpload: false
                });
                NotificationRef.current.addNotification({
                    message: 'Tạo thành công',
                    level: 'success',
                    position: 'tc',
                    autoDismiss: '2'
                });
            })
    }

    renderUsers = () => {
        const { listUsers = [] } = this.state;
        if (listUsers.length === 0) return <tr><th>Không có nhân viên nào</th></tr>
        return listUsers.map((user, i) => {
            const { username, fullname, email, id } = user;
            return (
                <tr key={id}>
                    <th>{i + 1}</th>
                    <td>{username}</td>
                    <td>{fullname}</td>
                    <td>{email}</td>
                    <td>
                        <div>
                            <button type='button' className='btn btn-info mr-2' onClick={() => this.openUser(user)}>
                                <i className='fa fa-search' aria-hidden='true'></i>
                            </button>
                            <button type='button' className='btn btn-danger mr-2' onClick={() => this.deleteUser(user)}>
                                <i className='fa fa-trash' aria-hidden='true'></i>
                            </button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const { openCreate, createUser = {} } = this.state;
        const { username = '', password = '' } = createUser;
        return (
            <Fragment>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col' style={{ minWidth: 20 }}>#</th>
                                <th scope='col'>Username</th>
                                <th scope='col'>Họ tên</th>
                                <th scope='col'>Email</th>
                                <th scope='col' style={{ minWidth: 200 }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUsers()}
                        </tbody>
                    </table>
                </div>


                <div className='custom-file-upload' onClick={this.openCreateUser}>
                    <i className='fa fa-plus'></i> Tạo thêm nhân viên
                </div>
                <CustomModal
                    open={openCreate}
                    onClose={this.closeCreate}
                >
                    <div className='container' style={{ width: 500 }}>
                        <div className='row'>
                            <form className='w-100 p-3' onSubmit={this.confirmCreate} >
                                <div className='form-row'>
                                    <div className='col'>
                                        <input type='text' className='form-control' name='username' placeholder='Username' value={username} onChange={this.onChangeEdit} />
                                    </div>
                                    <div className='col'>
                                        <input type='password' className='form-control' name='password' placeholder='Password' value={password} onChange={this.onChangeEdit} />
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-primary form-control'>Tạo</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </CustomModal>
            </Fragment>
        )
    }
}
