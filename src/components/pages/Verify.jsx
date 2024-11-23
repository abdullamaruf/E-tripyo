import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import axios from 'axios'

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')
  // console.log(success,orderId)

  const { url } = useContext(ShopContext)

  const navigate = useNavigate()

  const verifyPayment = async () => {
    const response = await axios.post(url + '/api/order/verify', {
      success,
      orderId
    })
    if (response.data.success) {
      navigate('/myorders')
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [])

  return (
    <section>
      <div className='min-h-[60vh] grid'>
        <div className='animate-spin h-24 w-24 border-4 place-self-center border-t-secondary rounded-full '>
          
        </div>
      </div>
    </section>
  )
}

export default Verify
