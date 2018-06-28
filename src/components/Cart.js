import React from 'react';

import './Cart.css';

const Cart = (props) => {
  return (
    <div id="cart">
      <span id="count">{ props.count } Items in Cart</span>
      <span id="total">{ props.subtotal }</span>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
        {
          props.cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.count}</td>
                <td>${(item.price * item.count).toFixed(2)}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  )
};

export default Cart;