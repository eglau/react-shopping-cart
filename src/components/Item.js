import React from 'react';

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

export default Item;