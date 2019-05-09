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
                <Header history={this.props.history} />
                {this.props.children}
                <SubscribeMail />
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(Layout);
