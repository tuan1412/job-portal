import React, { Component } from 'react'
import classnames from 'classnames';


export default class Input extends Component {
    static defaultProps = {
        value: '',
        placeholder: '',
        className: '',
        type: 'text',
        blockStyle: false,
        onChange: function () { }
    }

    onChange = (event) => {
        this.props.onChange(event);
    }

    render() {
        const { className, placeholder, type, blockStyle, value, ...rest } = this.props;
        const cls = classnames({
            'form-control': true,
            'form-control-block': blockStyle,
            [className]: className
        });
        return (
            <input
                type={type}
                className={cls}
                placeholder={placeholder}
                onChange={this.onChange}
                value={value}
                {...rest}
            />
        )
    }
}
