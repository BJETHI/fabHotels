import React, { Component } from 'react'
import { connect } from 'react-redux'

import CategorySlide from '../../molecules/CategorySlide/CategorySlide';

import { fetchRedditData } from '../../actions/actions';

class CategorySlides extends Component {

    componentDidMount() {
        this.props.dispatch(fetchRedditData('alternativeart'));
    }

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
