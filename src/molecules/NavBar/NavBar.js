import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryLinkTab from '../CategoryLinkTab/CategoryLinkTab';

import { fetchRedditData } from '../../actions/actions';

class NavBar extends Component {

    fetchCategoryData = (key) => {
        const { fetchCategory } = this.props;
        fetchCategory(key);
    }

    renderCategoryTab = (category) => {
        const { selectedCategory } = this.props;
        const { key, value } = category;
        return <CategoryLinkTab categoryKey={key} value={value} fetchCategoryData={this.fetchCategoryData} key={key} selectedCategory={selectedCategory} />;
    }

    render() {
        const { categories } = this.props;
        return (
            <ul className="row">
                {categories.map(category => this.renderCategoryTab(category))}
                <style jsx>{`
                ul {
                    color: #fff;
                    font-size: 10px;
                    background: #212c5d;
                    padding: 5px;
                    position: sticky;
                    top: 0;
                }

                @media(min-width: 1024px){
                    ul{
                        font-size: 16px;
                    }
                }
                `}</style>
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    selectedCategory: state.categoryData.selectedCategory,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: (key) => dispatch(fetchRedditData(key)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);