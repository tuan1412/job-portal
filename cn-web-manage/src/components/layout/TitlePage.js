import React, { Component } from 'react';
import { withRouter } from 'react-router';
class TitlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    changePage(page) {
        console.log("next-page: ", page);
        this.props.history.push(page);
    }

    render() {
        return (
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="page-header">
                        <h3 class="mb-2">{this.props.data[this.props.data.length - 1]}</h3>
                        <p class="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta,
                        fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div class="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a onClick={() => this.changePage("/app/")} href="#" class="breadcrumb-link">Home</a></li>
                                    {
                                        this.props.data.map((item, index) => {
                                            if (index != this.props.data.length - 1)
                                                return <li key={index} class="breadcrumb-item"><a onClick={() => this.changePage("/app/" + item.toLowerCase())} href="#" class="breadcrumb-link">{item}</a></li>
                                            else
                                                return <li key={index} class="breadcrumb-item active" aria-current="page">{item}    </li>
                                        })
                                    }
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TitlePage);