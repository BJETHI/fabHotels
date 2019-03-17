import React from 'react'

const CategoryLinkTab = (props) => {
    return (
        <div onClick={() => props.fetchCategoryData(props.categoryKey)}>
            {props.value}
        </div >
    )
}

export default CategoryLinkTab;