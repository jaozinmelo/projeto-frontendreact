import { createContext, useEffect, useState } from "react";
import dbProducts from "../Produtos/dbProducts";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [buscaName, setBuscaName] = useState("");
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("");

  //Funções

  const searchFilterName = (product) => {
    return product.name.toLowerCase().includes(buscaName.toLowerCase());
  };

  const filterMinPrice = (product) => {
    if (valorMin === "") {
      return product;
    } else {
      return (
        product.price >=
        valorMin.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
  };

  const filterMaxPrice = (product) => {
    if (valorMax === "") {
      return product;
    } else {
      return (
        product.price <=
        valorMax.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      );
    }
  };

  useEffect(() => {
    setProducts(dbProducts);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        valorMin,
        setValorMin,
        valorMax,
        setValorMax,
        buscaName,
        setBuscaName,
        products,
        filterMinPrice,
        filterMaxPrice,
        searchFilterName,
        order,
        setOrder
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
