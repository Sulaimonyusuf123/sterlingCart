import React from 'react'
import hero1 from '../Components/Images/hero1.png'
import hero2 from '../Components/Images/hero2.png'
import hero3 from '../Components/Images/hero3.png'
import hero4 from '../Components/Images/hero4.png'
import hero5 from '../Components/Images/hero5.png'
import hero6 from '../Components/Images/hero6.png'

const products = [
  { id: 1, image: hero1, name: 'Inalsa Air Fryer Fry-Light-1400W', price: '$27.00', discount: '-40% off' },
  { id: 2, image: hero2, name: 'Oneplus Bullets Z2 Bluetooth Wireless', price: '$69.00', discount: '-26% off' },
  { id: 3, image: hero3, name: 'New Fastrack Reflex Play| AMOLED Display', price: '$99.00', discount: '-23% off' },
  { id: 4, image: hero4, name: 'Apple iPhone 13 (128GB) - Green', price: '$260.00', discount: '-16% off' },
  { id: 5, image: hero5, name: 'Samsung Galaxy Tab S8+ - Wifi Only, Graphite', price: '$78.00', discount: '-13% off' },
  { id: 6, image: hero6, name: 'Kodak Mini Shot 3 Retro - Yellow, Bluetooth', price: '$78.00', discount: '-13% off' },
]

export const Hero = () => {
  return (
    <section className="w-full font-[Poppins]">

      {/* Desktop layout */}
      <div className="hidden md:flex flex-row items-start px-[100px] py-10 gap-10">

        {/* Left: Headline */}
        <div className="flex-1 flex items-center justify-center min-h-[320px] mt-24">
          <h1
            className="text-[80px] leading-tight"
            style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 300 }}
          >
            We picked some{' '}
            <span style={{ color: '#FFAE5D' }}>cool</span>{' '}
            <span style={{ color: '#FFAE5D' }}>things</span>{' '}
            for you!
            <span style={{ color: '#000000' }}>*</span>
          </h1>
        </div>

        {/* Right: Hot Deals */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 600, fontSize: '24px' }}>
              hot deals for you
            </h2>
            <div style={{ width: '580px', height: '2px', backgroundColor: '#FFAE5D' }} />
          </div>
          <div className="grid grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col gap-1 cursor-pointer hover:opacity-90 transition-opacity">
                <div className="w-full aspect-square rounded-md overflow-hidden flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="object-contain w-full h-full p-2" />
                </div>
                <p className="text-xs leading-snug" style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 400 }}>
                  {product.name}
                </p>
                <div className="flex items-center gap-10">
                  <span className="text-sm font-semibold" style={{ color: '#000000', fontFamily: 'Poppins' }}>
                    {product.price}
                  </span>
                  <span className="text-xs font-medium" style={{ color: '#FF3232', fontFamily: 'Poppins' }}>
                    {product.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden flex-col px-4 py-6 gap-6">

        {/* Headline */}
        <h1
          className="text-[36px] leading-tight text-center"
          style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 300 }}
        >
          We picked some{' '}
          <span style={{ color: '#FFAE5D' }}>cool things</span>{' '}
          for you!
          <span style={{ color: '#000000' }}>*</span>
        </h1>

        {/* Hot Deals */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px' }}>
              hot deals for you
            </h2>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#FFAE5D' }} />
          </div>

          {/* 2-column grid on mobile */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col gap-1 cursor-pointer hover:opacity-90 transition-opacity">
                <div className="w-full aspect-square rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
                  <img src={product.image} alt={product.name} className="object-contain w-full h-full p-2" />
                </div>
                <p className="text-xs leading-snug" style={{ color: '#000000', fontFamily: 'Poppins', fontWeight: 400 }}>
                  {product.name}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold" style={{ color: '#000000', fontFamily: 'Poppins' }}>
                    {product.price}
                  </span>
                  <span className="text-xs font-medium ml-8" style={{ color: '#FF3232', fontFamily: 'Poppins' }}>
                    {product.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}