import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './items-search-view.style.css';

import ItemSearch from "../item-search/item-search.component";
import ItemTableView from "../items-table-view/ItemsTableView.component";


const ItemsSearchView = () => {

    const [categoriesData, setCategoryData] = useState([]);
    const [refreshCount, setRefreshCount] = useState(0);
    const [showInStock, setShowInStock] = useState(false);

    const getAllCategoriesData = async () => {
        const response = await fetch('http://localhost:3000/api/v1/categories/get');
        const responseJSON = await response.json();
        setCategoryData(responseJSON.data);
    }

    const getProductsByStock = async () => {
        const response = await fetch('http://localhost:3000/api/v1/products/getwithstock');
        const responseJSON = await response.json();
        setCategoryData(responseJSON.data);
    }

    useEffect(() => {
        if (showInStock) {
            getProductsByStock();
        }
        else {
            getAllCategoriesData();
        }
    }, [refreshCount, showInStock]);

    return (
        <div className="items-search bordered-element">
            <ItemSearch onShowInStockChanged={(onOff) => {
                setShowInStock(onOff);
            }} />
            <hr />
            <ItemTableView 
                categories={categoriesData} 
                showInStock={showInStock}/>
            <form>
                <br />
                <input type="button" value="refresh categories data" onClick={() => {
                    setRefreshCount(refreshCount + 1);
                }} /> <span>{refreshCount}</span>

            </form>
        </div>
    );
};

export default ItemsSearchView;