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
  } = useContext(ProductContext);

  return (
    <ProductCardDiv>
      <DivFilterCresc>
        <select
          // className=" border bg-slate-800 text-blue-100 mr-4 rounded"
          onChange={(e) => setOrder(e.currentTarget.value)}
          value={order}
        >
          Categoria
          <option disabled value="">
            Exibir por ordem
          </option>
          <option value="populares">Populares</option>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </select>
      </DivFilterCresc>
      {products
        .filter(searchFilterName)
        .filter(filterMinPrice)
        .filter(filterMaxPrice)
        .sort((a, b) => {
          if (order === "crescente") {
           return a.price - b.price;
          }else if(order === "decrescente"){
            return b.price - a.price;
          }else if(order === "populares"){
            return products
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
                <button>Add to cart</button>
              </DivTwo>
            </DivOne>
          </Card>
        ))}
    </ProductCardDiv>
  );
};

export default ProductCard;
