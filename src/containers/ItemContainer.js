import { connect } from 'react-redux';

import { addItem } from '../actions';
import Item from '../components/Item';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(addItem(props.item, 1))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);