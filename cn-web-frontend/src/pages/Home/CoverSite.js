import React, { Component } from 'react'
import FormSearchJob from '../../components/formsearchjob/FormSearchJob';

export default class SiteCover extends Component {
    render() {
        const bgStyle = {
            backgroundImage: 'url(images/hero_bg_1.jpg)',
            backgroundPosition: '50% -38.5px'
        }
        return (
            <div className="site-blocks-cover aos-init aos-animate"
                style={bgStyle}
                data-aos="fade"
                data-stellar-background-ratio="0.5"
            >
                <div className="container">
                    <div className="row row-custom align-items-center">
                        <div className="col-md-10">
                            <h1 className="mb-2 text-black w-75">
                                <span className="font-weight-bold">Largest Job</span> Site On The Net</h1>
                            <div className="job-search">
                                <div className="tab-content bg-white p-4 rounded" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-job" role="tabpanel" aria-labelledby="pills-job-tab">
                                        <FormSearchJob callback={this.props.callback}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
