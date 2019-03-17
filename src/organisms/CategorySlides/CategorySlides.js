import React, { Component } from 'react'
import { connect } from 'react-redux'

import CategorySlide from '../../molecules/CategorySlide/CategorySlide';

class CategorySlides extends Component {

    renderCategorySlide = (child) => {
        const { data } = child;
        return <CategorySlide slideData={data} />;
    }

    render() {
        const { categoryData } = this.props;
        const children = categoryData && categoryData.children;
        return (
            <div>
                {children && children.map(child => this.renderCategorySlide(child))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categoryData: state.categoryData.categoryData,
});

export default connect(mapStateToProps, null)(CategorySlides)
