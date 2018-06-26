import React from 'react';

import Item from './Item';
import ItemContainer from '../containers/ItemContainer';
import Cart from './Cart';

const App = () => {
  return (
    <div>
      <div id="items">
        <ItemContainer name="test" price="0" id="123" />
        <Item name="test2" price="1.50" id="456" />
      </div>
      <Cart />
    </div>
  );
};

export default App;