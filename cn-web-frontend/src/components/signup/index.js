import React, { Component } from 'react'
import Tabpane from '../tabpane';
import SignUp from './SignUp';
import './style.css';

export default class SignUpModal extends Component {
    panes = [
        {
            label: 'For candidate',
            pane: <SignUp type='candidate' />
        },
        {
            label: 'For company',
            pane: <SignUp type='company' />

        }
    ]

    render() {
        return (
            <Tabpane panes={this.panes} />
        )
    }
}
