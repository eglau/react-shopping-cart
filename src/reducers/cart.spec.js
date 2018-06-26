import cart from './cart';

describe('Cart reducer', () => {
  it('should handle initial state', () => {
    expect(cart(undefined, {})).toEqual({});
  });
  describe('should handle ADD_ITEM', () => {
    const payload = {
      type: 'ADD_ITEM',
      id: 123,
      count: 1
    };
    it('when no items are in the cart', () => {
      expect(cart({}, payload)).toEqual({
        '123': { count: 1 }
      });
    });
    it('when other items are in the cart', () => {
      expect(cart({'456': { count: 2 }}, payload)).toEqual({
        '456': { count: 2 },
        '123': { count: 1 }
      });
    });
  });
  it('should handle REMOVE_ITEM', () => {
    const payload = {
      type: 'REMOVE_ITEM',
      id: 123
    };
    expect(cart({'123': { count: 2 }}, payload)).toEqual({});
    expect(cart({'123': { count: 2 }, '456': { count: 1 }}, payload)).toEqual({'456': { count: 1 }});
  });
  it('should handle UPDATE_ITEM', () => {
    const payload = {
      type: 'UPDATE_ITEM',
      id: 123,
      count: 2
    }
    expect(cart({'123': { count: 1 }}, payload)).toEqual({'123': { count: 2 }});
    expect(cart({'123': { count: 3 }, '456': { count: 2 }}, payload)).toEqual({'123': { count: 2 }, '456': { count: 2 }});
  });
});