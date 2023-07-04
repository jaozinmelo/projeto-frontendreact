import React from "react";
import Home from "./Components/ProductList/Home/Home";
import FIlters from "./Components/Filters/FIlters";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import { AppContainer } from "./style";
import GlobalStyle from "./globalStyles";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <FIlters />
        <Home />
        <Cart />
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;
