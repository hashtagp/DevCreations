import React, { useContext } from 'react';
import './Item.css';
import { StoreContext } from '../context/StoreContext';
import add_icon_white from "../assets/add_icon_white.png";
import add_icon_green from "../assets/add_icon_green.png";
import remove_icon_red from "../assets/remove_icon_red.png";

const Item = ({ id, name, price, image }) => {

  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);


  return (
    <div className='product-item'>
      <div className="product">
        <img className='product-item-image' src={image} alt='' />
        {
          !cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={add_icon_white} alt=""/>
          :<div className='product-item-Count'>
            <img className="add1" onClick={()=>removeFromCart(id)} src={remove_icon_red} alt=''/>
            <p>{cartItems[id]}</p>
            <img className="add2" onClick={()=>addToCart(id)} src={add_icon_green} alt=''/>
          </div>
        }
      </div>
      <div className="product-item-info">
        <div className="product">
          <p>{name}</p>
        </div>
        <a className='product-item-price'>&#8377;{price}</a>
      </div>
    </div>
  );
}

export default Item;
