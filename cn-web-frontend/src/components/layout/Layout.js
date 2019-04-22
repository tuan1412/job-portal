/* eslint-disable no-restricted-globals */
import React, { Component, Fragment } from 'react'
import Header from './Header';
import SubscribeMail from './SubscribeMail';
import Footer from './Footer';
import Banner from './Banner';

export default class Layout extends Component {
    whitePages = ['', 'login'];

    formatUrl = (s) => {
        if (typeof s !== 'string') return '';
        s = s.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        return s;
    }

    render() {
        const href = location.href;
        const page = href.split('/')[3] || '';
        const hideBanner = this.whitePages.includes(page);
        let prev = 'Home';
        let current;
        if (!hideBanner) {
            current = this.formatUrl(page);
        }
        return (
            <Fragment>
                <Header />
                {!hideBanner && <Banner prev={prev} current={current} />}
                {this.props.children}
                <SubscribeMail />
                <Footer />
            </Fragment>
        )
    }
}
