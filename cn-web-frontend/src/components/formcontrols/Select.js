import React, { Component } from 'react'

export default class Select extends Component {
    static defaultProps = {
        defaultValue: '',
        onChange: function() {}
    }

    state = {
        value: this.props.defaultValue
    }

    renderOptions = () => {
        return this.props.items.map((item, index) => {
            return (
                <option value={item.value} key={index}>{item.name}</option>
            )
        });
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        }, this.props.onChange.bind(null, this.state.value));
    }

    render() {
        return (
            <div className="select-wrap">
                <span className="icon-keyboard_arrow_down arrow-down"></span>
                <select className="form-control" onChange={this.onChange}>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }
}
