import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import classnames from 'classnames';
import NotificationSystem from 'react-notification-system';

import './style.css';

export const NotificationModalRef = React.createRef();

export default class CustomModal extends Component {
    render() {
        const { cls = '' } = this.props;
        const clsModal = classnames('job-start-modal', cls);
        const classNames = { modal: clsModal }
        return (
            <Modal {...this.props} classNames={classNames} showCloseIcon={false} center>
                <NotificationSystem ref={NotificationModalRef} />
                {this.props.children}
            </Modal>
        )
    }
}
