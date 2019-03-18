import React, { Component } from 'react'
import styled from 'styled-components';

class Header extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`header-wrapper row`} >
                <div className="col-xs-12">
                    fabHotels
                </div>
                <style jsx>{`
                .header-wrapper{
                    text-align: center;
                    font-size: 30px;
                    color: #fff;
                    background: #465180;
                    padding: 5px 0;
                }

                @media(min-width:1024px){
                    .header-wrapper{
                        font-size: 40px;
                    }
                }
                `}</style>
            </div >
        )
    }
}

export default Header;