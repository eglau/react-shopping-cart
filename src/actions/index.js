export const addItem = (item, count) => {
  return {
    type: 'ADD_ITEM',
    id: item.id,
    count: count
  };
};

export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    id: item.id
  };
};

export const updateItem = (item, count) => {
  if (count > 0) {
    return {
      type: 'UPDATE_ITEM',
      id: item.id,
      count: count
    };
  }
  // Remove item if count == 0
  return removeItem(item);
};