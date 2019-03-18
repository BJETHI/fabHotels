import React, { Component } from 'react'
import CategoryLinkTab from '../CategoryLinkTab/CategoryLinkTab';

class NavBar extends Component {

    renderCategoryTab = (category) => {
        const { selectedCategory, fetchCategoryData } = this.props;
        const { key, value } = category;
        return <CategoryLinkTab categoryKey={key} value={value} fetchCategoryData={fetchCategoryData} key={key} selectedCategory={selectedCategory} />;
    }

    render() {
        const { categories } = this.props;
        return (
            <ul className="row">
                {categories.map(category => this.renderCategoryTab(category))}
                <style jsx>{`
                ul {
                    font-size: 10px;
                    background: #212c5d;
                    position: sticky;
                    top: 0;
                    justify-content: center;
                    padding: 10px;
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

export default NavBar;