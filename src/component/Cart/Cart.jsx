
import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    // const cart=props.Cart;  //option 1
    // const {cart} =props  //option 2
    // console.log(cart)

    let totalPrice=0;
    let totalshipping=0;
    let quantity=0;
    for (const product of cart){
        if(product.quantity ===0){
          product.quantity=1;
        }
        totalPrice=totalPrice + product.price *product.quantity;
        totalshipping =totalshipping +  product.shipping;
        quantity=quantity + product.quantity;
    }
    const tax=totalPrice*5/100
    const grandtotal =totalPrice + totalshipping + tax;
    return (
        <div className='cart'>
             <h2>order sumary </h2>
                <p>selected item:{quantity}</p>
                <p>Total price:${totalPrice}</p>
                <p>Total Shipping:${totalshipping}</p>
                <p>tax:{tax.toFixed(2)}</p>
                <h5>Grand Total:{grandtotal.toFixed(2)}</h5>
                <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart
                <FontAwesomeIcon  icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                {children}
        </div>
    );
};

export default Cart;