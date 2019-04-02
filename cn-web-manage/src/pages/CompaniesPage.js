import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const CompaniesPage = Loadable({
    loader: () => import(_CompaniesPage)
});


class _CompaniesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <></>
        );
    }
}

export default _CompaniesPage;