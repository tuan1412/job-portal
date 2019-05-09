/* eslint-disable no-restricted-globals */
import React, { Component } from 'react'
import client from '../../core/api/client';
import { NotificationModalRef } from '../../components/modal';
export default class ListApplyCV extends Component {

    state = {
        listCvs: this.props.listCvs,
    }

    componentWillReceiveProps({ listCvs }) {
        this.setState({
            listCvs
        })
    }

    showUser = (id) => {
        window.open(`${location.origin}/detail-user/${id}`, '_blank');
    }

    showCv = (path) => {
        window.open(`${process.env.REACT_APP_API_URL}/${path}`, '_blank');
    }

    mapStatus = {
        '1': 'Chấp nhận',
        '0': 'Không có',
        '-1': 'Loại bỏ'
    }

    apceptCV = (id) => {
        client.acceptCVByCompany(id)
            .then(() => {
                const { listCvs } = this.state;
                const index = listCvs.findIndex((cv) => cv.id === id);
                let newListCVs = [...listCvs];
                const oldCv = newListCVs[index];
                newListCVs[index] = { ...oldCv, status: 1 };
                this.setState({
                    listCvs: newListCVs
                }, () => {

                    NotificationModalRef.current.addNotification({
                        message: 'Chấp nhận thành công',
                        level: 'success',
                        position: 'tc',
                        autoDismiss: '2'
                    });
                })

            })
    };

    rejectCV = (id) => {
        client.rejectCVByCompany(id)
            .then(() => {
                const { listCvs } = this.state;
                const index = listCvs.findIndex((cv) => cv.id === id);
                let newListCVs = [...listCvs];
                const oldCv = newListCVs[index];
                newListCVs[index] = { ...oldCv, status: -1 };
                this.setState({
                    listCvs: newListCVs
                }, () => {

                    NotificationModalRef.current.addNotification({
                        message: 'Loại bỏ thành công',
                        level: 'success',
                        position: 'tc',
                        autoDismiss: '2'
                    });
                })

            })
    };

    renderListCVs = () => {
        const { listCvs } = this.state;
        return listCvs.map(({ path, name, user_id, full_name, status, id }, i) => {
            return (
                <tr key={path}>
                    <th scope='row'>{i + 1}</th>
                    <td onClick={() => this.showUser(user_id)}>{full_name}</td>
                    <td onClick={() => this.showCv(path)}>{name}</td>
                    <td>{this.mapStatus[status]}</td>
                    <td>
                        <button disabled={parseInt(status) === 1} className='btn btn-primary mr-2' onClick={() => this.apceptCV(id)}>
                            Chấp nhận
                        </button>
                        <button disabled={parseInt(status) === -1} className='btn btn-danger mr-2' onClick={() => this.rejectCV(id)}>
                            Loại bỏ
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col' style={{ minWidth: 200 }}>Tên</th>
                            <th scope='col' style={{ minWidth: 150 }}>Tên CV</th>
                            <th scope='col' style={{ minWidth: 150 }}>Trạng thái</th>
                            <th scope='col' style={{ minWidth: 250 }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListCVs()}
                    </tbody>
                </table>
            </div>
        )
    }
}
