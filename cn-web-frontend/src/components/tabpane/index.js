/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import classnames from 'classnames';
import './style.css';

export default class TabPane extends Component {

    state = {
        activeTab: 0
    }

    onChangePane = (activeTab) => {
        this.setState({
            activeTab
        });
    }

    renderTabs = () => {
        const { panes } = this.props;
        const { activeTab } = this.state;

        return panes.map(({ label }, i) => {
            const cls = classnames({
                'nav-link py-3 tab-label': true,
                'py-3': true,
                'show': i === activeTab,
                'active': i === activeTab,
            });
            return (
                <li className='nav-item' key={i} onClick={this.onChangePane.bind(this, i)}>
                    <span className={cls}>{label}</span>
                </li>
            )
        })
    }

    renderPanes = () => {
        const { panes } = this.props;
        const { activeTab } = this.state;

        return panes.map(({ pane }, i) => {
            const cls = classnames({
                'tab-pane fade': true,
                'show': i === activeTab,
                'active': i === activeTab
            });
            return (
                <div className={cls} key={i}>
                    {pane}
                </div>

            )
        })
    }

    render() {
        return (
            <div className='tab-pane-container'>
                <ul className='nav nav-pills'>
                    {this.renderTabs()}
                </ul>
                <div className='tab-content'>
                    {this.renderPanes()}
                </div>
            </div>
        )
    }
}
