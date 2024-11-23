import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import Order from './components/pages/Order'
import Verify from './components/pages/Verify'
import MyOrders from './components/pages/MyOrders'
import Footer from './components/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup'

export default function App () {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <BrowserRouter>

    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> :<></>}

      <Header setShowLogin={setShowLogin}/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
