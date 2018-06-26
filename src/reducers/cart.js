const cart = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      let s = Object.assign(state);
      if (!s[action.id]) {
        s[action.id] = {
          count: 0
        };
      }
      s[action.id].count += action.count;
      return s;
    case 'REMOVE_ITEM':
    case 'UPDATE_ITEM':
    default:
      return state;
  }
}

export default cart;