import React, { Component, Fragment } from 'react'
import Loading from '../../components/loading';
import Button from '../../components/formcontrols/Button';
import _ from '../../core/utils';
import client from '../../core/api/client';

export default class CategoriesList extends Component {
    state = {
        categories: []
    }
    componentDidMount() {
        if (_.isCandidateUser()) {
            client.getCategoriesByCandidate()
                .then((categories) => {
                    this.setState({
                        categories
                    })
                })
        } else {
            client.getCategories()
                .then((categories) => {
                    this.setState({
                        categories
                    })
                })
        }

    }

    followCategory(id) {
        client.followCategory(id)
            .then(() => {
                const { categories } = this.state;
                const index = categories.findIndex((cate) => cate.id === id);
                const newCategories = [...categories];
                let newCategory = newCategories[index];
                newCategories[index] = { ...newCategory, isFollowed: true };
                this.setState({
                    categories: newCategories
                })
            })
    }

    unfollowCategory(id) {
        client.unfollowCategory(id)
            .then(() => {
                const { categories } = this.state;
                const index = categories.findIndex((cate) => cate.id === id);
                const newCategories = [...categories];
                let newCategory = newCategories[index];
                newCategories[index] = { ...newCategory, isFollowed: false };
                this.setState({
                    categories: newCategories
                })
            })
    }

    onAction = (id, isFollowed) => {
        if (!isFollowed) {
            return this.followCategory(id);
        }
        this.unfollowCategory(id);
    }
    renderConent = () => {
        const { categories } = this.state;
        return (
            <Fragment>
                {
                    categories.length === 0
                        ? <div className="bg-white p-5 text-center">Không có loại công việc nào</div>
                        : categories.map(({ name, id, isFollowed }) => {
                            return (
                                <div key={id} className="row aos-init aos-animate" data-aos="fade">
                                    <div className="col-md-12">
                                        <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                                            <div className="mb-4 mb-md-0 mr-5">
                                                <div className="job-post-item-header d-flex align-items-center">
                                                    <h2 className="mr-3 text-black h4">{name}</h2>
                                                </div>
                                            </div>
                                            {_.isCandidateUser() && (
                                                <div className="ml-auto">
                                                    <Button
                                                        className="py-2 ml-2"
                                                        onClick={() => this.onAction(id, isFollowed)}>
                                                        {!isFollowed ? 'Theo dõi' : 'Không theo dõi'}
                                                    </Button>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </Fragment >
        )

    }
    render() {
        const { loading } = this.props
        return (
            <Fragment>
                {
                    loading
                        ? <Loading />
                        : this.renderConent()
                }
            </Fragment>
        )
    }
}

