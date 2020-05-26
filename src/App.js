import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import BuyItemsPage from "./pages/buy-items/buy-items.page";
import AddProductsPage from './pages/add-products/add-products.page';

function App() {
  return (
    <div className="buy-items-page bordered-element">
      <Router>
        <header className="buy-items-header bordered-element">
          <nav className="menu">
            <span><Link to="/buy-items">Buy products</Link></span>
            <span><Link to="/add-products">Add products</Link></span>
          </nav>
        </header>
        <section className="buy-items-section">
          <Route path="/buy-items">
            <BuyItemsPage />
          </Route>
          <Route path="/add-products">
            <AddProductsPage />
          </Route>
          <Redirect from="/" to="/buy-items" />
        </section>
        <footer className="buy-items-footer bordered-element">
          Buy items footer
      </footer>
      </Router>
    </div>
  );
}

export default App;
