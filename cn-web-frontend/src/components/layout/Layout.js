/* eslint-disable no-restricted-globals */
import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import Header from './Header';
import SubscribeMail from './SubscribeMail';
import Footer from './Footer';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this.props.children}
                <SubscribeMail />
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(Layout);
