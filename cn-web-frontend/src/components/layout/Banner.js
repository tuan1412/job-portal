import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        const bgStyle = {
            backgroundImage: 'url("images/hero_bg_2.jpg")'
        }
        const { current } = this.props;
        return (
            <div className="unit-5 overlay" style={bgStyle}>
                <div className="container text-center">
                    <h2 className="mb-0">{current}</h2>
                </div>
            </div>
        )
    }
}
