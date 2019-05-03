import React, { Component } from 'react'
import Loadable from '../../components/lazyload';
import './style.css';
import Header from '../../components/layout/Header';

export default class Page404 extends Component {
    render() {
        return (
            <div className="not-found-page">
                <Header />
                <div className="not-found-content">
                    <div className="not-found-container">
                        <div className="not-found-sign">404</div>
                        <h1>Access to this page is restricted.</h1>
                        <p>Ensure you have sufficient permissions to access the same.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export const Async404 = Loadable({
    loader: () => import('pages/404')
});

