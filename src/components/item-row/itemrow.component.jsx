import React from 'react';

import './itemrow.style.css';

const ItemRow = (props) => {
    return (
        <div className="item">
            <span className="item__name">{props.item.name}</span>
            <span className="item__price">{props.item.price}</span>
        </div>
    );
}

export default ItemRow;