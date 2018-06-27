import React from 'react';

import ItemContainer from '../containers/ItemContainer';
import CartContainer from '../containers/CartContainer';

const App = () => {
  return (
    <div>
      <div id="items">
        <ItemContainer name="test" price="2" id="123" />
      </div>
      <CartContainer />
    </div>
  );
};

export default App;