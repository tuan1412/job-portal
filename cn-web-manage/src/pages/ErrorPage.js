import React, { Component } from 'react';


class ErrorPage extends Component {
    alert = {
        type: "",
        timeout: 0,
        mess: ""
    }

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }

    show() {
        console.log('trongnv');
    }

    callback(data) {

    }

    render() {
        return (
            <>
                <div class="bg-light text-center">
                    <div class="container">
                        <div class="row">
                            <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div class="error-section">
                                    {/* <img src="../assets/images/error-img.png" alt="" class="img-fluid" /> */}
                                    <div class="error-section-content">
                                        <h1 class="display-3">Page Not Found</h1>
                                        <p> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                        <a href="/" class="btn btn-secondary btn-lg">Back to homepage</a>
                                        {/* <FormButton title="title" content="trongnv" name="name" confirm="true" type="info" callback={this.callback}></FormButton> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ErrorPage;
