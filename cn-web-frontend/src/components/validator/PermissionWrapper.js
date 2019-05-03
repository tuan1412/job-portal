import React, { Component } from 'react'
import _ from '../../core/utils';
import Page403 from '../../pages/403';

export default class PermissionWrapper extends Component {
  render() {
    const { permission } = this.props
    if (_.getPermission() === permission) {
      return this.props.children;
    }
    return <Page403 />
  }
}
