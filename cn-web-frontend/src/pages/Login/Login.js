import React, { Component } from 'react'
import Layout from '../../components/layout/Layout';
import FormLogin from './FormLogin';

export default class Login extends Component {
    render() {
        return (
            <Layout>
                <FormLogin />
            </Layout>
        )
    }
}
