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
  const { products } = useContext(ProductContext);
  return (
    <ProductCardDiv>
      <DivFilterCresc>
        <select
          // className=" border bg-slate-800 text-blue-100 mr-4 rounded"
          onChange={(e) => (e.currentTarget.value)}
        >
          Categoria
          <option value="">Crescente</option>
          <option value="">Decrescente</option>
        </select>
      </DivFilterCresc>
      {products.map((item) => (
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
                <SpanStyled>{item.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })}</SpanStyled>
              </p>
              <button>Add to carrinho</button>
            </DivTwo>
          </DivOne>
        </Card>
      ))}
    </ProductCardDiv>
  );
};

export default ProductCard;
