export const addItem = (id, count) => {
  return {
    type: 'ADD_ITEM',
    id: id,
    count: count
  };
};

export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    id: id
  };
};

export const updateItem = (id, count) => {
  if (count > 0) {
    return {
      type: 'UPDATE_ITEM',
      id: id,
      count: count
    };
  }
  // Remove item if count <= 0
  return removeItem(id);
};