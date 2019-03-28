import React, { Component } from 'react'
import Input from './formcontrols/Input';
import Select from './formcontrols/Select';
import Button from './formcontrols/Button';

export default class FormSearchJob extends Component {
    items = [
        { value: '', name: 'Category' },
        { value: 'fulltime', name: 'Full Time' },
        { value: 'parttime', name: 'Part Time' },
        { value: 'freelance', name: 'Freelance' },
        { value: 'internship', name: 'Internship' },
        { value: 'termporary', name: 'Termporary' }
    ]
    render() {
        const classLayout = 'col-md-6 col-lg-3 mb-3 mb-lg-0';
        return (
            <form>
                <div className='row'>
                    <div className={classLayout}>
                        <Input placeholder='eg. Web Developer' />
                    </div>
                    <div className={classLayout}>
                        <Select items={this.items} />
                    </div>
                    <div className={classLayout}>
                        <Input className='search-input' blockStyle={true} placeholder='Location' />
                    </div>
                    <div className={classLayout}>
                        <Button blockStyle={true}>Search</Button>
                    </div>
                </div>
            </form>
        )
    }
}
