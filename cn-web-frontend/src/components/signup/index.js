import React, { Component } from 'react'
import Tabpane from '../tabpane';
import SignUp from './SignUp';
import './style.css';
import client from '../../core/api/client';

export default class SignUpModal extends Component {
    signUpCandidate = ({ candidate: username, password, email, avatar }) => {
        client
            .signUpCandidate({ username, password, email, avatar })
            .then(res => {
                this.props.callback(res);
            }).catch(err => {
                console.warn(err);
            })
    }

    signUpCompany = ({ company: username, password, companyName: company_name, email, avatar }) => {
        client
            .signUpCompany({ username, company_name, password, email, avatar })
            .then(res => {
                this.props.callback(res);
            }).catch(err => {
                console.warn(err);
            });
    }

    panes = [
        {
            label: 'For candidate',
            pane: <SignUp callback={this.signUpCandidate} type='candidate' />
        },
        {
            label: 'For company',
            pane: <SignUp callback={this.signUpCompany} type='company' />
        }
    ]

    render() {
        return (
            <Tabpane panes={this.panes} />
        )
    }
}
