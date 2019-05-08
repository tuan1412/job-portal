import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from '../../core/utils';
import { ROLE_MANAGER, ROLE_COMPANY } from '../../core/utils/constant';

class PermissionComponent extends Component {
    login = () => {
        const { history, location } = this.props;
        history.push({
            pathname: '/login',
            state: { from: location.pathname }
        });
    }

    render() {
        const { permission } = this.props;
        let permissionUser = _.getPermission();
        permissionUser = permissionUser === ROLE_MANAGER ? ROLE_COMPANY : permissionUser;

        if (!permissionUser) {
            return (
                React.cloneElement(this.props.children, { onClick: this.login })
            )
        }
        if (permissionUser === permission) {
            return (
                React.cloneElement(this.props.children)
            )
        }
        return null;
    }
}

export default withRouter(PermissionComponent)