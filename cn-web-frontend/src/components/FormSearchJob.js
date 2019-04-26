import React, { Component } from 'react'
import Input from './formcontrols/Input';
import Select from './formcontrols/Select';
import Button from './formcontrols/Button';
import client from '../core/api';

export default class FormSearchJob extends Component {
    static defaultProps = {
        classLayout: 'col-md-6 col-lg-3 mb-3 mb-lg-0'
    }

    state = {
        categories: [{ value: '', name: 'Ngành nghề' }],
        title: '',
        location: '',
        category: '',
    }

    componentDidMount() {
        client({
            method: 'get',
            url: '/api/get_list_categories'
        }).then((res) => {
            const result = res.map(({ name }) => {
                return { value: name, name };
            });

            this.setState(({ categories }) => {
                return {
                    categories: [...categories, ...result],
                }
            })
        })
    }

    onChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value,
        })
    }

    onSelectCategory = (category) => {
        this.setState({
            category,
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.callback(this.state);
    }

    render() {
        const { classLayout } = this.props;;
        const { categories, title, location } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div className='row'>
                    <div className={classLayout}>
                        <Input placeholder='eg. Web Developer' value={title} name='title' onChange={this.onChange} />
                    </div>
                    <div className={classLayout}>
                        <Select items={categories} onChange={this.onSelectCategory} />
                    </div>
                    <div className={classLayout}>
                        <Input className='search-input' blockStyle={true} placeholder='Location' value={location} name='location' onChange={this.onChange} />
                    </div>
                    <div className={classLayout}>
                        <Button blockStyle={true}>Search</Button>
                    </div>
                </div>
            </form>
        )
    }
}
