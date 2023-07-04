import React, { useContext } from "react";
import { ProductContext } from "../../../hooks/UseProductContext";
import {
  Card,
  DivFilterCresc,
  DivOne,
  DivTwo,
  H5,
  ImgDiv,
  ProductCardDiv,
  Select,
  SpanStyled,
} from "../../../style";

const ProductCard = () => {
  const {
    products,
    filterMinPrice,
    searchFilterName,
    filterMaxPrice,
    setOrder,
    order,
    cart,
    setCart,
    total,
    setTotal,
  } = useContext(ProductContext);

  const addToCart = (products, index) => {
    const produtoExistente = cart.find((item) => item.id === products.id);

    if (produtoExistente) {
      const novoCarrinho = cart.map((item) => {
        if (item.id === produtoExistente.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }
        return item;
      });

      setCart(novoCarrinho);
    } else {
      setCart([...cart, { ...products, quantidade: 1 }]);
    }

    setTotal(total + products.price);
  };
  return (
    <ProductCardDiv>
      <DivFilterCresc>
        <Select onChange={(e) => setOrder(e.currentTarget.value)} value={order}>
          Categoria
          <option disabled value="">
            Exibir por ordem
          </option>
          <option value="populares">Populares</option>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </Select>
      </DivFilterCresc>
      {products
        .filter(searchFilterName)
        .filter(filterMinPrice)
        .filter(filterMaxPrice)
        .sort((a, b) => {
          if (order === "crescente") {
            return a.price - b.price;
          } else if (order === "decrescente") {
            return b.price - a.price;
          } else if (order === "populares") {
            return products;
          }
        })
        .map((item) => (
          <Card key={item.id}>
            <ImgDiv>
              <img
                src={item.image}
                alt="Imagem do produto"
                className="product-image"
              />
            </ImgDiv>
            <DivOne>
              <div>
                <H5>{item.name}</H5>
              </div>
              <DivTwo>
                <p>
                  <SpanStyled>
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </SpanStyled>
                </p>
                <button onClick={() => addToCart(item)}>Adicionar ao carrinho</button>
              </DivTwo>
            </DivOne>
          </Card>
        ))}
    </ProductCardDiv>
  );
};

export default ProductCard;
