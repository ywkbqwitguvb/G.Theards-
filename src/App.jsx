import React from 'react'
import { Router, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Card from './pages/Card'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'

const App = () => {
  return (
    <div className='px-4 sm:px[5vm] md:px-[7vw] lg:px-[9vw]'>

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/cart" element={<Card/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/place-order" element={<PlaceOrder/>} />
          <Route path="/order" element={<Order/>} />

      </Routes>
      
    </div>
  )
}

export default App

