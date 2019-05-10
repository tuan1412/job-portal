import React, { Component } from 'react'
import Layout from '../../components/layout/Layout';
import CategoriesList from './CategoriesList';
import Loadable from '../../components/lazyload';


export default class Categories extends Component {
    render() {
        return (
            <Layout>
                <div className="site-section bg-light">
                    <div className="container">
                        <CategoriesList />
                    </div>
                </div>
            </Layout>

        )
    }
}

export const AsyncCategories = Loadable({
    loader: () => import('pages/Categories')
});
