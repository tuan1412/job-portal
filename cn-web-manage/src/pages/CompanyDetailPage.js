import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';

class CompanyDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('CompanyDetailPage: ', props);
    }
    render() {
        return (
            <>
                <TitlePage data={["Companies", "Detail"]}></TitlePage>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card influencer-profile-data">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">
                                        <div class="text-center">
                                            <img src="/assets/images/avatar-1.jpg" alt="User Avatar"
                                                class="rounded-circle user-avatar-xxl" />
                                        </div>
                                    </div>
                                    <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12">
                                        <div class="user-avatar-info">
                                            <div class="m-b-20">
                                                <div class="user-avatar-name">
                                                    <h2 class="mb-1">Henry Barbara</h2>
                                                </div>
                                                <div class="rating-star  d-inline-block">
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <p class="d-inline-block text-dark">14 Reviews </p>
                                                </div>
                                            </div>
                                            <div class="user-avatar-address">
                                                <p class="border-bottom pb-3">
                                                    <span class="d-xl-inline-block d-block mb-2"><i
                                                        class="fa fa-map-marker-alt mr-2 text-primary "></i>4045
															Denver AvenueLos Angeles, CA 90017</span>
                                                    <span class="mb-2 ml-xl-4 d-xl-inline-block d-block">Joined
															date: 23 June, 2018 </span>
                                                    <span class=" mb-2 d-xl-inline-block d-block ml-xl-4">Male
														</span>
                                                    <span class=" mb-2 d-xl-inline-block d-block ml-xl-4">29 Year
															Old </span>
                                                </p>
                                                <div class="mt-3">
                                                    <a href="#" class="badge badge-light mr-1">Fitness</a> <a
                                                        href="#" class="badge badge-light mr-1">Life Style</a> <a
                                                            href="#" class="badge badge-light">Gym</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-top user-social-box">
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2 twitter-color">
                                    <i class="fab fa-twitter-square"></i></span><span>13,291</span></div>
                                <div class="user-social-media d-xl-inline-block"><span
                                    class="mr-2  pinterest-color"> <i
                                        class="fab fa-pinterest-square"></i></span><span>84,019</span></div>
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2 instagram-color">
                                    <i class="fab fa-instagram"></i></span><span>12,300</span></div>
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2  facebook-color">
                                    <i class="fab fa-facebook-square "></i></span><span>92,920</span></div>
                                <div class="user-social-media d-xl-inline-block "><span class="mr-2 medium-color">
                                    <i class="fab fa-medium"></i></span><span>291</span></div>
                                <div class="user-social-media d-xl-inline-block"><span class="mr-2 youtube-color">
                                    <i class="fab fa-youtube"></i></span><span>1291</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Total Views</h5>
                                    <h2 class="mb-0"> 10,28,056</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                    <i class="fa fa-eye fa-fw fa-sm text-info"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Total Followers</h5>
                                    <h2 class="mb-0"> 24,763</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-primary-light mt-1">
                                    <i class="fa fa-user fa-fw fa-sm text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Partnerships</h5>
                                    <h2 class="mb-0">14</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-secondary-light mt-1">
                                    <i class="fa fa-handshake fa-fw fa-sm text-secondary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-inline-block">
                                    <h5 class="text-muted">Total Earned</h5>
                                    <h2 class="mb-0"> $149.00</h2>
                                </div>
                                <div class="float-right icon-circle-medium  icon-box-lg  bg-brand-light mt-1">
                                    <i class="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CompanyDetailPage;