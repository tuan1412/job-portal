/* eslint-disable no-restricted-globals */
import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import Header from './Header';
import SubscribeMail from './SubscribeMail';
import Footer from './Footer';
import Banner from './Banner';

class LayoutWithBanner extends Component {

    formatUrl = (s) => {
        if (typeof s !== 'string') return '';
        s = s.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        return s;
    }

    render() {
        const { history } = this.props;
        const { pathname } = history.location;
        const page = pathname.split('/')[1] || '';
        let prev = 'Home';
        let current = this.formatUrl(page);

        return (
            <Fragment>
                <Header />
                <Banner prev={prev} current={current} />
                {this.props.children}
                <SubscribeMail />
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(LayoutWithBanner);
