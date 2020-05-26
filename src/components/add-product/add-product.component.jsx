
import React, { useState } from 'react';

import ItemRow from "../item-row/itemrow.component";

import './add-product.style.css';

const AddProduct = (props) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [status, setStatus] = useState('');

    const onSubmitProduct = (e) => {
        e.preventDefault();
        const product = {
            id,
            name,
            category,
            price: price,
            stock: stock
        };
        saveProduct(product);
    }

    const saveProduct = async (product) => {
        const productStr = JSON.stringify(product);
        console.log({ productStr });
        const response = await fetch('http://localhost:3000/api/v1/products/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: productStr
        });
        const responseJSON = await response.json();
        setStatus(responseJSON);
        //console.log({responseJSON});
    }

    return (
        <div>
            <form className="add-product" onSubmit={onSubmitProduct}>
                <div className="row">
                    <label htmlFor="id" className="add-product_label">Id</label>
                    <input id="id" type="number" value={id} onChange={(e) => { setId(e.target.value); }} required />
                </div>
                <div className="row">
                    <label htmlFor="name" className="add-product_label">Name</label>
                    <input id="name" type="text" value={name} onChange={(e) => { setName(e.target.value); }} required />
                </div>
                <div className="row">
                    <label htmlFor="category" className="add-product_label">Category</label>
                    <input id="category" type="number" value={category} onChange={(e) => { setCategory(e.target.value); }} required />
                </div>
                <div className="row">
                    <label htmlFor="price" className="add-product_label">Price</label>
                    <input id="price" type="number" value={price} onChange={(e) => { setPrice(e.target.value); }} required />
                </div>
                <div className="row">
                    <label htmlFor="stock" className="add-product_label">Stock</label>
                    <input id="stock" type="number" value={stock} onChange={(e)=>{setStock(e.target.value);}} />
                </div>
                <div className="row">
                    <button>Send</button>
                </div>
            </form>
            {
                status
                    ? <div>{status.message}</div>
                    : <></>
            }
        </div>
    );
}

export default AddProduct;