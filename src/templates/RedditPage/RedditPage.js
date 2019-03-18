import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Head from 'next/head';
import { connect } from 'react-redux'

//Components
import Layout from '../../organisms/Layout/Layout';
import CategorySlides from '../../organisms/CategorySlides/CategorySlides';

import { fetchRedditData } from '../../actions/actions';

class RedditPage extends Component {
    static async getInitialProps({ reduxStore }) {
        reduxStore.dispatch(fetchRedditData('pics'));
        return {};
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Reddit Page</title>
                </Head>
                <Layout>
                    <CategorySlides />
                </Layout>
            </div>
        )
    }
}
export default connect()(RedditPage)
