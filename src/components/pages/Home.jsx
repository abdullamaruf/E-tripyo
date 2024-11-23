import React, { useState } from 'react'
import Hero from '../Hero'
import Feature from '../Feature'
import Categories from '../Categories'
import ProductDisplay from '../ProductDisplay'
import Offers from '../Offers'





const Home = () => {

  const [category, setCategory] = useState('All')

  return (
    <>

    <Hero/>
    <Feature/>
    <Categories category={category} setCategory={setCategory}/>
    <ProductDisplay category={category}/>
    <Offers/>
   
     
    </>
  )
}

export default Home
