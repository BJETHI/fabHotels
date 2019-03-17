import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategorySlides extends Component {
    render() {
        return (
            <div>
                CategorySlides
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categoryData: state.categoryData,
});

export default connect(mapStateToProps, null)(CategorySlides)
