import React from 'react'
import deal1 from '../Components/Images/furniture10.png'
import deal2 from '../Components/Images/furniture11.png'
import deal3 from '../Components/Images/furniture12.png'
import deal4 from '../Components/Images/furniture13.png'
import deal5 from '../Components/Images/furniture14.png'
import deal6 from '../Components/Images/furniture15.png'

const deals = [
  {
    id: 1,
    image: deal1,
    name: "ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse",
    price: "$119.00",
    discount: "-42% off"
  },
  {
    id: 2,
    image: deal2,
    name: "Zebronics Zeb-Transformer-K USB Gaming Keyboard | RGB LED Lighting",
    price: "$99.00",
    discount: "-56% off"
  },
  {
    id: 3,
    image: deal3,
    name: "TP-LINK Freeend USB Hub, 4USB 2.0Port Charging Hub",
    price: "$19.00",
    discount: "-78% off"
  },
  {
    id: 4,
    image: deal4,
    name: "Scotch's Moguls Post Premium Extended for Wall from room Office Gaming",
    price: "$159.00",
    discount: "-25% off"
  },
  {
    id: 5,
    image: deal5,
    name: "HyperX Streamer Starter Pack (HMHS1-3021), Black",
    price: "$119.65",
    discount: "-50% off"
  }
];

export const Feature = () => {
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
          Deals on Furniture
        </h2>

        {/* Decorative line */}
        <div className="w-full h-[2px] rounded-sm" style={{ backgroundColor: '#FFAE5D' }} />
      </div>

      {/* Products Grid */}
      {/* ✅ FIX 2: 2 cols on mobile, original 5 cols on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            {/* Product Image */}
            <div className="w-full aspect-square flex items-center justify-center p-4">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="p-3">
              {/* Product Name */}
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#000000',
                  marginBottom: '8px',
                  lineHeight: '1.4',
                  height: '40px',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {deal.name}
              </p>

              {/* Price and Discount */}
              {/* ✅ FIX 3: gap-12 was pushing discount off-screen on mobile */}
              <div className="flex items-center gap-2 md:gap-12 flex-wrap">
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#FF3232'
                  }}
                >
                  {deal.price}
                </span>
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#FF3232'
                  }}
                >
                  {deal.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}