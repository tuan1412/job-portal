import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const JobsPage = Loadable({
    loader: () => import(_JobsPage)
});

class _JobsPage extends Component {
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

export default _JobsPage;