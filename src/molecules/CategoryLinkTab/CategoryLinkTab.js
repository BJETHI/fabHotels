import React, { Component } from 'react'
import classNames from 'classnames';

class CategoryLinkTab extends Component {

    render() {
        const { categoryKey, fetchCategoryData, value, selectedCategory } = this.props;
        const tabClass = classNames({
            'selected': categoryKey === selectedCategory,
        });
        return (
            <li onClick={() => fetchCategoryData(categoryKey)} className={`${tabClass}`}>
                {value}
                < style jsx > {`
            li {
                display: inline-block;
                cursor: pointer;
                margin: 0 8px;
                font-weight: bold;
            }

            li:hover {
                color: #9400D3;
            }

            .selected {
                background: #1e90ff;
            }

            @media(min-width:1024px) {
                li {
                    padding: 10px;
                }
            }
            `}</style >
            </li >
        )
    }
}

export default CategoryLinkTab;