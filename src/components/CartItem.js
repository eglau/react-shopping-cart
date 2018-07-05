import React from 'react';
import PropTypes from 'prop-types';

const CartItem = (props) => {
  return (
    <tr>
      <td className="cart-item-name">{props.name}</td>
      <td className="cart-item-price">${props.price}</td>
      <td className="cart-item-count">
        <input type="number" value={props.count} onChange={props.onChange} />
      </td>
      <td className="cart-item-total">${props.total}</td>
      <td>
        <button onClick={props.onClick}>Delete</button>
      </td>
    </tr>
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