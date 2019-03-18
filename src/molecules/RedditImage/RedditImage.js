import React, { Component } from 'react'

class RedditImage extends Component {
    render() {
        const { imageData: { images } } = this.props;
        let imageUrl = images && images[0].source.url;
        imageUrl = imageUrl.replace(/amp;/g, '');
        return (
            <div className='col-xs-12'>
                {imageUrl && <img src={imageUrl} alt='' />}
                <style jsx>{`
                img { 
                    width: 100%;
                    height: 200px;
                    border-radius: 10%;
                }

                @media(min-width: 768px){
                    img {
                        height: 300px;
                    }
                }

                @media(min-width: 1024px){
                    img {
                        height: 400px;
                    }
                }
                `}</style>
            </div>
        )
    }
}

export default RedditImage;
