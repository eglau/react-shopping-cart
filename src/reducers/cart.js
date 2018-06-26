const cart = (state = {}, action) => {
  let s = Object.assign(state);
  switch(action.type) {
    case 'ADD_ITEM':
      if (!s[action.id]) {
        s[action.id] = {
          count: 0
        };
      }
      s[action.id].count += action.count;
      return s;
    case 'REMOVE_ITEM':
      delete s[action.id];
      return s;
    case 'UPDATE_ITEM':
      s[action.id].count = action.count;
      return s;
    default:
      return state;
  }
}

export default cart;