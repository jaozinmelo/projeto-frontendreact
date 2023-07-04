import { createContext, useEffect, useState } from "react";
import dbProducts from "../Produtos/dbProducts";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [buscaName, setBuscaName] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState("");
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("cart");
    const totalSalvo = localStorage.getItem("total");
    if (carrinhoSalvo) {
      setCart(JSON.parse(carrinhoSalvo));
    }

    if (totalSalvo) {
      setTotal(parseFloat(totalSalvo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("total", total.toString());
  }, [total]);

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
        setOrder,
        cart,
        setCart,
        total,
        setTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
