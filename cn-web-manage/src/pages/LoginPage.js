import React, { Component } from 'react';

class LoginPage extends Component {
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
                        <input type="submit" class="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" href="/sign-up">Sign Up?</a>
                        <br/>
                        <a class="underlineHover" href="/forgot-password">Forgot Password?</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default LoginPage;
