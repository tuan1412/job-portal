import React, { Component } from 'react';

class ModalConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
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
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class={"btn btn-" + this.props.data.type}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ModalConfirm;