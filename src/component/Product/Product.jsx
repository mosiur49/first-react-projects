
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,price,seller,rating,name}=props.product;
    return (
        <div className='product'>         
           <img src={img} alt="" />
          <div className='product-info'>
          <h3 className='product-name'>{name}</h3>
           <p>Price:${price}</p>
           <p>Manufacturer:{seller}</p>
           <p>Rating:{rating}stars</p>
           

          </div>
          
          <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;