import React from 'react';
import PropTypes from 'prop-types';

const CartItem = (props) => {
  return (
    <div>
      <span className="cart-item-name">{props.name}</span>
      <span className="cart-item-price">${props.price}</span>
      <span className="cart-item-count">{props.count}</span>
      <span className="cart-item-total">${props.total}</span>
      <span>
        <button onClick={props.onClick}>Delete</button>
      </span>
    </div>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CartItem;