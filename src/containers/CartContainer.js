import { connect } from 'react-redux';

import Cart from '../components/Cart';

const mapStateToProps = (state) => {
  const total = 0;
  const items = Object.values(state.cart);
  items.map((item) => {
    total += item.count;
  })
  return {
    total: total
  };
};

export default connect({
  mapStateToProps
})(Cart);