import React, { Component } from 'react'
import Input from '../formcontrols/Input';
import Button from '../formcontrols/Button';
import Avatar from '../avatar';

export default class SignUp extends Component {
    mapProps = {
        'candidate': {
            placeholder: 'Username',
            name: 'candidate',
        },
        'company': {
            placeholder: 'Company Username',
            name: 'company',
            avatar: '/images/default-company.png'
        }
    }

    constructor(props) {
        super(props);
        console.log(props);
        const { type } = props;
        this.state = {
            [type]: '',
            password: '',
            email: '',
        }
    }
    setRef = (el) => {
        this.avatar = el;
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        const avatar = this.avatar.getFile();
        const data = { ...this.state, avatar: avatar }
        console.log(data);
        this.props.callback(data);
    }

    onChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { type } = this.props;
        const mapProps = this.mapProps[type];
        const { placeholder, name, avatar } = mapProps;

        return (
            <div className="sign-up bg-light">
                <form onSubmit={this.onSubmit}>
                    <Avatar ref={this.setRef} defaultAvatar={avatar} />
                    <Input
                        className='input-signup'
                        placeholder={placeholder}
                        name={name}
                        onChange={this.onChange}
                        value={this.state[name]}
                    />
                    <Input
                        className='input-signup'
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    {type === 'company' && (
                        <Input
                            className='input-signup'
                            placeholder='Company name'
                            name='companyName'
                            onChange={this.onChange}
                            value={this.state.companyName}
                        />
                    )}
                    {type === 'candidate' && (
                        <Input
                            className='input-signup'
                            placeholder='Fullname'
                            name='fullname'
                            onChange={this.onChange}
                            value={this.state.fullname}
                        />
                    )}
                    <Input
                        className='input-signup'
                        type='email'
                        placeholder='Email'
                        name='email'
                        onChange={this.onChange}
                        value={this.state.email}
                    />

                    <Button blockStyle>Sign up</Button>
                </form>
            </div>

        )
    }
}
