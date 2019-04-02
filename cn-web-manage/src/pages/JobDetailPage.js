import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const JobDetailPage = Loadable({
    loader: () => import(_JobDetailPage)
});


class _JobDetailPage extends Component {
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

export default _JobDetailPage;