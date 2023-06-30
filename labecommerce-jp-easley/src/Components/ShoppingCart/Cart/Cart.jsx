import React from 'react'
import Items from './Items'
import { CartContainer } from '../../../style'

const Cart = () => {
  return (
    <CartContainer>
    <h2>Cart</h2>
    <Items />
    </CartContainer>
  )
}

export default Cart