import React, { Component } from 'react';

class ModalConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.cancel = this.cancel.bind(this);
        this.submit = this.submit.bind(this);
    }

    cancel() {
        this.props.callback("cancel");
    }

    submit() {
        this.props.callback("submit");
    }

    render() {
        return (
            <>
                {/* <button type="button" class={"btn btn-" + this.type} data-toggle="modal" data-target="#confirmModal">
                    {this.props.name}
                </button> */}
                <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="confirmModalLabel">{this.props.data.title}</h5>
                            </div>
                            <div class="modal-body">
                                {this.props.data.content}
                            </div>
                            <div class="modal-footer">
                                <button type="button" onClick={this.cancel} class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" onClick={this.submit} class={"btn btn-" + this.props.data.type} data-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ModalConfirm;