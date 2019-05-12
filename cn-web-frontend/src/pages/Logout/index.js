import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import _ from '../../core/utils';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        _.logout();
    }

    render() {
        return (
            <Redirect to='/' />
        )
    }
}
