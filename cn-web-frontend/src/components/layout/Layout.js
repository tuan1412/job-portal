import React, { Component, Fragment } from 'react'
import Header from './Header';
import SubscribeMail from './SubscribeMail';
import Footer from './Footer';

export default class Layout extends Component {
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
