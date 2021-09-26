import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let productName = '';
    for(const product of cart){
        productName = productName + ' ' + product.title;
        total = total + product.salary;
    }
    return (
        <div className="card shadow h-auto ms-5 p-5 bg-light">
            <h4 className="card-title">
                <span className="text-success fs-3">Item click:</span> {props.cart.length}
            </h4>
            
            <h4><span className="text-success fs-3">Total:</span> {total}Tk</h4>
            <p className="fs-5 fw-bold">
               {productName}
            </p>
        </div>
    );
};

export default Cart;