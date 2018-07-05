import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = (props) => {
  return (
    <div className="item">
      <span className="name">{ props.name }</span>
      <span className="price">{ props.price }</span>
      <button onClick={ props.onClick }>Add to Cart</button>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Item;