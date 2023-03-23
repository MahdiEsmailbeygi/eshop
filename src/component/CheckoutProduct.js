import React, { useContext } from 'react';
import './CheckoutProduct.css';
import {StateContext} from './StateProvider';


function CheckoutProduct({ id, title, price, rating, image }) {
    const {removeFromBasket}=useContext(StateContext);
    return (
        <div className="checkoutProduct">
            <img src={image}  alt="CheckoutProduct" className="checkoutProduct__image " />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating ">
                {Array(rating)
                  .fill()
                  .map((_, i) => (<div key={i}><p>⭐️</p></div>))}
                </div>
                <button onClick={()=>removeFromBasket(id) } >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct