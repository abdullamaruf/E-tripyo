import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductHd from '../ProductHd';
import ProductMd from '../ProductMd';
import ProductDescripton from '../ProductDescripton';

const Product = () => {

  const {all_products} = useContext(ShopContext);
  const {productId} = useParams()

  // console.log("productId:",productId)

  const product  = all_products.find((e)=>e._id===productId);
  if(!product){
    return <div className='h1 pt-28'>Product not found</div>
  }


  return (
    <section className='max-padd-container py-20'>
      <div>
        <ProductHd product={product}/>
        <ProductMd product={product}/>
        <ProductDescripton/>
      </div>
    </section>
    
  )
}

export default Product
