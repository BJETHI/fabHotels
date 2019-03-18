import React from 'react'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            © 2019 Casa2 Stays Pvt. Ltd. All rights reserved.
            <style jsx>{`
                .footer-wrapper {
                    background: #1f2548;
                    padding: 10px;
                    color: #fff;
                    text-align: center;
                    font-size : 10px;
                    position: sticky;
                    bottom: 0;
                }
            `}
            </style>
        </div>
    )
}

export default Footer;
