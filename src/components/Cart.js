import React from 'react';
import PropTypes from 'prop-types';

import './Cart.css';
import CartItemContainer from '../containers/CartItemContainer';

const Cart = (props) => {
  return (
    <div id="cart">
      <span id="count">{ props.count } Items in Cart</span>
      <span id="total">{ props.subtotal }</span>
      <ul>
        {
          props.cart.map((item) => {
            return (
              <li key={item.id}><CartItemContainer item={item}/></li>
            );
          })
        }
      </ul>
    </div>
  )
};

Cart.propTypes = {
  count: PropTypes.number.isRequired,
  subtotal: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object)
};

export default Cart;