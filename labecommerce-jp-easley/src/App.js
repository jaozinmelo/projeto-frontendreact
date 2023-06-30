import React from "react";
import Home from "./Components/ProductList/Home/Home";
import FIlters from "./Components/Filters/FIlters";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { AppContainer } from "./style";
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <div>
      <GlobalStyle />
      <AppContainer>
        <FIlters />
        <Home />
        <Cart />
      </AppContainer>
    </div>
  );
}

export default App;
