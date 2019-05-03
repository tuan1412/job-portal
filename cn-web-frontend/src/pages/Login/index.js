import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import FormLogin from './FormLogin';
import Loadable from '../../components/lazyload';
import _ from '../../core/utils';
import Layout from '../../components/layout/Layout';

export default class Login extends Component {
    render() {
        console.log(this.props);
        return (
            _.isAuth() 
            ? <Redirect to='/' /> 
            : (
                <Layout>
                    <FormLogin {...this.props} />
                </Layout>
            )
        )
    }
}

export const AsyncLogin = Loadable({
    loader: () => import('pages/Login')
});
