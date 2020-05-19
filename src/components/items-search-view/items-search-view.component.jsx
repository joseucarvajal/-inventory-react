import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './items-search-view.style.css';

import ItemSearch from "../item-search/item-search.component";
import ItemTableView from "../items-table-view/ItemsTableView.component";


const ItemsSearchView = () => {

    const [categoriesData, setCategoryData] = useState([]);
    const [refreshCount, setRefreshCount] = useState(0);

    const getCategories = async () => {
        const response = await fetch('http://localhost:3000/api/v1/categories/get');
        const responseJSON = await response.json();
        setCategoryData(responseJSON.data);
    }

    useEffect(() => {
        getCategories();
    }, [refreshCount]);

    return (
        <div className="items-search bordered-element">
            <ItemSearch />
            <hr />
            <ItemTableView categories={categoriesData} />
            <form>
                <br />
                <input type="button" value="refresh categories data" onClick={()=>{
                    setRefreshCount(refreshCount + 1);
                }} /> <span>{refreshCount}</span>

            </form>
        </div>
    );
};

export default ItemsSearchView;