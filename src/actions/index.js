const addItem = (item, count) => {
  return {
    type: 'ADD_ITEM',
    id: item.id,
    count: count
  }
}

const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    id: item.id
  }
}

const updateItem = (item, count) => {
  if (count > 0) {
    return {
      type: 'UPDATE_ITEM',
      id: item.id,
      count: count
    }
  } else {

  }
}

export default {
  addItem,
  removeItem,
  updateItem
}