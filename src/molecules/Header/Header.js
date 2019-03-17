import React, { Component } from 'react'
import styled from 'styled-components';

class Header extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`${className}`} >
                <div className="row">
                    <div className="col-xs-12">
                        fabHotels
                    </div>
                </div>
            </div >
        )
    }
}

export default Header;