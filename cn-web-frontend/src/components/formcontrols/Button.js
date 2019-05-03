import React, { Component } from 'react'
import classnames from 'classnames';

export default class Button extends Component {
    static defaultProps = {
        className: '',
        blockStyle: false,
        onClick: function () { }
    }
    
    render() {
        const { onClick, className, blockStyle, ...rest } = this.props;
        const cls = classnames({
            'btn btn-primary': true,
            'btn-block': blockStyle,
            [className]: className
        });
        return (
            <button className={cls} onClick={onClick} {...rest}>{this.props.children}</button>
        )
    }
}
