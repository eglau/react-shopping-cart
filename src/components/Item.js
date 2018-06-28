import React from 'react';

import './Item.css';

const Item = (props) => {
  const price = props.item.price.toFixed(2);
  return (
    <div className="item" data-item-id={ props.item.id }>
      <span className="name">{ props.item.name }</span>
      <span className="price">{ price }</span>
      <button onClick={ props.onClick }>Add to Cart</button>
    </div>
  );
};

export default Item;