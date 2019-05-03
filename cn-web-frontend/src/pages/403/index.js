import React, { Component } from 'react'
import Loadable from '../../components/lazyload';
import './style.css';
import Header from '../../components/layout/Header';

export default class Page403 extends Component {
    render() {
        return (
            <div className="forbiden-page">
                <Header />
                <div className="forbiden-content">
                    <div className="forbidden-container">
                        <div className="forbidden-sign"></div>
                        <h1>Access to this page is restricted.</h1>
                        <p>Ensure you have sufficient permissions to access the same.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export const Async403 = Loadable({
    loader: () => import('pages/403')
});

