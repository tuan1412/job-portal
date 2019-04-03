import React, { Component } from 'react';
import ModalConfirm from '../modal/ModalConfirm';
class FormButton extends Component {
    data_confirm_modal = {};
    type = "primary";
    // success info waring danger primary secondary dark light
    constructor(props) {
        super(props);
        this.state = {};

        if (!!props.type) {
            this.type = props.type;
        }

        if (!!props.confirm) {
            this.data_confirm_modal = {
                title: props.title,
                content: props.content,
                type: this.type
            }
        }
        this.callback = this.callback.bind(this);
    }

    callback(data) {
        this.props.callback(data);
    }

    render() {
        return (
            <>
                <button type="button" onClick={(e) => { 
                    console.log('click button');
                    e.preventDefault() }} class={"btn btn-" + this.type} data-toggle="modal" data-target="#confirmModal">
                    {this.props.name}
                </button>
                {this.props.confirm ? <ModalConfirm data={this.data_confirm_modal} callback={this.callback}></ModalConfirm> : <></>}
            </>
        );
    }
}

export default FormButton;