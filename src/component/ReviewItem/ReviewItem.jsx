import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({product,handeRemoveCart}) => {
    const {img,price,quantity,name,id}=product
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-detail'>
            <p className='review-title'>{name}</p>
            <p>Price: <span className='orange-text'>${price}</span></p>
            <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            

           </div>
           <button onClick={()=> handeRemoveCart (id)} className='btn-delete'>
           <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default ReviewItem;