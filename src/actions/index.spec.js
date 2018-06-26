import actions from './index';

const item = {
  id: 123
};

describe('Adding Items', () => {
  it('should create ADD_ITEM action', () => {
    expect(actions.addItem(item, 1)).toEqual({
      type: 'ADD_ITEM',
      id: 123,
      count: 1
    });
  });
});

describe('Removing Items', () => {
  it('should create REMOVE_ITEM action', () => {
    expect(actions.removeItem(item)).toEqual({
      type: 'REMOVE_ITEM',
      id: 123
    });
  });
});

describe('Updating Items', () => {
  it('should create UPDATE_ITEM action', () => {
    expect(actions.updateItem(item, 2)).toEqual({
      type: 'UPDATE_ITEM',
      id: 123,
      count: 2
    });
  });
});
