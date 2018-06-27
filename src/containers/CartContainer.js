import { connect } from 'react-redux';

import Cart from '../components/Cart';

const mapStateToProps = (state) => {
  console.log(state);
  let count = 0;
  let subtotal = 0;
  const items = Object.values(state.cart);
  items.map((item) => {
    count += item.count;
    subtotal += item.price || 0; //<--- set item prices
  });
  return {
    count: count,
    subtotal: subtotal
  };
};

export default connect(
  mapStateToProps
)(Cart);