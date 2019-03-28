import React, { Component } from 'react';
import paginator from 'paginator';
import classnames from 'classnames';

export default class Pagination extends Component {
    static defaultProps = {
        pageSize: 10,
        pageRange: 5,
        pageIndex: 1,
        totalItems: 1,
        onChangePage: function() {}
    };

    renderPages = (first_page, last_page) => {
        const { pageIndex, onChangePage } = this.props;
        let pages = [];
        for (let i = first_page; i <= last_page; i++) {
            const cls = i === pageIndex ? 'active' : '';
            const page = (
                <li className={cls} key={i} onClick={onChangePage.bind(this, i)}><span>{i}</span></li>
            )
            pages.push(page)
        }
        return pages;
    }

    render() {
        const { pageSize, pageRange, pageIndex, totalItems, onChangePage } = this.props;
        const paginationInfo = new paginator(pageSize, pageRange).build(totalItems, pageIndex);
        const { first_page, last_page, has_previous_page, has_next_page } = paginationInfo;
        const classPrevPage = classnames({ 'icon-keyboard_arrow_left h5': true, 'disable': !has_previous_page });
        const classNextPage = classnames({ 'icon-keyboard_arrow_right h5': true, 'disable': !has_next_page });

        return (
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <div className="site-block-27">
                        <ul>
                            <li 
                                onClick={onChangePage.bind(this, pageIndex - 1)}>
                                <span><i className={classPrevPage}></i></span>
                            </li>
                            {this.renderPages(first_page, last_page)}
                            <li 
                                onClick={onChangePage.bind(this, pageIndex + 1)}>
                                <span><i className={classNextPage}></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
