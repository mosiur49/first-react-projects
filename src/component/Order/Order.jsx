import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheckSquare, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './Order.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart =useLoaderData();
    const [cart,setCart]=useState(saveCart)
    const handeRemoveCart=(id) =>{
        const remainingCart=cart.filter(product => product.id !==id)
        setCart(remainingCart)
        removeFromDb(id)
    }
    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    
    
    return (
        <div className='shop-container'>
            <div className='review'>
            
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handeRemoveCart={handeRemoveCart}
                ></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart} >
                  <Link className='proced-link' to="/checkout">
                    <button className='btn-proced'>porced checkout
                    <FontAwesomeIcon  icon={faCheckSquare}></FontAwesomeIcon>
                    </button>
                  </Link>  
                </Cart>

            </div>
        </div>
    );
};

export default Order;