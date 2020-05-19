import React from 'react';

import ItemsSearchView from "../../components/items-search-view/items-search-view.component";

import './buy-items.style.css';

const BuyItemsPage = ( ) => {

    return (
        <div className="buy-items-page bordered-element">
            <header className="buy-items-header bordered-element">
                Header
            </header>            
            <section className="buy-items-section">
                <ItemsSearchView></ItemsSearchView>
            </section>
            <footer className="buy-items-footer bordered-element">
                Buy items footer
            </footer>
        </div>
    );
};

export default BuyItemsPage;