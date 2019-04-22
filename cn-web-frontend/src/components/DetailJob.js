/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class DetailJob extends Component {
    render() {
        return (
            <div className="container p-5 bg-white">
                <div className="row">
                    <div className="mb-4 mb-md-5 col-md-12 col-xs-6">
                        <div className="job-post-item-header d-flex align-items-center">
                            <h2 className="mr-3 text-black h4">Full Stack Developer</h2>
                            <div className="badge-wrap">
                                <span className="bg-danger text-white badge py-2 px-4">Temporary</span>
                            </div>
                        </div>
                        <div className="job-post-item-body d-block d-md-flex">
                            <div className="mr-3"><span className="fl-bigmug-line-portfolio23"></span> <a href="#">New York Times</a></div>
                            <div><span className="fl-bigmug-line-big104"></span> <span>New York City, USA</span></div>
                        </div>
                    </div>
                </div>


                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure beatae! Voluptas tempora doloremque atque repudiandae maiores odio magni. Illo ut nihil officia numquam in. Deleniti pariatur at minima quaerat!</p>
                <p>Qui corrupti animi, dignissimos veritatis, necessitatibus consequuntur nobis, placeat beatae dolorum ullam harum at atque dolor! Accusantium cupiditate ipsum placeat, vel voluptatibus non eaque, animi neque minima facere provident aspernatur!</p>

                <p className="mt-5"><a href="#" className="btn btn-primary  py-2 px-4">Apply Job</a></p>
            </div>
        )
    }
}
