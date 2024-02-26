
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  
    const {img,price,seller,rating,name}=props.product;
    
    const handleAddToCart=props.handleAddToCart;

   

    
    return (
        <div className='product'>         
           <img src={img} alt="" />
          <div className='product-info'>
          <h3 className='product-name'>{name}</h3>
           <p>Price:${price}</p>
           <p>Manufacturer:{seller}</p>
           <p>Rating:{rating}stars</p>
           

          </div>
          
          <button onClick={()=>handleAddToCart(props.product)}
           className='btn-cart'>Add to cart<FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;