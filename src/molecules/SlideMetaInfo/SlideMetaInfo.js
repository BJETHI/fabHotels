import React from 'react'

const SlideMetaInfo = (props) => {
    return (
        <div className='meta-info'>
            {props.comments && <i className='meta-field'><img src='/static/images/comment.png' alt='comment' /> <b>{props.comments}</b></i>}
            {props.subscribers && <i className='meta-field'><img src='/static/images/subscribers.png' alt='comment' /> <b>{props.subscribers}</b></i>}
            {props.views && <i className='meta-field'>views : <b>{props.views}</b></i>}
            <style jsx>{`
                .meta-info {
                    margin-top: 10px;
                }

                .meta-field {
                    margin-right: 15px;d
                }

                img {
                    width: 20px;
                }

                @media(min-width: 1024px) {
                    .meta-info {
                    margin-top: 15px;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default SlideMetaInfo;

