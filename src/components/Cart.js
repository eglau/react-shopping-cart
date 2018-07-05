import React from 'react';
import PropTypes from 'prop-types';

import './Cart.css';
import CartItemContainer from '../containers/CartItemContainer';

const Cart = (props) => {
  return (
    <div id="cart">
      <span id="count">Items in Cart: { props.count }</span>
      <span id="total">Total Price: ${ props.subtotal }</span>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {
            props.cart.map((item) => {
              return (
                <CartItemContainer key={item.id} item={item}/>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
};

Cart.propTypes = {
  count: PropTypes.number.isRequired,
  subtotal: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object)
};

export default Cart;