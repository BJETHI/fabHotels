import React, { Component } from 'react'
import classNames from 'classnames';

class CategoryLinkTab extends Component {

    render() {
        const { categoryKey, fetchCategoryData, value, selectedCategory } = this.props;
        const tabClass = classNames({
            'selected': categoryKey === selectedCategory,
        });
        return (
            <li onClick={() => fetchCategoryData(categoryKey)} className={`${tabClass} col-xs-3 col-md-2`}>
                {value}
                < style jsx > {`
            li {
                display: inline-block;
                cursor: pointer;
            }
            .selected{
                background: #FF0000;
            }
            `}</style >
            </li >
        )
    }
}

export default CategoryLinkTab;