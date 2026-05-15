import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import visa from '../Components/Images/visa.png';
import mastercard from '../Components/Images/mastercard.png';

const initialCards = [
  { id: 1, img: visa, last4: '6754', expires: '06/2030' },
  { id: 2, img: mastercard, last4: '5643', expires: '11/2029' },
];

export const Payments = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  const [cards, setCards] = useState(initialCards);
  const [coupon, setCoupon] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({ number: '', expiry: '', cvv: '', name: '' });

  const removeCard = (id) => setCards(prev => prev.filter(c => c.id !== id));

  const addCard = () => {
    if (!newCard.number || !newCard.expiry) return;
    const last4 = newCard.number.replace(/\s/g, '').slice(-4);
    setCards(prev => [...prev, { id: Date.now(), img: visa, last4, expires: newCard.expiry }]);
    setNewCard({ number: '', expiry: '', cvv: '', name: '' });
    setShowForm(false);
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="flex flex-col md:flex-row w-full px-4 md:px-[100px] py-8 gap-8 items-start">
        {/* Left Section */}
        <div className="w-full md:flex-1 flex flex-col">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-10">
            {[
              { label: 'Address', active: false, to: '/address' },
              { label: 'Shipping', active: false, to: '/shipping' },
              { label: 'Payment', active: true, to: '/payments' },
            ].map((step, i, arr) => (
              <React.Fragment key={step.label}>
                <span
                  onClick={() => navigate(step.to)}
                  style={{
                    fontFamily: 'Proxima Nova, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
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

          {/* Payment Method */}
          <h3
            className="m-0 mb-4"
            style={{
              fontFamily: 'Prompt, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              color: '#17183B',
            }}
          >
            Payment Method
          </h3>

          {/* Cards Box */}
          <div className="flex flex-col rounded-[10px] overflow-hidden" style={{ border: '1px solid #E8E8E8' }}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 cursor-pointer"
                style={{
                  borderBottom: index < cards.length - 1 ? '1px solid #E8E8E8' : 'none',
                  backgroundColor: selected === card.id ? '#FAFAFA' : '#FFFFFF',
                }}
                onClick={() => setSelected(card.id)}
              >
                {/* Left: radio + card details */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Radio */}
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: '20px',
                      height: '20px',
                      border: `2px solid ${selected === card.id ? '#FFAE5D' : '#A2A3B1'}`,
                    }}
                  >
                    {selected === card.id && (
                      <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#FFAE5D' }} />
                    )}
                  </div>

                  {/* Card Image */}
                  <img
                    src={card.img}
                    alt="card"
                    style={{ width: '36px', height: '24px', objectFit: 'contain' }}
                  />

                  {/* Dots + last4 */}
                  <span
                    style={{
                      fontFamily: 'ABeeZee, sans-serif',
                      fontSize: '15px',
                      color: '#17183B',
                    }}
                  >
                    ···· {card.last4}
                  </span>

                  {/* Expiry */}
                  <span
                    style={{
                      fontFamily: 'ABeeZee, sans-serif',
                      fontSize: '14px',
                      color: '#A2A3B1',
                    }}
                  >
                    Expires {card.expires}
                  </span>
                </div>

                {/* Remove */}
                <button
                  onClick={(e) => { e.stopPropagation(); removeCard(card.id); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'ABeeZee, sans-serif',
                    fontSize: '15px',
                    color: '#FF4D4D',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Add Payment method */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 mt-6 bg-transparent border-none cursor-pointer self-start"
            style={{ fontFamily: 'ABeeZee, sans-serif', fontWeight: 400, fontSize: '16px', color: '#CB7E78' }}
          >
            <span style={{ fontSize: '20px', color: '#CB7E78' }}>{showForm ? '−' : '+'}</span>
            {showForm ? 'Cancel' : 'Add Payment method'}
          </button>

          {/* Inline Add Card Form */}
          {showForm && (
            <div className="flex flex-col gap-4 mt-4 p-5 rounded-[10px]" style={{ border: '1px solid #E8E8E8' }}>
              {/* Card Number */}
              <div className="flex flex-col gap-1">
                <label style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '13px', color: '#A2A3B1' }}>Card Number</label>
                <input
                  type="text"
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  value={newCard.number}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, ' ').trim();
                    setNewCard(prev => ({ ...prev, number: val }));
                  }}
                  className="px-4 py-3 rounded-[8px] outline-none w-full"
                  style={{ border: '1px solid #DBDBDB', fontFamily: 'ABeeZee, sans-serif', fontSize: '14px', color: '#17183B' }}
                />
              </div>

              {/* Name on Card */}
              <div className="flex flex-col gap-1">
                <label style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '13px', color: '#A2A3B1' }}>Name on Card</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={newCard.name}
                  onChange={(e) => setNewCard(prev => ({ ...prev, name: e.target.value }))}
                  className="px-4 py-3 rounded-[8px] outline-none w-full"
                  style={{ border: '1px solid #DBDBDB', fontFamily: 'ABeeZee, sans-serif', fontSize: '14px', color: '#17183B' }}
                />
              </div>

              {/* Expiry + CVV */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <label style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '13px', color: '#A2A3B1' }}>Expiry Date</label>
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="MM/YY"
                    value={newCard.expiry}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '/');
                      setNewCard(prev => ({ ...prev, expiry: val }));
                    }}
                    className="px-4 py-3 rounded-[8px] outline-none w-full"
                    style={{ border: '1px solid #DBDBDB', fontFamily: 'ABeeZee, sans-serif', fontSize: '14px', color: '#17183B' }}
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '13px', color: '#A2A3B1' }}>CVV</label>
                  <input
                    type="password"
                    maxLength={3}
                    placeholder="•••"
                    value={newCard.cvv}
                    onChange={(e) => setNewCard(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                    className="px-4 py-3 rounded-[8px] outline-none w-full"
                    style={{ border: '1px solid #DBDBDB', fontFamily: 'ABeeZee, sans-serif', fontSize: '14px', color: '#17183B' }}
                  />
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={addCard}
                className="w-full py-3 rounded-[8px] cursor-pointer"
                style={{ backgroundColor: '#101010', border: 'none', fontFamily: 'ABeeZee, sans-serif', fontWeight: 600, fontSize: '14px', color: '#FFFFFF' }}
              >
                Save Card
              </button>
            </div>
          )}
        </div>

        {/* Right Section — Order Summary */}
        <div
          className="w-full md:w-[340px] flex-shrink-0 flex flex-col gap-4 p-6 rounded-[12px]"
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
              style={{ fontFamily: 'Prompt, sans-serif', fontSize: '14px', color: '#17183B' }}
            />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A2A3B1" strokeWidth="1.5">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
          </div>

          <button
            className="w-full py-4 rounded-[8px] cursor-pointer"
            style={{ backgroundColor: '#101010', border: 'none', fontFamily: 'Prompt, sans-serif', fontWeight: 600, fontSize: '15px', color: '#FFFFFF' }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};