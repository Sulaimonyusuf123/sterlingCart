import React from 'react'
import download1 from '../Components/Images/download1.png'
import download2 from '../Components/Images/download2.png'

const purchases = [
  {
    id: 1,
    img: download1,
    title: '2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)',
    subtitle: 'you bought it at the best price',
    price: '$1,000.00',
    rating: 0,
  },
  {
    id: 2,
    img: download2,
    title: 'iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)',
    subtitle: 'you bought it at the best price',
    price: '$290.00',
    rating: 0,
  },
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={star <= rating ? '#FFAE5D' : 'none'}
          stroke="#FFAE5D"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '13px',
          color: '#999',
        }}
      >
        {rating} rating
      </span>
    </div>
  )
}

export const Download = () => {
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
          Review your purchase
        </h2>

        {/* Decorative line */}
        <div className="w-full h-[2px] rounded-sm" style={{ backgroundColor: '#FFAE5D' }} />
      </div>

      {/* Cards */}
      {/* ✅ FIX 2: stack cards vertically on mobile, side-by-side on desktop */}
      <div className="flex flex-col md:flex-row gap-5">
        {purchases.map((item) => (
          <div
            key={item.id}
            // ✅ FIX 3: stack image + info vertically on mobile, row on desktop
            className="flex-1 flex flex-col md:flex-row items-center gap-5 md:gap-8 rounded-[12px] p-5 md:p-8"
            style={{ border: '1px solid #81818180' }}
          >
            {/* Product Image */}
            {/* ✅ FIX 4: smaller fixed image on mobile */}
            <div className="flex-shrink-0 w-[140px] h-[140px] md:w-[200px] md:h-[200px] flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Info */}
            {/* ✅ FIX 5: center-align text on mobile, left-align on desktop */}
            <div className="flex flex-col gap-3 flex-1 items-center md:items-start text-center md:text-left">
              <p
                className="m-0"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#000000',
                  lineHeight: '1.6',
                }}
              >
                {item.title}
              </p>

              <p
                className="m-0"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#606060',
                }}
              >
                {item.subtitle}
              </p>

              <p
                className="m-0"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#000000',
                }}
              >
                {item.price}
              </p>

              <StarRating rating={item.rating} />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}