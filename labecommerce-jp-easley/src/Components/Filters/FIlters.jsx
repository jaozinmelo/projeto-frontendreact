import React, { useContext } from "react";
import { DivInputs, FilterContainer } from "../../style";
import { ProductContext } from "../../hooks/UseProductContext";

const FIlters = () => {
  const {
    valorMin,
    setValorMin,
    valorMax,
    setValorMax,
    buscaName,
    setBuscaName,
  } = useContext(ProductContext);

  return (
    <FilterContainer>
      <h2>Filters</h2>
      <DivInputs>
        <label for="valorMax">Valor máximo:</label>
        <input
          id="valorMax"
          type="number"
          value={valorMax}
          onChange={(e) => setValorMax(e.currentTarget.value)}
        />
        <label for="valorMin">Valor minimo:</label>
        <input
          id="valorMin"
          type="number"
          value={valorMin}
          onChange={(e) => setValorMin(e.currentTarget.value)}
        />
      </DivInputs>

      <label for="buscaName">Busca por nome:</label>
      <input
        id="buscaName"
        type="text"
        value={buscaName}
        onChange={(e) => setBuscaName(e.currentTarget.value)}
      />
    </FilterContainer>
  );
};

export default FIlters;
