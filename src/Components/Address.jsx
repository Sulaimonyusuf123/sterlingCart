import React, { useState } from 'react';
import line from '../Components/Images/line.png';
import { useNavigate } from 'react-router-dom';

const initialAddresses = [
  { id: 1, city: 'New Jersey', tag: 'HOME', address: '1234, USA New Jersey,', contact: '(936) 361-0310' },
  { id: 2, city: 'New York', tag: 'OFFICE', address: '1234, USA New York', contact: '(936) 361-0310' },
];

export const Address = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  const [addresses, setAddresses] = useState(initialAddresses);
  const [coupon, setCoupon] = useState('');

  const removeAddress = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  const goToStep = (step) => {
    if (step === 'Address') navigate('/address');
    if (step === 'Shipping') navigate('/shipping');
    if (step === 'Payment') navigate('/payments');
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* ✅ FIX 1: px-4 on mobile, original px-[100px] on desktop */}
      {/* ✅ FIX 2: stack left + right vertically on mobile, row on desktop */}
      <div className="w-full px-4 md:px-[100px] py-8 flex flex-col md:flex-row gap-8 items-start">

        {/* Left */}
        <div className="flex-1 flex flex-col w-full">

          {/* Breadcrumb */}
          {/* ✅ FIX 3: smaller font on mobile so steps don't overflow */}
          <div className="flex items-center gap-3 md:gap-4 mb-10">
            {[
              { label: 'Address', active: true },
              { label: 'Shipping', active: false },
              { label: 'Payment', active: false },
            ].map((step, i, arr) => (
              <React.Fragment key={step.label}>
                <span
                  onClick={() => goToStep(step.label)}
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

          {/* Address Cards */}
          <div className="flex flex-col">
            {addresses.map((addr) => (
              <div key={addr.id}>
                <div className="py-6">

                  {/* Top row */}
                  {/* ✅ FIX 4: allow wrap on mobile so Edit|Remove doesn't get cut off */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-3">

                      {/* Radio Button */}
                      <div
                        onClick={() => setSelected(addr.id)}
                        className="cursor-pointer flex items-center justify-center rounded-full flex-shrink-0"
                        style={{
                          width: '22px',
                          height: '22px',
                          border: `2px solid ${selected === addr.id ? '#FFAE5D' : '#A2A3B1'}`,
                        }}
                      >
                        {selected === addr.id && (
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFAE5D' }} />
                        )}
                      </div>

                      {/* City */}
                      {/* ✅ FIX 5: scale down city font on mobile */}
                      <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400, fontSize: 'clamp(18px, 4vw, 24px)', color: '#17183B' }}>
                        {addr.city}
                      </span>

                      {/* Tag Badge */}
                      <span
                        className="px-2 py-0.5 rounded-[4px]"
                        style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '12px', fontWeight: 400, color: '#FFAE5D', border: '1px solid #FFAE5D' }}
                      >
                        {addr.tag}
                      </span>
                    </div>

                    {/* Edit | Remove */}
                    <div className="flex items-center gap-3">
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'ABeeZee, sans-serif', fontSize: '16px', color: '#17183B' }}>
                        Edit
                      </button>
                      <span style={{ color: '#A2A3B1' }}>|</span>
                      <button
                        onClick={() => removeAddress(addr.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'ABeeZee, sans-serif', fontSize: '16px', color: '#FF4D4D' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Address text */}
                  {/* ✅ FIX 6: reduce left margin on mobile so text isn't cut off */}
                  <p className="m-0 mb-2 ml-[34px]" style={{ fontFamily: 'ABeeZee, sans-serif', fontWeight: 400, fontSize: '16px', color: '#17183B' }}>
                    {addr.address}
                  </p>

                  {/* Contact */}
                  <p className="m-0 ml-[34px]" style={{ fontFamily: 'ABeeZee, sans-serif', fontWeight: 400, fontSize: '16px', color: '#17183B' }}>
                    Contact -&nbsp;&nbsp;<span style={{ color: '#A2A3B1' }}>{addr.contact}</span>
                  </p>

                </div>

                {/* Divider */}
                <img src={line} alt="divider" className="w-full" style={{ height: '1px', objectFit: 'cover' }} />

              </div>
            ))}
          </div>

          {/* Add New Address */}
          <button
            className="flex items-center gap-2 mt-6 bg-transparent border-none cursor-pointer"
            style={{ fontFamily: 'ABeeZee, sans-serif', fontWeight: 400, fontSize: '16px', color: '#CB7E78' }}
          >
            <span style={{ fontSize: '20px', color: '#CB7E78' }}>+</span>
            Add New Address
          </button>

        </div>

        {/* Right — Order Summary */}
        {/* ✅ FIX 7: full width on mobile, original fixed 340px on desktop */}
        <div
          className="flex-shrink-0 flex flex-col gap-4 p-6 rounded-[12px] w-full md:w-[340px]"
          style={{ border: '1px solid #E8E8E8' }}
        >
          <h2 className="m-0" style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 700, fontSize: '20px', color: '#17183B' }}>
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
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 400, fontSize: '14px', color: '#A2A3B1' }}>{row.label}</span>
                <span style={{ fontFamily: 'Prompt, sans-serif', fontWeight: 500, fontSize: '14px', color: row.color }}>{row.value}</span>
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
            onClick={() => navigate('/shipping')}
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