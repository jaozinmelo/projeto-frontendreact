import { createContext, useEffect, useState } from "react";
import dbProducts from "../Produtos/dbProducts"

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [valorMin, setValorMin] = useState('')
    const [valorMax, setValorMax] = useState('')
    const [buscaName, setBuscaName] = useState('')
    const [products, setProducts] =useState([])

    useEffect(() => {
        setProducts(dbProducts);
      }, []);

    return (
        <ProductContext.Provider value={{valorMin,setValorMin,valorMax,setValorMax,buscaName,setBuscaName, products}}>
            {children}
        </ProductContext.Provider>
    )
};

export default ProductProvider
