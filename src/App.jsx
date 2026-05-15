import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './Components/Landing'
import { ProductDetails } from './Components/ProductDetails'
import { Header } from './Components/Header'
import { AddToCart } from './Components/AddToCart'
import { Support } from './Components/Supports'
import {Address}  from './Components/Address'
import { Shipping } from './Components/Shipping'
import { Payments } from './Components/Payments'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Add" element={<AddToCart />} />
        <Route path="/support" element={<Support />} />
          <Route path="/address" element={<Address />} />
           <Route path="/shipping" element={<Shipping />} />
            <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  )
}