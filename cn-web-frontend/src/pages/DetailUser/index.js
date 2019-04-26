/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Loadable from '../../components/lazyload';

export default class DetailUser extends Component {
    render() {
        return (
            <section className='profile-detail bg-light'>
                <div className='container'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='basic-information mb-4'>
                                <div className='row mb-4'>
                                    <div className='col-md-3 col-sm-3'>
                                        <img src='images/person_1.jpg' alt='' className='img-responsive' />
                                    </div>
                                    <div className='col-md-9 col-sm-9'>
                                        <div className='profile-content'>
                                            <h2>Daniel Duke<span>Web designer</span></h2>
                                            <p>Soft Techi Infoteck Pvt.</p>
                                            <ul className='information'>
                                                <li><span>Name:</span>Daniel Duke</li>
                                                <li><span>Email:</span>daniel-duke@gmail.com</li>
                                                <li><span>Mobile:</span>+91 548 576 8579</li>
                                                <li><span>Company:</span>Soft Techi Infoteck Pvt.</li>
                                                <li><span>Date of Birth:</span>10 July 1990</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='panel panel-default'>
                                    <div className='panel-heading'>
                                        <i className='fa fa-user fa-fw'></i> About Me
								</div>
                                    <div className='panel-body'>
                                        <p>The front end is the part that users see and interact with, includes the User Interface, the animations, and usually a bunch of logic to talk to the backend. It is the visual bit that the user interacts with. This includes the design, images, colours, buttons, forms, typography, animations and content. It’s basically everything that you as a user of the website can see.</p>
                                    </div>
                                </div>

                                <div className='panel panel-default'>
                                    <div className='panel-heading'>
                                        <i className='fa fa-leaf fa-fw'></i> Responsibilities:
								</div>
                                    <div className='panel-body'>
                                        <p>The front end is the part that users see and interact with, includes the User Interface, the animations, and usually a bunch of logic to talk to the backend. It is the visual bit that the user interacts with.</p>
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
                                        <i className='fa fa-cog fa-fw'></i> Skills
								</div>
                                    <div className='panel-body'>
                                        <p>The front end is the part that users see and interact with, includes the User Interface, the animations, and usually a bunch of logic to talk to the backend.</p>
                                        <span className='service-tag'>Web Design</span>
                                        <span className='service-tag'>Graphics</span>
                                        <span className='service-tag'>Development</span>
                                        <span className='service-tag'>App design</span>
                                        <span className='service-tag'>IOS Apps</span>
                                        <span className='service-tag'>CMS Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export const AsyncDetailUser = Loadable({
    loader: () => import('pages/DetailUser')
});
