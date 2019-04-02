import React, { Component } from 'react';
import Loadable from '../components/lazyload';

export const SignUpPage = Loadable({
    loader: () => import(_SignUpPage)
});

class _SignUpPage extends Component {
    render() {

        return (
            <form class="splash-container">
                <div class="card">
                    <div class="card-header">
                        <h3 class="mb-1">Registrations Form</h3>
                        <p>Please enter your user information.</p>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <input class="form-control form-control-lg" type="text" name="nick" required="" placeholder="Username" autocomplete="off" />
                        </div>
                        <div class="form-group">
                            <input class="form-control form-control-lg" type="email" name="email" required="" placeholder="E-mail" autocomplete="off" />
                        </div>
                        <div class="form-group">
                            <input class="form-control form-control-lg" id="pass1" type="password" required="" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <input class="form-control form-control-lg" required="" placeholder="Confirm" />
                        </div>
                        <div class="form-group pt-2">
                            <button class="btn btn-block btn-primary" type="submit">Register My Account</button>
                        </div>
                        <div class="form-group">
                            <label class="custom-control custom-checkbox">
                                <input class="custom-control-input" type="checkbox" /><span class="custom-control-label">By creating an account, you agree the <a href="#">terms and conditions</a></span>
                            </label>
                        </div>
                        <div class="form-group row pt-0">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                <button class="btn btn-block btn-social btn-facebook " type="button">Facebook</button>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <button class="btn  btn-block btn-social btn-twitter" type="button">Twitter</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white">
                        <p>Already member? <a href="#" class="text-secondary">Login Here.</a></p>
                    </div>
                </div>
            </form>
        );
    }
}

export default _SignUpPage;
