import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { HomeContainer } from '../../../style'

const Home = () => {
  return (
    <HomeContainer>
    <h1>PRODUTOS ACHADOS NO LIXO DA NASA</h1>
    <ProductCard />
    </HomeContainer>
  )
}

export default Home
