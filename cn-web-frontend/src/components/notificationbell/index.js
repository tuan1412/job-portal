import React, { Component } from 'react'
import './style.css';
import ListNotifications from './ListNotifications';

export default class NotifcationBell extends Component {
    state = {
        showListNoti: false,
    }

    toogleListNoti = () => {
        this.setState(({ showListNoti }) => {
            return {
                showListNoti: !showListNoti
            }
        })
    }
    render() {
        const { count } = this.props;
        const { showListNoti } = this.state;

        const dataCount = count || '';

        return (
            <div className='notification-bell-container'>
                <div className="notification-bell show-count" data-count={dataCount} onClick={this.toogleListNoti}>
                </div>
                {showListNoti && (
                    <ListNotifications />
                )}
            </div>

        )
    }
}
