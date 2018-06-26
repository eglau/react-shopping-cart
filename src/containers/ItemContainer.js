import { connect } from 'react-redux';

import { addItem } from '../actions';
import Item from '../components/Item';

const mapStateToProps = (state, props) => {
  return {
    total: total
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(addItem(props.id, 1))
    }
  }
};

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(Item);