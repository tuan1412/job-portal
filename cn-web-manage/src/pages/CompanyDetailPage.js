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
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-block">
                            <h3 class="section-title">My Active Campaigns</h3>
                        </div>
                        <div class="card">
                            <div class="campaign-table table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr class="border-0">
                                            <th class="border-0">Company</th>
                                            <th class="border-0">Campaign Name</th>
                                            <th class="border-0">Social Platform</th>
                                            <th class="border-0">Min / Max Views</th>
                                            <th class="border-0">Status</th>
                                            <th class="border-0">Start Date</th>
                                            <th class="border-0">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="m-r-10"><img src="/assets/images/dribbble.png" alt="user" width="35" /></div>
                                            </td>
                                            <td>Fashion E Commerce </td>
                                            <td>
                                                <div class="avatar-group">
                                                    <span><a href="#"><i class="fab fa-fw fa-facebook-square facebook-color"></i></a></span>
                                                    <span><a href="#"><i class="fab fa-fw fa-twitter-square twitter-color"></i></a></span>
                                                    <span><a href="#"><i class="fab fa-fw fa-instagram instagram-color"></i></a></span>
                                                    <span><a href="#"><i class="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
                                                </div>
                                            </td>
                                            <td>1,00,000 / 1,50,000</td>
                                            <td>70%</td>
                                            <td>7 Aug,2018</td>
                                            <td>
                                                <div class="dropdown float-right">
                                                    <a href="#" class="dropdown-toggle card-drop" data-toggle="dropdown" aria-expanded="true">
                                                        <i class="mdi mdi-dots-vertical"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="m-r-10"><img src="/assets/images/github.png" alt="user" width="35" /></div>
                                            </td>
                                            <td>Fitness Products </td>
                                            <td>
                                                <div class="avatar-group">
                                                    <span><a href="#"><i class="fab fa-fw fa-facebook-square facebook-color "></i></a></span>
                                                    <span><a href="#"><i class="fab fa-fw fa-twitter-square twitter-color "></i></a></span>
                                                </div>
                                            </td>
                                            <td>2,50,000 / 3,50,000</td>
                                            <td>70%</td>
                                            <td>10 Aug,2018</td>
                                            <td>
                                                <div class="dropdown float-right">
                                                    <a href="#" class="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                                        <i class="mdi mdi-dots-vertical"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="m-r-10"><img src="/assets/images/dropbox.png" alt="user" width="35" /></div>
                                            </td>
                                            <td>Gym Trainer Program </td>
                                            <td>
                                                <div class="avatar-group">
                                                    <span><a href="#"><i class="fab fa-fw fa-facebook-square facebook-color "></i></a></span>
                                                    <span><a href="#"><i class="fab fa-fw fa-pinterest-square pinterest-color "></i></a></span>
                                                </div>
                                            </td>
                                            <td>3,50,000 / 4,50,000</td>
                                            <td>70%</td>
                                            <td>22 Aug,2018</td>
                                            <td>
                                                <div class="dropdown float-right">
                                                    <a href="#" class="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                                        <i class="mdi mdi-dots-vertical"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="m-r-10"><img src="/assets/images/bitbucket.png" alt="user" width="30" /></div>
                                            </td>
                                            <td>2018 Top Product </td>
                                            <td>
                                                <div class="avatar-group">
                                                    <span><a href="#"><i class="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
                                                </div>
                                            </td>
                                            <td>4,50,000 / 5,50,000</td>
                                            <td>70%</td>
                                            <td>25 Aug,2018</td>
                                            <td>
                                                <div class="dropdown float-right">
                                                    <a href="#" class="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                                        <i class="mdi mdi-dots-vertical"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="m-r-10"><img src="/assets/images/mail_chimp.png" alt="user" width="30" /></div>
                                            </td>
                                            <td>Top Dashboard Sale 2018</td>
                                            <td>
                                                <div class="avatar-group">
                                                    <span><a href="#"><i class="fab fa-fw fa-facebook-square facebook-color"></i></a></span>
                                                    <span><a href="#"><i class="fab fa-fw fa-pinterest-square pinterest-color"></i></a></span>
                                                </div>
                                            </td>
                                            <td>5,50,000 / 6,50,000</td>
                                            <td>70%</td>
                                            <td>27 Aug,2018</td>
                                            <td>
                                                <div class="dropdown float-right">
                                                    <a href="#" class="dropdown-toggle  card-drop" data-toggle="dropdown" aria-expanded="true">
                                                        <i class="mdi mdi-dots-vertical"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CompanyDetailPage;