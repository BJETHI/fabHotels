import React, { Component } from 'react'
import Head from 'next/head';
import Header from '../../molecules/Header/Header';
import NavBar from '../../molecules/NavBar/NavBar';
import Footer from '../../molecules/Footer/Footer';

//Mockdata
import { categories } from '../../mockdata';

export default class Layout extends Component {
    render() {
        const { selectedCategory, fetchCategoryData } = this.props;
        return (
            <div>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel='stylesheet' href='/static/styles/flexboxgrid.css' />
                </Head>
                <Header />
                <NavBar categories={categories} selectedCategory={selectedCategory} fetchCategoryData={fetchCategoryData} />
                {this.props.children}
                <Footer />
                <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    color: #cfab3a;
                }
                `}</style>
            </div>
        )
    }
}
