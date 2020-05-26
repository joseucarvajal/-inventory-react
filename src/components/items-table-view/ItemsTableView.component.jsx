import React from 'react';

import ItemCategory from '../item-category/itemcategory.component';

const ItemsTableView = (props) => {

    const { showInStock } = props;

    return (
        <div className="items-table">
            <div className="items-table__header">
                <span>Name</span>
                <span>Price</span>
            </div>
            <div>
                {props.categories.map((categoryObj, i) => {
                    return <ItemCategory 
                        key={categoryObj.id} 
                        category={categoryObj}
                        showInStock = {showInStock} />
                })}
            </div>
        </div>
    );
}

export default ItemsTableView;