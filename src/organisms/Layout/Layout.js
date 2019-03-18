import React, { Component } from 'react'
import Header from '../../molecules/Header/Header';
import NavBar from '../../molecules/NavBar/NavBar';
import Footer from '../../molecules/Footer/Footer';

//Mockdata
import { categories } from '../../mockdata';

export default class Layout extends Component {
    render() {

        return (
            <div>
                <Header />
                <NavBar categories={categories} />
                {this.props.children}
                <Footer />
                <style jsx global>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                `}</style>
            </div>
        )
    }
}
