
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('../../data.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    const cartButton = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <>
            <div className="d-flex">
                <div className="row w-75 mx-auto row-cols-1 row-cols-md-3 g-4">
                {
                products.map(product => <Product
                key={product.title}
                product={product}
                cartButton={cartButton}
                
                ></Product>)
                 }
                </div>
                <div className="w-25 mx-auto pe-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            
        </>
    );
};

export default Store;