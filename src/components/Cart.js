import React from 'react';

import './Cart.css';

const Cart = (props) => {
  return (
    <div id="cart">
      <span id="count">{ props.count } Items in Cart</span>
      <span id="total">{ props.subtotal }</span>
    </div>
  )
};

export default Cart;