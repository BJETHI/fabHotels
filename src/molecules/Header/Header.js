import React, { Component } from 'react'
import styled from 'styled-components';

class Header extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={`header-wrapper row`} >
                <h1>fabHotels</h1>
                <img src='/static/images/fabHotel-image.jpg' alt='logoFabHotel' />
                <style jsx>{`
                .header-wrapper {
                    font-size: 30px;
                    color: #fff;
                    background: #465180;
                    padding: 5px 0;
                    justify-content: space-between;
                    padding: 10px 15px;
                    align-items: center;
                }

                h1 {
                    font-size: 30px;
                }


                img{
                    font-size: 10px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }

                @media(min-width:1024px){
                    .header-wrapper{
                        font-size: 40px;
                        justify-content: center;
                    }

                    h1 {
                        font-size: 50px;
                        margin-right: 30px;
                    }

                    img {
                        width: 60px;
                        height: 60px;
                    }
                }
                `}</style>
            </div >
        )
    }
}

export default Header;