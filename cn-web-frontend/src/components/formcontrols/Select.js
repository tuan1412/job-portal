import React, { Component } from 'react'

export default class Select extends Component {
    static defaultProps = {
        value: '',
        onChange: function() {}
    }

    renderOptions = () => {
        return this.props.items.map((item, index) => {
            return (
                <option value={item.value} key={index}>{item.name}</option>
            )
        });
    }

    onChange = (event) => {
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <div className="select-wrap">
                <span className="icon-keyboard_arrow_down arrow-down"></span>
                <select className="form-control" onChange={this.onChange} value={this.props.value}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}
