/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import client from '../../core/api/client';

export default class ListNotifications extends Component {
    getDetailJob = (job_id, id) => {
        client.seenNotification(id)
            .then(() => {
                this.props.seenNoti(id)
            });
        window.open(`${location.origin}/detail-job/${job_id}`);
    }

    renderNotifications = () => {
        const { notifications } = this.props;
        return notifications.map((notification) => {
            const { id, description, job_id, status } = notification;
            let cls = "list-group-item list-group-item-action flex-column align-items-start";
            cls += status ? ' seen' : '';
            return (
                <span 
                    key={id} 
                    className={cls}
                    onClick={() => this.getDetailJob(job_id, id)}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Thông báo</h5>
                    </div>
                    <p className="mb-1">{description}</p>
                </span>
            )
        });
    }
    render() {
        return (
            <div className="list-group list-notifications">
                {this.renderNotifications()}
            </div>
        )
    }
}
