import React, { Component } from 'react'
import classnames from 'classnames';


export default class Input extends Component {
    static defaultProps = {
        defaultValue: '',
        placeholder: '',
        className: '',
        type: 'text',
        blockStyle: false,
        onChange: function() {}
    }

    state = {
        value: this.props.defaultValue
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        }, this.props.onChange.bind(null, this.state.value));
    }

    render() {
        const { className, placeholder, type, blockStyle} = this.props;
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
            />
        )
    }
}
