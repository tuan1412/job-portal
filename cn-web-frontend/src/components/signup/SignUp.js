import React, { Component } from 'react'
import Input from '../formcontrols/Input';
import Button from '../formcontrols/Button';

export default class SignUp extends Component {
    mapPlaceHolder = {
        'candidate': 'User Name',
        'company': 'Company Name'
    }
    render() {
        const { type } = this.props;
        return (
            <div className="sign-up bg-light">
                <form>
                    <Input className='input-signup' placeholder={this.mapPlaceHolder[type]} />
                    <Input className='input-signup' type='password' placeholder='Password' />
                    <Input className='input-signup' type='password' placeholder='Confirm Password' />
                    <Button blockStyle>Sign up</Button>
                </form>
            </div>

        )
    }
}
