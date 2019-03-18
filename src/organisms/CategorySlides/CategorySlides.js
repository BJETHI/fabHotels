import React, { Component } from 'react'

import CategorySlide from '../../molecules/CategorySlide/CategorySlide';

class CategorySlides extends Component {

    renderCategorySlide = (child, index) => {
        const { selectedCategory } = this.props;
        const { data, kind } = child;
        return <CategorySlide slideData={data} key={`${kind}${selectedCategory}${index}`} altTextProp={`${selectedCategory}${index}`} />;
    }

    render() {
        const { categoryData, loader } = this.props;
        const children = categoryData && categoryData.children;
        return (
            <div>
                {loader && <div className='loader-wrapper'><img src='/static/images/loader.gif' alt='loader-image' /></div>}
                {children && children.map((child, index) => this.renderCategorySlide(child, index))}
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
