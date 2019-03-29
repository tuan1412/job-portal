import React, { Component } from 'react'
import Layout from '../../components/layout/Layout';
import FormLogin from './FormLogin';
import Loadable from '../../components/lazyload';

export default class Login extends Component {
    render() {
        return (
            <Layout>
                <FormLogin />
            </Layout>
        )
    }
}

export const AsyncLogin = Loadable({
    loader: () => import('pages/Login')
});
