import React, { Component } from 'react'
import SlideMetaInfo from '../SlideMetaInfo/SlideMetaInfo';
import RedditImage from '../RedditImage/RedditImage';

class CategorySlide extends Component {
    render() {
        const { slideData } = this.props;
        console.log(slideData);
        const {
            title,
            preview: imageData,
            author,
            num_comments: comments,
            subreddit_subscribers: subscribers,
            view_count: views,
        } = slideData;
        return (
            <div className='row'>
                <div className="col-xs-12 col-md-6 col-md-offset-3 slide-wrapper">
                    {title && <h3 className='post-title'>{title}</h3>}
                    {imageData && <RedditImage imageData={imageData} />}
                    <SlideMetaInfo views={views} comments={comments} subscribers={subscribers} />
                    {author && <p className='post-author'>Authored by : {author}</p>}
                </div>

                <style jsx>{`
                .slide-wrapper {
                    border: 1px solid #000;
                    border-radius: 5px;
                    padding: 20px;
                    background: #212c5d;
                }
                .post-description{
                    font-style: italic;
                }
                .post-title {
                    margin-bottom: 10px;
                }

                .post-author {
                    font-size: 20px;
                    font-style: italic;
                    text-align: center;
                    margin-top: 10px;
                }

                @media(min-width: 1024px) {
                    .slide-wrapper {
                        margin-top: 20px;
                    }
                }
                `
                }
                </style>
            </div>
        )
    }
}
export default CategorySlide;
