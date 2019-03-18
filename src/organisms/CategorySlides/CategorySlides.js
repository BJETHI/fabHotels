import React, { Component } from 'react'

import CategorySlide from '../../molecules/CategorySlide/CategorySlide';

import { fetchRedditData } from '../../actions/actions';

class CategorySlides extends Component {

    renderCategorySlide = (child) => {
        const { data } = child;
        return <CategorySlide slideData={data} />;
    }

    render() {
        const { categoryData, loader } = this.props;
        const children = categoryData && categoryData.children;
        return (
            <div>
                {loader && <div className='loader-wrapper'><img src='/static/images/loader.gif' alt='' /></div>}
                {children && children.map(child => this.renderCategorySlide(child))}
                <style jsx>{`
                    div {
                        background: #4c5787;
                    }

                    .loader-wrapper {
                        min-height:100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default CategorySlides;
