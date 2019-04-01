import React, { Component } from 'react'
import Input from '../../components/formcontrols/Input';
import Button from '../../components/formcontrols/Button';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import Modal from '../../components/modal';
import SignUp from '../../components/signup';

export default class FormLogin extends Component {
    state = {
        openSignUp: false,
    }

    openSignUp = () => {
        this.setState({ openSignUp: true })
    }

    closeSignUp = () => {
        this.setState({ openSignUp: false });
    };

    createFbBtn = (renderProps) => {
        return (
            <button
                className="btn btn-block btn-fb text-center"
                onClick={renderProps.onClick}>
                <span className="icon-facebook mr-2" />Facebook
            </button>
        )
    }
    createGgBtn = (renderProps) => {
        return (
            <button
                className="btn btn-block btn-gg text-center"
                onClick={renderProps.onClick}>
                <span className="icon-google mr-2" />Google
            </button>
        )
    }
    render() {
        const { openSignUp } = this.state;
        return (
            <section className="login-wrapper bg-light">
                <Modal
                    open={openSignUp} 
                    onClose={this.closeSignUp}
                >
                    <SignUp />
                </Modal>
                <div className="container">
                    <div className="col-md-6 col-sm-8 offset-md-3 offset-md-2">
                        <form>
                            <h1 className="mb-2">
                                <span className="text-black h2 mb-0">Job<strong>start</strong></span>
                            </h1>
                            <Input className='input-login' placeholder='Username' />
                            <Input className='input-login' type='password' placeholder='Password' />
                            <label><span>Forget Password?</span></label>
                            <Button blockStyle={true}>Login</Button>
                            <div className="mt-2">Have't Any Account <span className="link-sign-up" onClick={this.openSignUp}>Create An Account</span></div>
                            <div className="text-center mt-4">Or login with</div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 mt-2">
                                    <FacebookLogin
                                        render={renderProps => this.createFbBtn(renderProps)}
                                    />
                                </div>
                                <div className="col-md-6 col-sm-12 mt-2">
                                    <GoogleLogin
                                        render={renderProps => this.createGgBtn(renderProps)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
