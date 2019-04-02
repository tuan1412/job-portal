import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const UserDetailPage = Loadable({
    loader: () => import(_UserDetailPage)
});
class _UserDetailPage extends Component {
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

export default _UserDetailPage;