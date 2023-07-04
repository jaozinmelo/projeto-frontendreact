import React, { useContext } from 'react'
import Items from './Items'
import { CartContainer } from '../../../style'
import { ProductContext } from '../../../hooks/UseProductContext'

const Cart = () => {
  const {} = useContext(ProductContext)
  return (
    <CartContainer>
    <h2>Carrinho de Compras</h2>
    <Items />
    </CartContainer>
  )
}

export default Cart