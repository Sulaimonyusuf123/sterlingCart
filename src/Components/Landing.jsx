import React from 'react'

import { Hero } from './Hero'
import { TodaysHotDeals } from './About'
import { Product } from './Product'
import { Feature } from './Feature'
import { Download } from './Download'
import { Footer } from './Footer'



export const Landing = () => {
  return (
    <div>
      <Hero/>
      <TodaysHotDeals/>
      <Product/>
      <Feature/>
      <Download/>
      <Footer/>
    </div>
  )
}
