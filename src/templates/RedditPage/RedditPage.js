import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Head from 'next/head';
import { connect } from 'react-redux'

//Components
import Layout from '../../organisms/Layout/Layout';
import CategorySlides from '../../organisms/CategorySlides/CategorySlides';

import { fetchRedditData } from '../../actions/actions';

class RedditPage extends Component {

    fetchCategoryData = (key) => {
        const { fetchCategory } = this.props;
        fetchCategory(key);
    }

    render() {
        const { categoryData, loader, selectedCategory } = this.props;
        return (
            <div>
                <Head>
                    <title>Reddit Page</title>
                </Head>
                <Layout selectedCategory={selectedCategory} fetchCategoryData={this.fetchCategoryData}>
                    <CategorySlides categoryData={categoryData} loader={loader} />
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categoryData: state.categoryData.categoryData,
    loader: state.categoryData.loader,
    selectedCategory: state.categoryData.selectedCategory,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: (key) => dispatch(fetchRedditData(key)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditPage)
