import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {StateContext ,getBasketTotal  } from './StateProvider';
import { useContext } from 'react';

function Subtotal() {
   const {basketProducts}=useContext(StateContext)
    return (
        <div>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basketProducts.length } items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basketProducts)}
                displayType={"text"}
                thousandSeparator={true}
            />
            <button className='subtotal__button' >Proceed to Checkout</button>
        </div>
    )
}
export default Subtotal;