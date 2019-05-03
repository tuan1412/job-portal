import React, { Component } from 'react';

class Pagination extends Component {
    number_page = 10;
    current_page = 1;
    from_page = 1;
    to_page = 6;
    constructor(props) {
        super(props);
        this.state = {};
        this.start();
    }

    start() {
        this.number_page = this.props.number_page || 10;
        this.current_page = this.props.current_page || 1;
        if (this.number_page <= 6) {
            this.to_page = this.number_page;
        } else {
            if (this.number_page <= (this.current_page + 5)) {
                this.to_page = this.number_page;
                this.from_page = this.to_page - 5;
            } else {
                this.from_page = this.current_page;
                this.to_page = this.from_page + 5;
            }
        }
    }

    click(page) {
        this.props.callback(page);
        this.current_page = page;
        this.check();
    }

    check() {
        this.forceUpdate();
    }

    back() {
        if (this.current_page > 1) {
            if (this.current_page == this.from_page) {
                this.from_page--;
                this.to_page--;
            }
            this.current_page--;
            this.check();
        }
    }

    next() {
        if (this.current_page < this.number_page) {
            if (this.current_page == this.to_page) {
                this.from_page++;
                this.to_page++;
            }
            this.current_page++;
            this.check();
        }
    }

    first() {
        this.current_page = 1;
        this.from_page = 1;
        if (this.number_page <= 6) {
            this.to_page = this.number_page;
        } else {
            this.to_page = 6;
        }
        this.check();
    }

    last() {
        this.current_page = this.number_page;
        this.to_page = this.number_page;
        if (this.number_page <= 6) {
            this.from_page = 1;
        } else {
            this.from_page = this.number_page - 5;
        }
        this.check();
    }

    render() {
        return (
            <div class="pagination_pre">
                <div class="pagination" style={{ display: 'inline-block' }}>
                    <a onClick={() => { this.first() }}>First</a>
                    <a onClick={() => { this.back() }}>&laquo;</a>
                    {(() => {
                        let view = [];
                        for (let i = this.from_page; i <= this.to_page; i++) {
                            if (this.current_page == i) {
                                view.push(<a class="active">{i}</a>);
                            } else {
                                view.push(<a onClick={() => { this.click(i) }}>{i}</a>);
                            }
                        }
                        return view;
                    })()
                    }
                    <a onClick={() => { this.next() }}>&raquo;</a>
                    <a onClick={() => { this.last() }}>Last</a>
                </div>
            </div>
        );
    }
}

export default Pagination;