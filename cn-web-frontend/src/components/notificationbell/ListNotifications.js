/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class ListNotifications extends Component {
    render() {
        return (
            <div className="list-group list-notifications">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus.</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus.</p>
                </a>
            </div>
        )
    }
}
