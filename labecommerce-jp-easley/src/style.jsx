import styled from "styled-components";

//App
export const AppContainer = styled.div`
  display: flex;
`;

//Filter
export const FilterContainer = styled.div`
  background: linear-gradient(to bottom, #41658d,#161945);
  font-size: 1.50rem;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 15vw;
  border: 1px solid;
  padding-left: 1rem;
  input {
    width: 14rem;
  }
`;
export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 7rem;
  }
`;
//Home
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top, #41658d, #161945);
  width: 70vw;
  color: whitesmoke;
  padding: 1rem 1rem;
`;
//Cart
export const CartContainer = styled.div`
  background: linear-gradient(to bottom, #41658d, #161945);
  display: flex;
  flex-direction: column;
  width: 15vw;
  border: 1px solid;
  padding-left: 1rem;
  font-size: 1.25rem;
  color: whitesmoke;
`;
//Card
export const ProductCardDiv = styled.div`
  background: linear-gradient(to bottom, #41556c, #2f2f57, #2f3041, #161945  );
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border: 1px solid;
  border-radius: 0.5rem;
  height: 24rem;
  max-width: 18rem;
  width: 100%;
  margin: 2.5rem;
  overflow: hidden;
  position: relative;

  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 0.01rem solid black;
  img {
    display: flex;
    height: 10.5rem;
    padding: 2rem 0;
  }
`;

export const DivOne = styled.div`
  margin-top: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;
`;

export const H5 = styled.h5`
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 600rem;
  letter-spacing: -0.025em;

  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
`;

export const DivTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: white;
    display: flex;
    align-items: center;
    width: 7rem;
    border-radius: 0.375rem;
    padding: 0.6rem 1rem;
    margin-left: 1rem;
    text-align: center;
    font-size: 0.850rem;
    line-height: 0.900rem;
    font-weight: 600;
    cursor: pointer;
    background-color: #41658d;
  }
`;

export const SpanStyled = styled.span`
  font-size: 1.530rem;
  line-height: 2.00rem;
  font-weight: 800;

  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
`;

export const DivFilterCresc = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin-right: 4rem;
`;
export const Select = styled.select`
  border-radius: 0.08rem;
`;
