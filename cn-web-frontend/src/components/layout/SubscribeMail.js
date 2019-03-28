import React, { Component } from 'react'

export default class SubscribeMail extends Component {
    render() {
        return (
            <div className="py-5 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-white h4 font-weihgt-normal mb-4">Subscribe Newsletter</h2>
                        </div>
                    </div>
                    <form action="" className="row">
                        <div className="col-md-9">
                            <input type="text" className="form-control border-0 mb-3 mb-md-0" placeholder="Enter Your Email" />
                        </div>
                        <div className="col-md-3">
                            <input type="submit" value="Send" className="btn btn-dark btn-block" style={{ height: 45 }} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
