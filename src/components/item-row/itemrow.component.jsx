import React from 'react';

import './itemrow.style.css';

const ItemRow = (props) => {

    const { name, price, stock  } = props.item;

    return (
        <div className="item">
            <span className="item__name">Name: {name}</span>
            <span className="item__price">Price: {price}</span>
            {
                stock > 0
                ? <span> Stock: {stock}</span>
                : <></>
            }            
        </div>
    );
}

export default ItemRow;