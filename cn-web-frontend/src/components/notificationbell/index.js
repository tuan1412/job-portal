import React, { Component } from 'react'
import './style.css';
import ListNotifications from './ListNotifications';
import classnames from 'classnames';
import client from '../../core/api/client';

export default class NotifcationBell extends Component {
    state = {
        showListNoti: false,
        notifications: [],
        count: 0
    }

    componentDidMount() {
        client.getAllNotifactions()
            .then((notifications) => {
                const unseen = notifications.filter(({ status }) => {
                    return parseInt(status) === 0
                });
                this.setState({ notifications, count: unseen.length })
            })
        const pusher = window.pusher
        if (typeof pusher !== 'undefined' && typeof pusher.channel !== 'undefined') {
            pusher.channel.bind('notify', this.listenNotify);
        }
    }

    listenNotify = (data) => {
        this.setState(({ count, notifications }) => {
            return {
                count: count + 1,
                notifications: [data, ...notifications]
            }
        });
    }

    seenNoti = (id) => {
        const { notifications } = this.state;
        const index = notifications.findIndex((noti) => noti.id === id);
        let newNotifications = [...notifications];
        newNotifications[index] = { ...newNotifications[index], status: 1 };
        this.setState(({ count }) => {
            return {
                count: count - 1,
                notifications: newNotifications
            }
        })
    }

    toogleListNoti = () => {
        this.setState(({ showListNoti }) => {
            return {
                showListNoti: !showListNoti
            }
        })
    }
    render() {
        const { showListNoti, count, notifications } = this.state;

        const cls = classnames({
            'notification-bell': true,
            'show-count': !!count
        })

        return (
            <div className='notification-bell-container'>
                <div className={cls} data-count={count} onClick={this.toogleListNoti}>
                </div>
                {showListNoti && (
                    <ListNotifications seenNoti={this.seenNoti} notifications={notifications} />
                )}
            </div>

        )
    }
}
