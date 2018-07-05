import { connect } from 'react-redux';

import CartItem from '../components/CartItem';
import { removeItem } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    name: props.item.name,
    count: props.item.count,
    total: (props.item.price * props.item.count).toFixed(2),
    price: props.item.price.toFixed(2)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(removeItem(props.item.id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);