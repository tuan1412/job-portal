import React, { Component } from 'react'
import FormLogin from './FormLogin';
import Loadable from '../../components/lazyload';

export default class Login extends Component {
    render() {
        return (
            <FormLogin />
        )
    }
}

export const AsyncLogin = Loadable({
    loader: () => import('pages/Login')
});
