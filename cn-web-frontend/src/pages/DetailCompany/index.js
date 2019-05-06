import React, { Component } from 'react'
import Loadable from '../../components/lazyload';
import Layout from '../../components/layout/Layout';

export default class DetailCompany extends Component {
    render() {
        return (
            <Layout>
                <section className='profile-detail'>
                    <div className='container'>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='basic-information'>
                                    <div className='row mb-4'>
                                        <div className='col-md-3 col-sm-3'>
                                            <img src='images/microsoft.png' alt='' className='img-responsive' />
                                        </div>
                                        <div className='col-md-9 col-sm-9'>
                                            <div className='profile-content'>
                                                <h2>Microsoft<span>Internet and computer software</span></h2>
                                                <p>Now Hiring(102)</p>
                                                <ul className='information'>
                                                    <li><span>Address:</span>Menlo Park, CA</li>
                                                    <li><span>Website:</span>Google.com</li>
                                                    <li><span>Employee:</span>50,000 - 70,000 employer</li>
                                                    <li><span>Mail:</span>info@google.com</li>
                                                    <li><span>From:</span>1998</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>
                                            <i className='fa fa-user fa-fw'></i> About Microsoft
							</div>
                                        <div className='panel-body'>
                                            <p>The front end is the part that users see and interact with, includes the User Interface, the animations, and usually a bunch of logic to talk to the backend. It is the visual bit that the user interacts with.</p>
                                        </div>
                                    </div>

                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>
                                            <i className='fa fa-leaf fa-fw'></i> Responsibilities:
							</div>
                                        <div className='panel-body'>
                                            <p>Rapid growth since incorporation has triggered a chain of products, acquisitions and partnerships beyond Google's core search engine (Google Search).</p>
                                            <ul>
                                                <li>Software testing in a Web Applications/Mobile environment.</li>
                                                <li>Software Test Plans from Business Requirement Specifications for test engineering group.</li>
                                                <li>Software testing in a Web Applications environment.</li>
                                                <li>Translate designs into responsive web interfaces</li>
                                                <li>Software testing in a Web Applications/Mobile environment.</li>
                                                <li>Software testing in a Web Applications environment.</li>
                                                <li>Translate designs into responsive web interfaces</li>
                                                <li>Software Test Plans from Business Requirement Specifications for test engineering group.</li>
                                                <li>Run production tests as part of software implementation; Create, deliver and support test plans for testing group to execute.</li>
                                                <li>Run production tests as part of software implementation; Create, deliver and support test plans for testing group to execute.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>
                                            <i className='fa fa-coffee fa-fw'></i> Minimum qualifications:
							</div>
                                        <div className='panel-body'>
                                            <p>Rapid growth since incorporation has triggered a chain of products.</p>
                                            <ul>
                                                <li>Software testing in a Web Applications/Mobile environment.</li>
                                                <li>Software Test Plans from Business Requirement Specifications for test engineering group.</li>
                                                <li>Software testing in a Web Applications environment.</li>
                                                <li>Translate designs into responsive web interfaces</li>
                                                <li>Software testing in a Web Applications/Mobile environment.</li>
                                                <li>Software testing in a Web Applications environment.</li>
                                                <li>Translate designs into responsive web interfaces</li>
                                                <li>Software Test Plans from Business Requirement Specifications for test engineering group.</li>
                                                <li>Run production tests as part of software implementation; Create, deliver and support test plans for testing group to execute.</li>
                                                <li>Run production tests as part of software implementation; Create, deliver and support test plans for testing group to execute.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='panel panel-default'>
                                        <div className='panel-heading'>
                                            <i className='fa fa-graduation-cap fa-fw'></i> Preferred qualifications:
							</div>
                                        <div className='panel-body'>
                                            <ul>
                                                <li>Software testing in a Web Applications/Mobile environment.</li>
                                                <li>Software Test Plans from Business Requirement Specifications for test engineering group.</li>
                                                <li>Software testing in a Web Applications environment.</li>
                                                <li>Translate designs into responsive web interfaces</li>
                                                <li>Software testing in a Web Applications/Mobile environment.</li>
                                                <li>Software testing in a Web Applications environment.</li>
                                                <li>Translate designs into responsive web interfaces</li>
                                                <li>Software Test Plans from Business Requirement Specifications for test engineering group.</li>
                                                <li>Run production tests as part of software implementation; Create, deliver and support test plans for testing group to execute.</li>
                                                <li>Run production tests as part of software implementation; Create, deliver and support test plans for testing group to execute.</li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export const AsyncDetailCompany = Loadable({
    loader: () => import('pages/DetailCompany')
});

