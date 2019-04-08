import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import './style.css';

export default class CustomModal extends Component {
    render() {
        const classNames = {
            modal: 'job-start-modal'
        }
        return (
            <Modal {...this.props} classNames={classNames} showCloseIcon={false} center>
                {this.props.children}
            </Modal>
        )
    }
}
