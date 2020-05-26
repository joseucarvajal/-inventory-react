
import React, { useState, useEffect } from 'react';

import ItemRow from "../item-row/itemrow.component";

import './itemcategory.style.css';

const ItemCategory = (props) => {

    const { name, products } = props.category;    
    const { showInStock } = props;
    
    const [selectedItem, setSelectecItem] = useState(null);

    useEffect(() => {
        if (showInStock) {
            if (selectedItem !== null && selectedItem.stock <= 0) {
                setSelectecItem(null);
            }
        }
    }, [showInStock]);


    return (
        <div className="item-category">
            <span className="item-category__name">{name}</span>
            <div>
                {products.map((product, i) => {
                    return (
                        <div key={product.id} onClick={() => {
                            setSelectecItem(product);
                        }} className="table-row">
                            <ItemRow item={product} />
                        </div>
                    );
                })}
            </div>
            {
                selectedItem !== null
                    ? (<div>
                        <table border="1" width="100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedItem.name}</td>
                                    <td>{selectedItem.price}</td>
                                    <td>{selectedItem.stock}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                    : <></>
            }
        </div>


    );
}

export default ItemCategory;