import React, { Component } from 'react'
import Header from '../../molecules/Header/Header';
import NavBar from '../../molecules/NavBar/NavBar';

//Mockdata
import { categories } from '../../mockdata';

export default class Layout extends Component {
    render() {

        return (
            <div>
                <Header />
                <NavBar categories={categories} />
                {this.props.children}
            </div>
        )
    }
}
