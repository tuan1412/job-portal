import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';

class CompaniesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <TitlePage data={["Companies"]}></TitlePage>
                <div class="row">


                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <input class="form-control form-control-lg" type="search" placeholder="Search"
                                        aria-label="Search" />
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">

                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="user-avatar float-xl-left pr-4 float-none">
                                            <img src="/assets/images/avatar-1.jpg" alt="User Avatar"
                                                class="rounded-circle user-avatar-xl" />
                                        </div>
                                        <div class="pl-xl-3">
                                            <div class="m-b-0">
                                                <div class="user-avatar-name d-inline-block">
                                                    <h2 class="font-24 m-b-10">Henry Barbara</h2>
                                                </div>
                                                <div class="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <i class="fa fa-fw fa-star"></i>
                                                    <p class="d-inline-block text-dark">14 Reviews </p>
                                                </div>
                                            </div>
                                            <div class="user-avatar-address">
                                                <p class="mb-2"><i
                                                    class="fa fa-map-marker-alt mr-2  text-primary"></i>Salt
                                            Lake City, UT <span class="m-l-10">Male<span class="m-l-20">29
                                                    Year Old</span></span>
                                                </p>
                                                <div class="mt-3">
                                                    <a href="#" class="mr-1 badge badge-light">Fitness</a><a
                                                        href="#" class="mr-1 badge badge-light">Life Style</a><a
                                                            href="#" class="mr-1 badge badge-light">Gym</a><a href="#"
                                                                class="badge badge-light">Crossfit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="float-xl-right float-none mt-xl-0 mt-4">
                                            <a href="#" class="btn btn-secondary">Go To Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="font-16">Sorting By</h3>
                                <select class="form-control">
                                    <option>Followers</option>
                                    <option>Followers</option>
                                </select>
                            </div>
                            <div class="card-body border-top">
                                <h3 class="font-16">Influncer by Rating</h3>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio1" name="customRadio"
                                        class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio1"><i
                                        class="fas fa-star rating-color fa-xs"></i></label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio2" name="customRadio"
                                        class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio2"><i
                                        class="fas fa-star rating-color fa-xs"></i><i
                                            class="fas fa-star rating-color fa-xs"></i></label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio3" name="customRadio"
                                        class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio3"><i
                                        class="fas fa-star rating-color fa-xs"></i><i
                                            class="fas fa-star rating-color fa-xs"></i><i
                                                class="fas fa-star rating-color fa-xs"></i></label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio4" name="customRadio"
                                        class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio4"><i
                                        class="fas fa-star rating-color fa-xs"></i><i
                                            class="fas fa-star rating-color fa-xs"></i><i
                                                class="fas fa-star rating-color fa-xs"></i><i
                                                    class="fas fa-star rating-color fa-xs"></i></label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio5" name="customRadio"
                                        class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio5"><i
                                        class="fas fa-star rating-color fa-xs"></i><i
                                            class="fas fa-star rating-color fa-xs fa-xs"></i><i
                                                class="fas fa-star rating-color fa-xs fa-xs"></i><i
                                                    class="fas fa-star rating-color fa-xs fa-xs"></i><i
                                                        class="fas fa-star rating-color fa-xs fa-xs"></i></label>
                                </div>
                            </div>
                            <div class="card-body border-top">
                                <h3 class="font-16">Social Media Platform</h3>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck10" />
                                    <label class="custom-control-label" for="customCheck10">Facebook</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck11" />
                                    <label class="custom-control-label" for="customCheck11">Instagram</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck12" />
                                    <label class="custom-control-label" for="customCheck12">Pinterest</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck13" />
                                    <label class="custom-control-label" for="customCheck13">Twitter</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck14" />
                                    <label class="custom-control-label" for="customCheck14">Youtube</label>
                                </div>
                            </div>
                            <div class="card-body border-top">
                                <h3 class="font-16">Influncer Category</h3>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck15" />
                                    <label class="custom-control-label" for="customCheck15">Business</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck16" />
                                    <label class="custom-control-label" for="customCheck16">Lifestyle</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck17" />
                                    <label class="custom-control-label" for="customCheck17">Fitness</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck18" />
                                    <label class="custom-control-label" for="customCheck18">Sports</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck19" />
                                    <label class="custom-control-label" for="customCheck19">Clothing</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck20" />
                                    <label class="custom-control-label" for="customCheck20">Pets & Animals</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck21" />
                                    <label class="custom-control-label" for="customCheck21">Beauty & Makeup</label>
                                </div>
                            </div>
                            <div class="card-body border-top">
                                <h3 class="font-16">Age Demographics</h3>
                                <select class="form-control">
                                    <option selected>Select the Age</option>
                                    <option value="20-30">20-30</option>
                                    <option value="30-40">30-40</option>
                                    <option value="40-50">40-50</option>
                                </select>
                            </div>
                            <div class="card-body border-top">
                                <a href="#" class="btn btn-secondary btn-lg btn-block">Submit</a>
                            </div>
                        </div>
                    </div>



                </div>
            </>
        );
    }
}

export default CompaniesPage;