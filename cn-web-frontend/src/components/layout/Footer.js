/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-6 col-md-3 col-lg-3 mb-5 mb-lg-0">
                                    <h3 className="footer-heading mb-4">For Candidates</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Register</a></li>
                                        <li><a href="#">Find Jobs</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Search Jobs</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 mb-5 mb-lg-0">
                                    <h3 className="footer-heading mb-4">For Employers</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Employer Account</a></li>
                                        <li><a href="#">Clients</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Find Candidates</a></li>
                                        <li><a href="#">Terms &amp; Policies</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 mb-5 mb-lg-0">
                                    <h3 className="footer-heading mb-4">Archives</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">January 2018</a></li>
                                        <li><a href="#">February 2018</a></li>
                                        <li><a href="#">March 2018</a></li>
                                        <li><a href="#">April 2018</a></li>
                                        <li><a href="#">May 2018</a></li>
                                        <li><a href="#">June 2918</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-3 col-lg-3 mb-5 mb-lg-0">
                                    <h3 className="footer-heading mb-4">Company</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Team</a></li>
                                        <li><a href="#">Terms &amp; Policies</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading mb-4">Contact Info</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <span className="d-block text-white">Address</span>
                                    New York - 2398 10 Hadson Carl Street
                                </li>
                                <li>
                                    <span className="d-block text-white">Telephone</span>
                                    +1 232 305 3930
                                </li>
                                <li>
                                    <span className="d-block text-white">Email</span>
                                    info@yourdomain.com
                                 </li>
                            </ul>

                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p>
                                2019 All Rights Reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
