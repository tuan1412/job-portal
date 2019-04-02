import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const CompanyDetailPage = Loadable({
    loader: () => import(_CompanyDetailPage)
});

class _CompanyDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('CompanyDetailPage: ', props);
    }
    render() {
        return (
            <></>
        );
    }
}

export default _CompanyDetailPage;