
import React, { useState, useEffect } from 'react';

import ItemRow from "../item-row/itemrow.component";

import './itemcategory.style.css';

const ItemCategory = (props) => {

    const { showInStock } = props;

    useEffect(()=>{        
        if(showInStock){
            if(selectedItem !== null && selectedItem.stock <= 0){
                setSelectecItem(null);
            }
        }
    }, [showInStock]);

    const [selectedItem, setSelectecItem] = useState(null);

    return (
        <div className="item-category">
            {props.category.name}
            <div>
                {props.category.products.map((product, i) => {
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
                        <table border="1">
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