import React, { Component } from 'react';
import Loadable from '../components/lazyload';
import { withRouter } from 'react-router';
export const LoginPage = Loadable({
    loader: () => import(_LoginPage)
});
class _LoginPage extends Component {

    changePage(page) {
        console.log("next-page: ", page);
        this.props.history.push(page);
    }
    
    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <div class="fadeIn first">
                        <img src="https://cdn0.iconfinder.com/data/icons/business-human-resources-2/128/54-512.png" id="icon" alt="User Icon" />
                    </div>

                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                        <input onClick={() => this.changePage("/app")} type="submit" class="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" onClick={() => this.changePage("/sign-up")} href="/sign-up">Sign Up?</a>
                        <br />
                        <a class="underlineHover" onClick={() => this.changePage("/forgot-password")} href="/forgot-password">Forgot Password?</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(_LoginPage);
