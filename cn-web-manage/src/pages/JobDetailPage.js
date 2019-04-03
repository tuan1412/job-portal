import React, { Component } from 'react';
import TitlePage from '../components/layout/TitlePage';

class JobDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <TitlePage data={["Jobs", "Detail"]}></TitlePage>
            </>
        );
    }
}

export default JobDetailPage;