import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iphone1 from '../Components/Images/iphone1.png'
import iphone2 from '../Components/Images/iphone2.png'
import iphone3 from '../Components/Images/iphone3.png'
import iphone4 from '../Components/Images/iphone4.png'
import visa from '../Components/Images/visa.png'
import mastercard from '../Components/Images/mastercard.png'
import amex from '../Components/Images/amex.png'
import details1 from '../Components/Images/hero4.png'
import details2 from '../Components/Images/hero5.png'
import details3 from '../Components/Images/deal5.png'
import details4 from '../Components/Images/hero6.png'
import { Footer } from './Footer'

const sizes = [6, 8, 10, 9, 10, 12, 14, 16, 18, 20, 22]
const thumbnails = [iphone1, iphone2, iphone3]

export const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(6)
  const [selectedThumb, setSelectedThumb] = useState(0)
  const [wishlist, setWishlist] = useState(false)

  return (
    <>
      <div className="w-full bg-white min-h-screen">
        {/* ✅ FIX 1: px-4 on mobile, original px-[100px] on desktop */}
        <div className="w-full px-4 md:px-[100px] py-8">

          {/* Breadcrumb */}
          {/* ✅ FIX 2: allow wrapping on mobile */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {[
              { label: 'Home', to: '/', active: false },
              { label: 'Gadgets', to: '#', active: false },
              { label: 'Iphone', to: '#', active: false },
              { label: 'Iphone 14', to: '#', active: true },
            ].map((crumb, i, arr) => (
              <React.Fragment key={crumb.label}>
                <Link
                  to={crumb.to}
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: crumb.active ? '#3C3C3C' : '#B2B2B2',
                    textDecoration: 'none',
                  }}
                >
                  {crumb.label}
                </Link>
                {i < arr.length - 1 && (
                  <span style={{ color: '#B2B2B2', fontFamily: 'Raleway, sans-serif', fontSize: '16px' }}>
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Main Content */}
          {/* ✅ FIX 3: stack vertically on mobile, 3-col row on desktop */}
          <div className="flex flex-col md:flex-row gap-6" style={{ alignItems: 'stretch' }}>

            {/* Column 1: Thumbnails */}
            {/* ✅ FIX 4: horizontal row on mobile, vertical column on desktop */}
            <div className="flex flex-row md:flex-col gap-2 md:w-[140px] w-full flex-shrink-0 order-2 md:order-1">
              {thumbnails.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedThumb(i)}
                  className="rounded-[10px] overflow-hidden cursor-pointer flex-1 md:flex-none"
                  style={{
                    height: '182px',
                    // ✅ FIX 5: on desktop restore original 180px height via md override below
                    border: selectedThumb === i ? '2px solid #3C3C3C' : '2px solid transparent',
                  }}
                >
                  <img src={img} alt={`iPhone view ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Column 2: Main Image */}
            {/* ✅ FIX 6: full width + shorter height on mobile, original fixed size on desktop */}
            <div
              className="rounded-[14px] overflow-hidden flex-shrink-0 w-full md:w-[450px] order-1 md:order-2"
              style={{ height: 'clamp(260px, 55vw, 560px)' }}
            >
              <img src={iphone4} alt="iPhone 14 Pro Main" className="w-full h-full object-cover" />
            </div>

            {/* Column 3: Product Info */}
            <div className="flex-1 flex flex-col justify-between gap-4 order-3">

              {/* Top block */}
              <div className="flex flex-col gap-2">

                {/* Title */}
                <h1 className="m-0" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '26px', color: '#3C3C3C', lineHeight: 1.2 }}>
                  Grey Acid Iphone 14 pro
                </h1>

                {/* Stars + Reviews */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((s) => (
                      <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#FFAE5D">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFAE5D" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '13px', color: '#3C3C3C' }}>4.5</span>
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '13px', color: '#B2B2B2' }}>(212 reviews)</span>
                </div>

                {/* Price + Wishlist */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 700, fontSize: '22px', color: '#3C3C3C' }}>$ 215.00</span>
                    <span style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 400, fontSize: '16px', color: '#B2B2B2', textDecoration: 'line-through' }}>$ 290.00</span>
                  </div>
                  <button
                    onClick={() => setWishlist(!wishlist)}
                    className="flex items-center gap-1 bg-transparent border-none cursor-pointer"
                    style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '12px', color: '#3C3C3C' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={wishlist ? '#ff4d4d' : 'none'} stroke={wishlist ? '#ff4d4d' : '#3C3C3C'} strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Add to Wish List
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px]" style={{ backgroundColor: '#E8E8E8' }} />

              {/* Color */}
              <div className="flex items-center justify-between" style={{ borderBottom: '1px solid #E8E8E8', paddingBottom: '8px' }}>
                <span style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '13px', color: '#3C3C3C' }}>
                  <strong>Color:</strong> Black
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3C3C3C" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '13px', color: '#3C3C3C' }}>
                    <strong>Size:</strong> {selectedSize}
                  </span>
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '12px', color: '#B2B2B2', textDecoration: 'underline', cursor: 'pointer' }}>
                    View size guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sizes.map((size, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSize(size)}
                      className="rounded-[6px] cursor-pointer transition-all duration-150"
                      style={{
                        width: '32px',
                        height: '32px',
                        fontFamily: 'Public Sans, sans-serif',
                        fontSize: '12px',
                        fontWeight: selectedSize === size ? 700 : 400,
                        backgroundColor: selectedSize === size ? '#3C3C3C' : '#F5F5F5',
                        color: selectedSize === size ? '#FFFFFF' : '#3C3C3C',
                        border: 'none',
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px]" style={{ backgroundColor: '#E8E8E8' }} />

              {/* Add to Cart + Find in store */}
              <div className="flex items-center gap-4">
                <Link
                  to="/Add"
                  className="flex items-center justify-center gap-2 rounded-[8px] px-6 py-2.5 flex-1"
                  style={{ backgroundColor: '#101010', textDecoration: 'none' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: '#FFFFFF' }}>
                    Add to Cart
                  </span>
                </Link>
                <button
                  className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
                  style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '13px', color: '#3C3C3C' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3C3C3C" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Find in store
                </button>
              </div>

              {/* Free express banner */}
              <div className="rounded-[8px] px-4 py-3" style={{ border: '1px solid #E8E8E8' }}>
                <p className="m-0" style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '12px', color: '#3C3C3C', lineHeight: 1.5 }}>
                  Enjoy <strong style={{ textDecoration: 'underline' }}>FREE express</strong> &amp; <strong style={{ textDecoration: 'underline' }}>Free Returns</strong> on orders over £35!
                </p>
                <p className="m-0" style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '12px', color: '#3C3C3C' }}>
                  Kindly place your order by 6pm on December 22nd for expedited processing
                </p>
              </div>

              {/* Payment method */}
              <div>
                <p className="m-0 mb-2" style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600, fontSize: '13px', color: '#3C3C3C' }}>
                  Payment method
                </p>
                <div className="flex items-center gap-2">
                  <div className="rounded-[6px] px-2 py-1.5 flex items-center justify-center" style={{ border: '1px solid #E8E8E8', height: '32px', minWidth: '52px' }}>
                    <img src={visa} alt="Visa" style={{ height: '18px', objectFit: 'contain' }} />
                  </div>
                  <div className="rounded-[6px] px-2 py-1.5 flex items-center justify-center" style={{ border: '1px solid #E8E8E8', height: '32px', minWidth: '52px' }}>
                    <img src={mastercard} alt="Mastercard" style={{ height: '18px', objectFit: 'contain' }} />
                  </div>
                  <div className="rounded-[6px] px-2 py-1.5 flex items-center justify-center" style={{ border: '1px solid #E8E8E8', height: '32px', minWidth: '52px' }}>
                    <img src={amex} alt="Amex" style={{ height: '18px', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontSize: '12px', color: '#B2B2B2', textDecoration: 'underline', cursor: 'pointer' }}>
                    Learn more
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Product Details + More Faves + Related Products */}
      {/* ✅ FIX 7: px-4 on mobile */}
      <div className="w-full px-4 md:px-[100px] py-8">

        {/* Product Details Tab */}
        <div className="mb-6" style={{ backgroundColor: '#cccccc29' }}>
          <div className="flex gap-6 border-b" style={{ borderColor: '#E8E8E8' }}>
            <div className="pb-3" style={{ borderBottom: '2px solid #3C3C3C' }}>
              <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500, fontSize: '24px', color: '#3C3C3C' }}>
                Product Details
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6" style={{ borderRadius: '10px', padding: '24px' }}>
          <p className="m-0 mb-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C', lineHeight: 1.7 }}>
            The iPhone 14 Pro is a premium flagship smartphone designed for users who want high performance, advanced photography capabilities, and a refined everyday experience. Built with a durable surgical-grade stainless steel frame and a textured matte glass back, the device delivers a luxurious feel while maintaining strong durability.
          </p>
          <p className="m-0 mb-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C', lineHeight: 1.7 }}>
            The phone features a stunning Super Retina XDR display with ProMotion technology, delivering ultra-smooth scrolling and responsive interactions with refresh rates up to 120Hz. Colors appear vibrant and sharp, making streaming, gaming, editing, and social media browsing more immersive.
          </p>
          <p className="m-0 mb-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C', lineHeight: 1.7 }}>
            Powered by Apple's A16 Bionic chip, the iPhone 14 Pro provides exceptional performance for multitasking, gaming, video editing, and demanding applications. Apps launch quickly, animations remain fluid, and battery optimization ensures efficient power management throughout the day.
          </p>
          <p className="m-0 mb-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C', lineHeight: 1.7 }}>
            Photography and videography are among the strongest highlights of the iPhone 14 Pro. The upgraded 48MP main camera captures detailed and professional-quality images in both daylight and low-light conditions.
          </p>
          <p className="m-0 mb-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C', lineHeight: 1.7 }}>
            The Dynamic Island introduces a new interactive way to manage notifications, music, calls, timers, and background activities.
          </p>
          <p className="m-0 mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C', lineHeight: 1.7 }}>
            Battery life is reliable for daily use, supporting fast charging and MagSafe wireless charging.
          </p>

          {/* Key Features */}
          <p className="m-0 mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C' }}>
            <strong>Key Features</strong>
          </p>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {[
              '48MP Pro camera system with advanced low-light photography',
              'Super Retina XDR display with 120Hz ProMotion technology',
              'A16 Bionic chip for ultra-fast performance and efficiency',
              'Dynamic Island interactive multitasking experience',
            ].map((feature) => (
              <li key={feature} style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '16px', color: '#3C3C3C', lineHeight: 2 }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* More Faves This Way */}
        <div className="mb-8">
          <h3 className="mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500, fontSize: '24px', color: '#3C3C3C' }}>
            More Faves This Way
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Black Loungewear', 'Womens Nightwear', 'Hoodies & Sweatshirts', 'Blanket Hoodies', 'Knitwear', 'Womens T-shirt', 'Winter Dress', 'Black Loungewear'].map((tag) => (
              <span
                key={tag}
                className="cursor-pointer"
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#3C3C3C',
                  border: '1px solid #DBDBDB',
                  borderRadius: '6px',
                  padding: '6px 16px',
                  backgroundColor: '#cccccc29',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h3 className="mb-6" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500, fontSize: '24px', color: '#3C3C3C' }}>
            Related Product
          </h3>
          {/* ✅ FIX 8: 2 cols on mobile, original 4 cols on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: details1, name: 'Apple iPhone 13 (128GB) - Green', price: '60.00', discount: '-16% off' },
              { img: details2, name: 'Samsung Galaxy Tab S8+ - Wifi Only, Graphite', price: '8.00', discount: '-13% off' },
              { img: details3, name: 'HyperX Streamer Starter Pack (HBNDL0001), Black', price: '99.00', discount: '-26% off' },
              { img: details4, name: 'Kodak Mini Shot 3 Retro - Yellow, Bluetooth', price: '8.00', discount: '-13% off' },
            ].map((product, i) => (
              <div key={i} className="flex flex-col">
                <div className="rounded-[12px] overflow-hidden mb-3" style={{ aspectRatio: '1/1' }}>
                  <img src={product.img} alt={product.name} className="w-full h-full object-contain p-4" />
                </div>
                <p className="m-0 mb-1" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500, fontSize: '14px', color: '#3C3C3C', lineHeight: 1.4 }}>
                  {product.name}
                </p>
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: '#3C3C3C' }}>{product.price}</span>
                  <span style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 500, fontSize: '13px', color: '#FF4D4D' }} className='md:ml-[130px] ml-16'>{product.discount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      {/* ✅ FIX 9: px-4 on mobile, scale down heading, full-width input row */}
      <div className="w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center text-center">
        <h2
          className="m-0 mb-4"
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(22px, 5vw, 32px)',
            color: '#000000',
          }}
        >
          SIGN UP and get 25% OFF*
        </h2>

        <p
          className="m-0 mb-8"
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 200,
            fontSize: '14px',
            color: '#868686',
            lineHeight: 1.6,
          }}
        >
          Sign up to our e-mails to be the first to hear about the latest trends, new arrivals and exclusive offers.
          <br />
          You can unsubscribe at any time. *T&Cs apply.
        </p>

        {/* ✅ FIX 10: full width on mobile, fixed 480px on desktop */}
        <div className="flex w-full md:w-[480px]">
          <input
            type="email"
            placeholder="Email address"
            style={{
              flex: 1,
              padding: '12px 16px',
              outline: 'none',
              fontFamily: 'Raleway, sans-serif',
              fontSize: '14px',
              color: '#3C3C3C',
              border: '1px solid #DBDBDB',
              borderRadius: '6px',
              minWidth: 0,
            }}
          />
          <button
            style={{
              backgroundColor: '#101010',
              border: 'none',
              borderRadius: '2px',
              marginLeft: '10px',
              cursor: 'pointer',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFFFFF',
              padding: '12px 24px',
              flexShrink: 0,
            }}
          >
            Sign me up
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}