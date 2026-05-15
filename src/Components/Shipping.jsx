import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const shippingOptions = [
  { id: 1, price: 'Free', label: 'Regular Shipment', date: '01 June, 2026' },
  { id: 2, price: '$8.50', label: 'Priority Shipping', date: '23 May, 2026' },
]

export const Shipping = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(1)
  const [coupon, setCoupon] = useState('')

  return (
    <div className="w-full bg-white min-h-screen">
      {/* ✅ FIX 1: px-4 on mobile, original px-[100px] on desktop */}
      {/* ✅ FIX 2: stack vertically on mobile, row on desktop */}
      <div className="w-full px-4 md:px-[100px] py-8 flex flex-col md:flex-row gap-8 items-start">

        {/* Left */}
        <div className="flex-1 flex flex-col w-full">

          {/* Breadcrumb */}
          {/* ✅ FIX 3: scale font down on mobile */}
          <div className="flex items-center gap-3 md:gap-4 mb-10">
            {[
              { label: 'Address', active: false, to: '/address' },
              { label: 'Shipping', active: true, to: '/shipping' },
              { label: 'Payment', active: false, to: '/payments' },
            ].map((step, i, arr) => (
              <React.Fragment key={step.label}>
                <span
                  onClick={() => navigate(step.to)}
                  style={{
                    fontFamily: 'Proxima Nova, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 3.5vw, 18px)',
                    color: step.active ? '#17183B' : '#A2A3B1',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => { if (!step.active) e.target.style.color = '#FFAE5D'; }}
                  onMouseOut={(e) => { if (!step.active) e.target.style.color = '#A2A3B1'; }}
                >
                  {step.label}
                </span>
                {i < arr.length - 1 && (
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M1 1l8 7-8 7" stroke="#A2A3B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Shipment Method */}
          <h3
            className="m-0 mb-4"
            style={{
              fontFamily: 'Prompt, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              color: '#17183B',
            }}
          >
            Shipment Method
          </h3>

          {/* Options Box */}
          <div className="flex flex-col rounded-[10px] overflow-hidden" style={{ border: '1px solid #E8E8E8' }}>
            {shippingOptions.map((option, index) => (
              <div
                key={option.id}
                onClick={() => setSelected(option.id)}
                // ✅ FIX 4: stack label info and date on mobile, row on desktop
                className="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-4 cursor-pointer transition-colors duration-150 gap-2 md:gap-0"
                style={{
                  borderBottom: index < shippingOptions.length - 1 ? '1px solid #E8E8E8' : 'none',
                  backgroundColor: selected === option.id ? '#FAFAFA' : '#FFFFFF',
                }}
              >
                {/* Left: radio + price + label */}
                <div className="flex items-center gap-3">

                  {/* Radio */}
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: '20px',
                      height: '20px',
                      border: `2px solid ${selected === option.id ? '#2AABAB' : '#A2A3B1'}`,
                    }}
                  >
                    {selected === option.id && (
                      <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#2AABAB' }} />
                    )}
                  </div>

                  {/* Price */}
                  <span
                    style={{
                      fontFamily: 'Prompt, sans-serif',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: selected === option.id ? '#2AABAB' : '#17183B',
                    }}
                  >
                    {option.price}
                  </span>

                  {/* Label */}
                  <span
                    style={{
                      fontFamily: 'ABeeZee, sans-serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      color: '#17183B',
                    }}
                  >
                    {option.label}
                  </span>
                </div>

                {/* Date — ✅ FIX 5: indent under radio on mobile */}
                <span
                  className="ml-[32px] md:ml-0"
                  style={{
                    fontFamily: 'ABeeZee, sans-serif',
                    fontWeight: 400,
                    fontSize: '15px',
                    color: '#17183B',
                  }}
                >
                  {option.date}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right — Order Summary */}
        {/* ✅ FIX 6: full width on mobile, original fixed 340px on desktop */}
        <div
          className="flex-shrink-0 flex flex-col gap-4 p-6 rounded-[12px] w-full md:w-[340px]"
          style={{ border: '1px solid #E8E8E8' }}
        >
          <h2
            className="m-0"
            style={{
              fontFamily: 'Prompt, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#17183B',
            }}
          >
            Order Summary
          </h2>

          <div className="flex flex-col gap-3">
            {[
              { label: 'Price', value: '$316.00', color: '#17183B' },
              { label: 'Discount', value: '$20', color: '#17183B' },
              { label: 'Shipping', value: 'Free', color: '#2AABAB' },
              { label: 'Coupon Applied', value: '$0.00', color: '#17183B' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between">
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400, fontSize: '14px', color: '#A2A3B1' }}>
                  {row.label}
                </span>
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 500, fontSize: '14px', color: row.color }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px]" style={{ backgroundColor: '#E8E8E8' }} />

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 700, fontSize: '15px', color: '#17183B' }}>TOTAL</span>
              <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 700, fontSize: '15px', color: '#17183B' }}>$296.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400, fontSize: '13px', color: '#A2A3B1' }}>Estimated Delivery by</span>
              <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 600, fontSize: '13px', color: '#17183B' }}>01 Jun, 2026</span>
            </div>
          </div>

          <div
            className="flex items-center justify-between px-4 py-3 rounded-[8px]"
            style={{ border: '1px solid #DBDBDB' }}
          >
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon Code"
              className="outline-none border-none flex-1 bg-transparent"
              style={{ fontFamily: 'Prompt, sans-serif', fontSize: '14px', color: '#17183B', minWidth: 0 }}
            />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A2A3B1" strokeWidth="1.5">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
          </div>

          <button
            onClick={() => navigate('/payments')}
            className="w-full py-4 rounded-[8px] cursor-pointer"
            style={{ backgroundColor: '#101010', border: 'none', fontFamily: 'Prompt, sans-serif', fontWeight: 600, fontSize: '15px', color: '#FFFFFF' }}
          >
            Proceed to Checkout
          </button>

        </div>
      </div>
    </div>
  )
}