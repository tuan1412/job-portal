import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const NewJobsPage = Loadable({
    loader: () => import(_NewJobsPage)
});

class _NewJobsPage extends Component {
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

export default _NewJobsPage;