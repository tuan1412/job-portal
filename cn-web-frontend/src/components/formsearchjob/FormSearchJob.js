import React, { Component, Fragment } from 'react'
import Input from '../formcontrols/Input';
import Select from '../formcontrols/Select';
import Button from '../formcontrols/Button';
import client from '../../core/api/client';
import CustomModal from '../modal';
import FormSearchAdvance from '../formsearchadvance';

export default class FormSearchJob extends Component {
    static defaultProps = {
        classLayout: 'col-md-6 col-lg-3 mb-3 mb-lg-0',
        title: '',
        location: '',
        category: '',
    }

    state = {
        categories: [{ value: '', name: 'Ngành nghề' }],
        title: '',
        location: '',
        category: '',
        openSearchAdvance: false,
    }

    componentDidMount() {
        client.getCategories()
            .then((res) => {
                const result = res.map(({ name }) => {
                    return { value: name, name };
                });

                const { classLayout, ...rest } = this.props

                this.setState(({ categories }) => {
                    return {
                        categories: [...categories, ...result],
                        ...rest,
                    }
                })
            });
    }

    closeSearchAdvance = (callback) => {
        if (typeof callback !== 'function') callback = function() {};
        this.setState({
            openSearchAdvance: false
        }, () => callback());
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

    openSearchAdvance = () => {
        this.setState({ openSearchAdvance: true })
    }

    searchAdvance = (props) => {
        const { searchAdvance } = this.props;
        searchAdvance(props);
    }

    render() {
        const { classLayout } = this.props;
        const { categories, title, location, category, openSearchAdvance } = this.state;

        return (
            <Fragment>
                <CustomModal
                    cls='form-search-advance'
                    open={openSearchAdvance}
                    onClose={this.closeSearchAdvance}
                    callback={this.searchAdvance}
                >
                    <FormSearchAdvance items={categories} />
                </CustomModal>

                <form onSubmit={this.onSubmit}>
                    <div className='row'>
                        <div className={classLayout}>
                            <Input placeholder='eg. Web Developer' value={title} name='title' onChange={this.onChange} />
                        </div>
                        <div className={classLayout}>
                            <Select items={categories} onChange={this.onSelectCategory} value={category} />
                        </div>
                        <div className={classLayout}>
                            <Input className='search-input' blockStyle={true} placeholder='Location' value={location} name='location' onChange={this.onChange} />
                        </div>
                        <div className={classLayout}>
                            <Button blockStyle={true}>Tìm kiếm</Button>
                            <span className='search-advance' onClick={this.openSearchAdvance}>
                                <i className='fa fa-search' aria-hidden='true'></i>
                                Tìm kiếm nâng cao
                        </span>
                        </div>
                    </div>
                </form>
            </Fragment>

        )
    }
}
