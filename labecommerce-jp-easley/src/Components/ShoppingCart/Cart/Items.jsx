import React, { useContext } from "react";
import { ProductContext } from "../../../hooks/UseProductContext";

const Items = () => {
  const { cart, setCart, total, setTotal } = useContext(ProductContext);

  const removeToCart = (product) => {
    //aqui eu procuro o index do produto
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      const indexItemRemoved = cart[index];

      if (indexItemRemoved.quantidade > 1) {
        const novoCarrinho = [...cart];
        novoCarrinho[index] = {
          ...indexItemRemoved,
          quantidade: indexItemRemoved.quantidade - 1,
        };

        setCart(novoCarrinho);
      } else {
        const novoCarrinho = cart.filter((item) => item.id !== product.id)
        setCart(novoCarrinho)
      } 
      
      //calcular novo total do carrinho
      setTotal(total - product.price)
    }
  };

  return (
    <>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <div>
              {item.quantidade}-{item.name.toUpperCase()} :
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
            <button onClick={() => removeToCart(item, index)}>remover</button>
          </div>
        ))}
      </div>
      <div>
        VALOR TOTAL:
        {total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </>
  );
};

export default Items;
