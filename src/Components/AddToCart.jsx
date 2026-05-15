import React, { useState } from 'react';
import cart1 from '../Components/Images/hero4.png';
import cart2 from '../Components/Images/deal2.png';
import { Footer } from './Footer';

const initialItems = [
  { id: 1, img: cart1, name: 'Iphone 14 Pro', color: 'Gunnared beige', price: 215, qty: 1 },
  { id: 2, img: cart2, name: 'Apex Predator Wireless Mouse', color: 'Black', price: 99, qty: 1 },
];

export const AddToCart = () => {
  const [items, setItems] = useState(initialItems);
  const [coupon, setCoupon] = useState('');

  const updateQty = (id, delta) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => setItems(prev => prev.filter(item => item.id !== id));

  const price = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = 20;
  const total = price - discount;

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="w-full px-4 md:px-[100px] py-8">

        {/* Cart Header */}
        <div className="flex items-baseline gap-4 mb-8">
          <h1
            className="m-0"
            style={{
              fontFamily: 'Prompt, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              color: '#17183B',
            }}
          >
            Cart
          </h1>
          <span
            style={{
              fontFamily: 'Prompt, sans-serif',
              fontWeight: 400,
              fontSize: '12px',
              color: '#A2A3B1',
            }}
          >
            {items.length} ITEMS
          </span>
        </div>

        {/* Main Layout - responsive column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left — Cart Items */}
          <div className="w-full md:flex-1 flex flex-col">

            {items.map((item, index) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6">

                  {/* Image */}
                  <div
                    className="flex-shrink-0 rounded-[10px] overflow-hidden flex items-center justify-center mx-auto sm:mx-0"
                    style={{ width: '110px', height: '110px', border: '1px solid #E8E8E8' }}
                  >
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain p-2" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
                    <p
                      className="m-0"
                      style={{
                        fontFamily: 'Prompt, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#17183B',
                      }}
                    >
                      {item.name}
                    </p>
                    <p className="m-0" style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400, fontSize: '14px', color: '#A2A3B1' }}>
                      Color&nbsp;&nbsp;<span style={{ color: '#17183B' }}>{item.color}</span>
                    </p>

                    {/* Quantity + Remove */}
                    <div className="flex items-center justify-center sm:justify-start gap-4 mt-1">
                      <div
                        className="flex items-center"
                        style={{ border: '1px solid #DBDBDB', borderRadius: '6px', overflow: 'hidden' }}
                      >
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="flex items-center justify-center cursor-pointer"
                          style={{ width: '36px', height: '36px', background: 'none', border: 'none', fontSize: '18px', color: '#17183B' }}
                        >
                          −
                        </button>
                        <span
                          style={{
                            width: '36px',
                            textAlign: 'center',
                            fontFamily: 'Prompt, sans-serif',
                            fontWeight: 500,
                            fontSize: '14px',
                            color: '#17183B',
                            borderLeft: '1px solid #DBDBDB',
                            borderRight: '1px solid #DBDBDB',
                            lineHeight: '36px',
                            display: 'inline-block',
                          }}
                        >
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="flex items-center justify-center cursor-pointer"
                          style={{ width: '36px', height: '36px', background: 'none', border: 'none', fontSize: '18px', color: '#17183B' }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Prompt, sans-serif', fontSize: '14px', color: '#FF4D4D' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <p
                    className="m-0 text-center sm:text-right"
                    style={{
                      fontFamily: 'Prompt, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#17183B',
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </p>

                </div>

                {/* Divider between items */}
                {index < items.length - 1 && (
                  <div className="w-full h-[1px]" style={{ backgroundColor: '#E8E8E8' }} />
                )}
              </div>
            ))}

            {/* Promo Banner */}
            <div
              className="flex flex-col sm:flex-row items-center gap-3 mt-6 px-5 py-4 rounded-[8px] text-center sm:text-left"
              style={{ border: '1px solid #A8D5D1', backgroundColor: '#F0FAFA' }}
            >
              <span style={{ fontSize: '18px', color: '#2AABAB' }}>%</span>
              <p className="m-0" style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400, fontSize: '14px', color: '#17183B' }}>
                10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA
              </p>
            </div>

          </div>

          {/* Right — Order Summary */}
          <div
            className="w-full md:w-[340px] flex-shrink-0 flex flex-col gap-4 p-6 rounded-[12px] md:mt-[-80px] md:pb-[73px]"
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

            {/* Line Items */}
            <div className="flex flex-col gap-3">
              {[
                { label: 'Price', value: `$${price.toFixed(2)}`, color: '#17183B' },
                { label: 'Discount', value: `-$${discount}`, color: '#17183B' },
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

            {/* Divider */}
            <div className="w-full h-[1px]" style={{ backgroundColor: '#E8E8E8' }} />

            {/* Total + Delivery */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 700, fontSize: '15px', color: '#17183B' }}>TOTAL</span>
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 700, fontSize: '15px', color: '#17183B' }}>${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400, fontSize: '13px', color: '#A2A3B1' }}>Estimated Delivery by</span>
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 600, fontSize: '13px', color: '#17183B' }}>01 Jun, 2026</span>
              </div>
            </div>

            {/* Coupon Input */}
            <div
              className="flex items-center justify-between px-4 py-3 rounded-[8px]"
              style={{ border: '1px solid #DBDBDB' }}
            >
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon Code"
                className="outline-none border-none flex-1"
                style={{
                  fontFamily: 'Prompt, sans-serif',
                  fontSize: '14px',
                  color: '#17183B',
                  background: 'transparent',
                }}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A2A3B1" strokeWidth="1.5">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
            </div>

            {/* Proceed to Checkout */}
            <button
              className="w-full py-4 rounded-[8px] cursor-pointer"
              style={{
                backgroundColor: '#101010',
                border: 'none',
                fontFamily: 'Prompt, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                color: '#FFFFFF',
              }}
            >
              Proceed to Checkout
            </button>

          </div>
        </div>
      </div>

      {/* Sign Up Section - responsive */}
      <div className="w-full py-16 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="m-0 mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: 'clamp(24px, 5vw, 32px)', color: '#000000' }}>
          SIGN UP and get 25% OFF*
        </h2>
        <p className="m-0 mb-8 max-w-xl" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400, fontSize: '16px', color: '#868686', lineHeight: 1.6 }}>
          Sign up to our e-mails to be the first to hear about the latest trends, new arrivals and exclusive offers.
          <br />
          You can unsubscribe at any time. *T&Cs apply.
        </p>
        <div className="flex flex-col sm:flex-row w-full max-w-md sm:max-w-lg">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 outline-none rounded-md sm:rounded-l-md sm:rounded-r-none"
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '14px',
              color: '#3C3C3C',
              border: '1px solid #DBDBDB',
              borderRadius: '6px',
            }}
          />
          <button
            className="mt-2 sm:mt-0 sm:ml-2 px-6 py-3 rounded-md whitespace-nowrap"
            style={{
              backgroundColor: '#101010',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFFFFF',
            }}
          >
            Sign me up
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};