import React from 'react';
import ProductList from './ProductList';

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];


function listar() {
    return (
        <div>
            <h2>Products:</h2>
            <ProductList products={products} />
        </div>
    )
}

export default listar