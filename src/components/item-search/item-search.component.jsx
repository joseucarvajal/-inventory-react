import React, { useState } from 'react';

const ItemSearch = (props) => {

    const [showInStock, setShowInStock] = useState(false);

    const { onShowInStockChanged } = props;

    return (
        <div className="item-search">
            <form>
                <div>
                    <input type="text" placeholder="Search..." />
                </div>
                <div>
                    <input
                        checked={showInStock}
                        type="checkbox"
                        id="check-show-in-stock"
                        onChange={(e) => {                             
                            setShowInStock(e.target.checked);                            
                            onShowInStockChanged(e.target.checked);
                        }} />
                    <label htmlFor="check-show-in-stock">Only show products in stock</label>
                    </div>
            </form>
        </div>
    );
}

export default ItemSearch;