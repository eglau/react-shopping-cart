import { connect } from 'react-redux';

import Cart from '../components/Cart';

const ITEMS = require('../items.json');

const mapStateToProps = (state) => {
  let totalCount = 0;
  let totalPrice = 0;
  const itemIDs = Object.keys(state.cart);
  itemIDs.map((itemID) => {
    const count = state.cart[itemID].count;
    totalCount += count
    totalPrice += ITEMS[itemID].price * count;
  });

  const cart = itemIDs.map((id) => {
    let item = ITEMS[id];
    item.count = state.cart[id].count;
    item.onClick = () => {
      dispatch(removeItem(item.id));
    };
    return item;
  });
  return {
    count: totalCount,
    subtotal: totalPrice.toFixed(2),
    cart: cart
  };
};

export default connect(
  mapStateToProps
)(Cart);