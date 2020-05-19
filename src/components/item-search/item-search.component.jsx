import React from 'react';

const ItemSearch = (props) => {
    return (
        <div className="item-search">
            <form>
                <div>
                    <input type="text" placeholder="Search..." />
                </div>
                <div>
                    <input type="checkbox"/> Only show products in stock
                </div>
            </form>
        </div>
    );
}

export default ItemSearch;