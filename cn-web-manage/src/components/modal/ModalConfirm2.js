import React, { Component } from 'react';

class ModalConfirm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.show = this.show.bind(this);
    }

    show() {
        document.getElementById("btn-modal-confirm-" + this.props.id).click()
    }

    callbackDetail(data) {
        this.props.callback(data);
    }

    render() {
        return (
            <>
                <div class="modal fade" id="_detail" tabindex="-1" role="dialog" aria-labelledby={"modal-confirm-" + this.props.id} aria-hidden="true">
                    <div style={{paddingTop:150}} class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id={"modal-confirm-" + this.props.id}>You wanna go to detail</h5>
                            </div>
                            <div class="modal-body">
                                Sure?
                            </div>
                            <div class="modal-footer">
                                <button type="button" onClick={() => { this.callbackDetail("cancel") }} class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" onClick={() => { this.callbackDetail("submit") }} class="btn btn-info" data-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button style={{ "display": "none" }} id={"btn-modal-confirm-" + this.props.id} type="button" class="btn btn-info" data-toggle="modal" data-target="#_detail"></button>
            </>
        );
    }
}

export default ModalConfirm2;