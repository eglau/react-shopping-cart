import React from 'react';

import ItemContainer from '../containers/ItemContainer';
import CartContainer from '../containers/CartContainer';

const ITEMS = require('../items.json');

const App = () => {
  return (
    <div>
      <div id="items">
        {
          Object.values(ITEMS).map((item) => {
            return <ItemContainer key={item.id} item={item}/>
          })
        }
      </div>
      <CartContainer />
    </div>
  );
};

export default App;