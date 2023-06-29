import React from 'react';
import Home from './Components/ProductList/Home/Home';
import FIlters from './Components/Filters/FIlters';
import Cart from './Components/ShoppingCart/Cart/Cart';
function App() {

  return (
    <>
      <FIlters/>
      <Home />
      <Cart />
    </>
  );
}

export default App;
