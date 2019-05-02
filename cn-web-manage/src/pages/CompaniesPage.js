import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';
import CompanySerivce from '../services/CompanyService';
import { Redirect } from "react-router-dom";
class CompaniesPage extends Component {
    changePage = false;
    list_company = [ ];
    current_id_company;
    constructor(props) {
        super(props);
        this.state = {};
        console.log("Goto CompaniesPage")
        this.service = new CompanySerivce();
        this.paramsSearch = {
            page: this.page,
            per_page: 20
        };
        this.getCompanies();
    }
    async getCompanies() {
        try {
            let data = await this.service.getCompanies(this.paramsSearch);
            this.list_company = data.data;
        } catch (error) {

        }
        this.forceUpdate();
    }

    inputSearch(e) {
        if (e.target.value == "") {
            delete this.paramsSearch.title;
        } else {
            this.paramsSearch['title'] = e.target.value;
        }
        this.getJobs();
    }

    redirect() {
        if (this.changePage)
            return <Redirect exact to={'/app/company/' + this.current_id_company} />
    }

    render() {
        return (
            <>
                {this.redirect()}
                <TitlePage data={["Companies"]}></TitlePage>
                <div class="row">


                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <input onChange={(e) => this.inputSearch(e)} class="form-control form-control-lg" type="search" placeholder="Search"
                                        aria-label="Search" />
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                        {
                            this.list_company.map((item, index) => { 
                                return <div key={index} class="card">
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
                                                        <h2 class="font-24 m-b-10">{item.name}</h2>
                                                    </div>
                                                </div>
                                                <div class="user-avatar-address">
                                                    <p class="mb-2">Email: {item.email}<br/>
                                                 <span class="m-l-2">Description: {item.description}<span class="m-l-20">Website: {item.website}</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="float-xl-right float-none mt-xl-0 mt-4">
                                                <a onClick={() => { this.changePage = true }} href="#" class="btn btn-secondary">Go To Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })
                        }
                        


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