import React, { Component } from 'react';

class Alert extends Component {
    show = true;
    constructor(props) {
        super(props);
        console.log(props);
        this.hideAlert = this.hideAlert.bind(this);
        setTimeout(() => {
            this.show = false;
            this.forceUpdate();
        }, this.props.timeout);
    }

    hideAlert() {
        this.show = false;
        this.forceUpdate();
    }

    _alert() {
        let data = this.props;
        let res;
        switch (data.type) {
            case "success":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-success alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Success!</strong> {data.mess}
                </div>
                break;
            case "info":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-info alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Info!</strong> {data.mess}
                </div>
                break;
            case "warning":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-warning alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Warning!</strong> {data.mess}
                </div>
                break;
            case "danger":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-danger alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Danger!</strong> {data.mess}
                </div>
                break;
            case "primary":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-primary alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Primary!</strong> {data.mess}
                </div>
                break;
            case "secondary":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-secondary alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Secondary!</strong>{data.mess}
                </div>
                break;
            case "dark":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-dark alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Dark!</strong> {data.mess}
                </div>
                break;
            case "light":
                res = <div style={{ 'position': 'absolute', 'bottom': '0px', 'right': '0', 'margin-right': '30px' }} class="alert alert-light alert-dismissible fade show">
                    <button onClick={this.hideAlert} type="button" class="close">&times;</button>
                    <strong>Light!</strong> {data.mess}
                </div>
                break;

            default:
                break;
        }
        return res;
    }

    render() {

        return (
            <>{this.show ? this._alert() : <></>
            }

            </>
        );
    }
}

export default Alert;
