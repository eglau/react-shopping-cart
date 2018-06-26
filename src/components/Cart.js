import React from 'react';

import './Cart.css';

const Cart = (props) => {
  return (
    <div id="cart">
      <span id="total">{ props.total }</span>
    </div>
  )
};

export default Cart;