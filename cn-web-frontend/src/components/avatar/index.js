/* eslint-disable no-undef */
import React, { Component } from 'react'
import uniqueId from 'lodash.uniqueid';
import './style.css';

export default class Avatar extends Component {

    constructor(props) {
        super(props);
        this.id = uniqueId("prefix-");
    }

    componentDidMount() {
        const { defaultAvatar } = this.props;
        const imagePreviewDefault = defaultAvatar ? defaultAvatar : '/images/default-image.png';
        $(this.imagePreview).css('background-image', `url(${imagePreviewDefault})`);
    }

    readUrl = (ev) => {
        const { files } = ev.target;
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                $(this.imagePreview).css('background-image', 'url(' + e.target.result + ')');
                $(this.imagePreview).hide();
                $(this.imagePreview).fadeIn(650);
            }
            reader.readAsDataURL(file);
            this.file = file;
        }
    }

    getFile = () => {
        return this.file ? this.file : null;
    }

    setRef = (el) => {
        this.imagePreview = el;
    }

    render() {
        return (
            <div className='avatar-upload'>
                <div className='avatar-edit'>
                    <input id={this.id} type='file' accept='.png, .jpg, .jpeg' onChange={this.readUrl} />
                    <label htmlFor={this.id}></label>
                </div>
                <div className='avatar-preview'>
                    <div ref={this.setRef}>
                    </div>
                </div>
            </div>
        )
    }
}
