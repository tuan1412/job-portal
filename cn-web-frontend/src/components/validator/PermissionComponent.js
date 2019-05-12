import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from '../../core/utils';

class PermissionComponent extends Component {
    login = () => {
        const { history, location } = this.props;
        history.push({
            pathname: '/login',
            state: { from: location.pathname }
        });
    }

    render() {
        let { permission, requireAuth } = this.props;
        if (requireAuth && !_.isAuth()) return null;
        if (!Array.isArray(permission)) {
            permission = [permission]
        }

        let permissionUser = _.getPermission();
        const hasPermission = permission.some((per) => {
            return per === permissionUser
        });

        if (!permissionUser) {
            return (
                React.cloneElement(this.props.children, { onClick: this.login })
            )
        }
        if (hasPermission) {
            return (
                React.cloneElement(this.props.children)
            )
        }
        return null;
    }
}

export default withRouter(PermissionComponent)