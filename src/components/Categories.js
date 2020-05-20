import React from 'react';

const Categories = ({ categoryList, selectedCategory, onChangeCategory }) => {
    const renderButtons = () => {
    return categoryList.map((category, index) => {
        return <button key={index}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => onChangeCategory(category)}
        >{category}</button>
    })
    }

    return (
        <div className="categories">
            <h5>Category filters</h5>
            {renderButtons()}
        </div>
    )
}

export default Categories
