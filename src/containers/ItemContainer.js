import { connect } from 'react-redux';

import { addItem } from '../actions';
import Item from '../components/Item';

const mapStateToProps = (state, props) => {
  return {
    id: props.item.id,
    name: props.item.name,
    price: props.item.price.toFixed(2)
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(addItem(props.item.id, 1))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);