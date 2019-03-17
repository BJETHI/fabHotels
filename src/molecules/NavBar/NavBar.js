import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryLinkTab from '../CategoryLinkTab/CategoryLinkTab';

import { fetchRedditData } from '../../actions/actions';

class NavBar extends Component {

    fetchCategoryData = (key) => {
        const { fetchCategory } = this.props;
        console.log(key, 'control comes inside component function');
        fetchCategory(key);
    }

    renderCategoryTab = (category) => {
        const { key, value } = category;
        return <CategoryLinkTab categoryKey={key} value={value} fetchCategoryData={this.fetchCategoryData} key={key} />;
    }

    render() {
        const { categories } = this.props;
        return (
            <div>
                {categories.map(category => this.renderCategoryTab(category))}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: (key) => dispatch(fetchRedditData(key)),
    }
}

export default connect(null, mapDispatchToProps)(NavBar);