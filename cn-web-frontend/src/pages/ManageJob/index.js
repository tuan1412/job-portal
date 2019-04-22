import React, { Component } from 'react'
import JobPosted from './JobPosted';
import JobProcessing from './JobProcessing';
import TabPane from '../../components/tabpane';
import Loadable from '../../components/lazyload';

export default class ManageJob extends Component {
    panes = [
        {
            label: 'Job posted',
            pane: <JobPosted />
        },
        {
            label: 'Job processing',
            pane: <JobProcessing />

        }
    ]

    render() {
        return (
            <div className='pt-2 pb-2 bg-light'>
                <div className="container justify-content-center pt-5 pb-5 ">
                    <TabPane panes={this.panes} />
                </div>
            </div>
        )
    }
}

export const AsyncManageJob = Loadable({
    loader: () => import('pages/ManageJob')
});
