
import React from 'react';

import ItemRow from "../item-row/itemrow.component";

import './itemcategory.style.css';

const ItemCategory = (props) => {
    return (        
        <div className="item-category">
            {props.category.name}
            <div>
                {props.category.products.map((product, i)=>{
                    return (<ItemRow key={product.id} item={product} />);
                })}
            </div>
        </div>


    );
}

export default ItemCategory;