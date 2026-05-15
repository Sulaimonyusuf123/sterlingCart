import React from 'react'
import product1 from '../Components/Images/product1.png'
import product2 from '../Components/Images/product2.png'
import product3 from '../Components/Images/product3.png'
import product4 from '../Components/Images/product4.png'
import product5 from '../Components/Images/product5.png'
import product6 from '../Components/Images/product6.png'
import furniture from '../Components/Images/furniture1.png'
import furnitureText from '../Components/Images/furniture.png'

const searchedProducts = [
  { id: 1, img: product1 },
  { id: 2, img: product2 },
  { id: 3, img: product3 },
  { id: 4, img: product4 },
  { id: 5, img: product5 },
  { id: 6, img: product6 },
]

export const Product = () => {
  return (
    // ✅ FIX 1: px-4 on mobile, original px-[100px] on desktop
    <div className="w-full px-4 md:px-[100px] py-8">

      {/* Section Header */}
      <div className="mb-4">
        <h2
          className="mb-[10px]"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '24px',
            color: '#000000',
          }}
        >
          Your searched items
        </h2>

        {/* Decorative line */}
        <div className="w-full h-[2px] rounded-sm" style={{ backgroundColor: '#FFAE5D' }} />
      </div>

      {/* Product Grid */}
      {/* ✅ FIX 2: 3 cols on mobile, original 6 cols on desktop */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
        {searchedProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-[10px] flex items-center justify-center p-3 cursor-pointer transition-all duration-200 aspect-square hover:shadow-[0_4px_16px_rgba(255,174,93,0.25)] hover:-translate-y-1"
          >
            <img
              src={product.img}
              alt={`Product ${product.id}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Furniture Banner */}
      <div className="relative w-full rounded-[14px] overflow-hidden cursor-pointer">

        {/* Background image */}
        {/* ✅ FIX 3: shorter banner on mobile */}
        <img
          src={furniture}
          alt="Furniture Banner"
          className="w-full h-[320px] md:h-[600px] block object-cover"
        />

        {/* Overlay — centered */}
        {/* ✅ FIX 4: less vertical nudge on mobile */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-16 md:-translate-y-32">

          {/* Special offer on */}
          {/* ✅ FIX 5: no left margin on mobile, original margin on desktop */}
          <p
            className="ml-0 md:ml-[280px] leading-none"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              color: '#A29781',
            }}
          >
            Special offer on
          </p>

          {/* Furniture script image */}
          {/* ✅ FIX 6: smaller image on mobile */}
          <img
            src={furnitureText}
            alt="Furniture"
            className="w-[220px] md:w-[460px] object-contain  md:-mt-6 mt-0"
          />

          {/* Check it out */}
          <p
            className="m-0 tracking-wide"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: '#606060',
            }}
          >
            Check it out &gt;&gt;&gt;
          </p>

        </div>
      </div>

    </div>
  )
}