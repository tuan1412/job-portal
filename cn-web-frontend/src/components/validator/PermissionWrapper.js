import React, { Component } from 'react'
import _ from '../../core/utils';
import Page403 from '../../pages/403';

export default class PermissionWrapper extends Component {
  render() {
    let { permission, children } = this.props
    if (!Array.isArray(permission)) {
      permission = [permission]
    }
    const myPermission = _.getPermission();
    const hasPermission = permission.some((per) => {
      return per === myPermission
    });
    return hasPermission ? children : <Page403 />
  }
}
