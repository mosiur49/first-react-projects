
import React, { useEffect, useState } from 'react';
import{addToDb,getShoppingCart} from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products,setProducts] =useState([]);

    const [cart,setCart]=useState([])
    
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    
    useEffect( ()=>{
        const storeCart=getShoppingCart();
        const savedCart=[];
        //step 1:get id of the added product
        for (const id in storeCart){
            //step 2: get product from products state by using id 
            const addedProduct =products.find(product =>product.id === id)
            if(addedProduct){
                //step 3:add quantity
                const quantity =storeCart[id];
                addedProduct.quantity=quantity;
                //step 4:add the added product to the saved cart
                savedCart.push(addedProduct)
            } 
            // console.log('added product',addedProduct)
        }
        //step 5:set the cart
        setCart(savedCart);
    }, [products])
    


    const handleAddToCart =(product) =>{
        // console.log(product)
        const newcart =[...cart,product]
        setCart(newcart)
        addToDb(product.id)
    }

    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className='cart-container'>
            <Cart cart={cart} handleClearCart={handleClearCart}>
                <Link className='proced-link' to="/Orders">
                    <button className='btn-proced'>Riview order
                    <FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Link>
            </Cart>

            </div>
            
        </div>
    );
};

export default Shop;