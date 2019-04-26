import React, { Component } from 'react'
import Tabpane from '../tabpane';
import SignUp from './SignUp';
import './style.css';
import client from '../../core/api';

export default class SignUpModal extends Component {
    signUpCandidate = ({ candidate:username, password, email, avatar }) => {
        client({
            method: 'post',
            url: '/api/auth/candidate_user/signup',
            data: { username, password, email, avatar },
            isFormData: true
        }).then(res => {
            this.props.callback(res);
        }).catch(err => {
            console.log(err);
        })
    }

    signUpCompany = ({ company:username, password, companyName:company_name, email, avatar }) => {
        client({
            method: 'post',
            url: '/api/auth/candidate_user/signup',
            data: { username, company_name, password, email, avatar },
            isFormData: true
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    panes = [
        {
            label: 'For candidate',
            pane: <SignUp callback={this.signUpCandidate} type='candidate'  />
        },
        {
            label: 'For company',
            pane: <SignUp type='company' callback={this.signUpCandidate} />
        }
    ]

    render() {
        return (
            <Tabpane panes={this.panes} />
        )
    }
}
