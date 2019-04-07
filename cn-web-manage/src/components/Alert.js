import React, { Component } from 'react';

class Alert extends Component {
    show = true;
    type = "success";
    timeout = 3000;
    // success info waring danger primary secondary dark light
    constructor(props) {
        super(props);
        console.log(props);
        this.hideAlert = this.hideAlert.bind(this);
        if (!!props.type) {
            this.type = props.type;
        }
        if (!!props.timeout) {
            this.timeout = props.timeout;
        }
        setTimeout(() => {
            this.show = false;
            this.forceUpdate();
        }, this.timeout);
        
    }

    hideAlert() {
        this.show = false;
        this.forceUpdate();
    }

    _alert() {
        return <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class={"alert alert-" + this.type + " alert-dismissible fade show"}>
            <button onClick={this.hideAlert} type="button" class="close">&times;</button>
            <strong>{this.type}!</strong> {this.props.mess}
        </div>;
    }

    render() {
        return (
            <>{this.show ? this._alert() : <></>}</>
        );
    }
}

export default Alert;
