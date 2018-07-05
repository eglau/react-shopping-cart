import * as actions from './index';

describe('Adding Items', () => {
  it('should create ADD_ITEM action', () => {
    expect(actions.addItem(123, 1)).toEqual({
      type: 'ADD_ITEM',
      id: 123,
      count: 1
    });
  });
});

describe('Removing Items', () => {
  it('should create REMOVE_ITEM action', () => {
    expect(actions.removeItem(123)).toEqual({
      type: 'REMOVE_ITEM',
      id: 123
    });
  });
});

describe('Updating Items', () => {
  it('should create UPDATE_ITEM action when count > 0', () => {
    expect(actions.updateItem(123, 2)).toEqual({
      type: 'UPDATE_ITEM',
      id: 123,
      count: 2
    });
  });
  it('should create REMOVE_ITEM action when count == 0', () => {
    expect(actions.updateItem(123, 0)).toEqual({
      type: 'REMOVE_ITEM',
      id: 123
    });
  });
});
