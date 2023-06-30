import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductProvider from "./hooks/UseProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
);
