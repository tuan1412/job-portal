import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const UsersPage = Loadable({
    loader: () => import(_UsersPage)
});
class _UsersPage extends Component {
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

export default _UsersPage;