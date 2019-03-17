import React, { Component } from 'react'
import {Provider} from 'react-redux';
import Head from 'next/head';

import store from '../../Store/store';

//Components
import Layout from '../../organisms/Layout/Layout';
import CategorySlides from '../../organisms/CategorySlides/CategorySlides';

class RedditPage extends Component {
    render() {
        return (
            <Provider store={store}>
                  <Head>
                    <title>Reddit Page</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel='stylesheet' href='/static/styles/flexboxgrid.css' />
                </Head>
                <Layout>
                    <CategorySlides />
                </Layout>
            </Provider>
        )
    }
}

export default RedditPage;
