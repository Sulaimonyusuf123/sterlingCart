import React, { useState } from 'react'
import support1 from '../Components/Images/support1.png'
import support2 from '../Components/Images/support2.png'
import support3 from '../Components/Images/support3.png'
import support4 from '../Components/Images/support4.png'
import support5 from '../Components/Images/support5.png'
import support6 from '../Components/Images/support6.png'
import support7 from '../Components/Images/support7.png'
import support8 from '../Components/Images/support8.png'
import support9 from '../Components/Images/support8.png'
import support14 from '../Components/Images/support7.png'

const supportCategories = [
  { id: 1, img: support1, title: 'Orders & Tracking', desc: 'Check the status of your shipment or modify a recent order.' },
  { id: 2, img: support2, title: 'Returns & Refunds', desc: 'Start a return or view our refund policies and timelines.' },
  { id: 3, img: support3, title: 'Technical Support', desc: 'Troubleshooting guides for hardware and software issues.' },
  { id: 4, img: support4, title: 'Account Settings', desc: 'Manage your profile, security, and subscription preferences.' },
  { id: 5, img: support5, title: 'Warranty & Repairs', desc: 'Register your product or request a professional repair.' },
  { id: 6, img: support6, title: 'Product Manuals', desc: 'Download user guides and technical specifications PDF.' },
]

const articles = [
  { title: 'How to update the firmware on Sterling S-Series Displays', desc: 'Learn the step-by-step process for safely updating your display firmware to the latest stable release...' },
  { title: 'Understanding the Extended Warranty Coverage', desc: 'Everything included in our premium protection plan, including accidental damage and technical support...' },
  { title: 'Setting up multi-device synchronization', desc: 'Connect your entire workstation ecosystem using the SterlingCart Control Hub desktop application...' },
  { title: 'Return policy for international orders', desc: 'Detailed information regarding shipping costs and timelines for returns originating outside the US...' },
]

const helpChannels = [
  {
    id: 1,
    img: support7,
    title: 'Live Chat',
    subtitle: 'Online & Available',
    subtitleColor: '#22C55E',
    desc: 'Best for quick questions about products or order status updates.',
    btnText: 'Start Chat',
    btnBg: '#FFAE5D',
    btnColor: '#FFFFFF',
  },
  {
    id: 2,
    img: support8,
    title: 'Email Support',
    subtitle: 'Response in 24h',
    subtitleColor: '#FFAE5D',
    desc: 'Recommended for technical issues or complex warranty claims.',
    btnText: 'Open Ticket',
    btnBg: '#000000',
    btnColor: '#FFFFFF',
    active: true,
  },
  {
    id: 3,
    img: support9,
    title: 'Phone Support',
    subtitle: 'Mon-Fri: 9AM – 6PM EST',
    subtitleColor: '#A2A3B1',
    desc: 'Speak directly with a technician for hands-on troubleshooting.',
    btnText: 'Call +1 (800) STERLING',
    btnBg: '#E0E3E5',
    btnColor: '#17183B',
  },
]

export const Support = () => {
  const [search, setSearch] = useState('')
  const [activeChannel, setActiveChannel] = useState(2)

  return (
    <div className="w-full bg-white min-h-screen">

      {/* Section 1 — Hero Search */}
      {/* ✅ FIX 1: px-4 on mobile, original px-[100px] on desktop */}
      {/* ✅ FIX 2: reduce vertical padding on mobile */}
      <div className="w-full flex flex-col items-center justify-center py-10 md:py-16 px-4 md:px-[100px]">
        {/* ✅ FIX 3: scale down h1 on mobile (48px is too large) */}
        <h1
          className="m-0 mb-8 text-center"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 48px)',
            color: '#191C1E',
          }}
        >
          How can we help you today?
        </h1>

        {/* Search Bar */}
        <div
          className="flex items-center rounded-[10px] w-full"
          style={{ maxWidth: '560px', backgroundColor: '#404040', padding: '6px 6px 6px 16px' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="2" style={{ flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for help..."
            className="flex-1 outline-none border-none bg-transparent mx-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#FFFFFF',
              padding: '8px 0',
              minWidth: 0,
            }}
          />
          <button
            className="flex-shrink-0 rounded-[8px]"
            style={{
              backgroundColor: '#FFAE5D',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFFFFF',
              padding: '10px 24px',
            }}
          >
            Search
          </button>
        </div>

        {/* Popular links */}
        {/* ✅ FIX 4: center-align and allow wrapping on mobile */}
        <p className="mt-4 m-0 text-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280' }}>
          Popular:{' '}
          {['Track my order', 'Return policy', 'Firmware updates'].map((link, i, arr) => (
            <span key={link}>
              <a href="#" style={{ color: '#191C1E', textDecoration: 'underline', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                {link}
              </a>
              {i < arr.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>

      {/* Section 2 — Support Categories */}
      {/* ✅ FIX 5: px-4 on mobile */}
      <div className="w-full px-4 md:px-[100px] py-8">
        {/* ✅ FIX 6: 2 cols on mobile, original 3 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ maxWidth: '880px', margin: '0 auto' }}>
          {supportCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center text-center p-4 rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: '0px 2px 4px -2px #0F172A0D, 0px 4px 6px -1px #0F172A0D' }}
            >
              <div
                className="flex items-center justify-center mb-4 rounded-full"
                style={{ width: '52px', height: '52px', backgroundColor: '#FFAE5D', borderRadius: '50%' }}
              >
                <img src={cat.img} alt={cat.title} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <h3
                className="m-0 mb-2"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '15px', color: '#191C1E' }}
              >
                {cat.title}
              </h3>
              <p
                className="m-0"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', color: '#6B7280', lineHeight: 1.5 }}
              >
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Popular Articles */}
      {/* ✅ FIX 7: px-4 on mobile */}
      
      <div className="w-full px-4 md:px-[100px] py-12 ">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>

          {/* ✅ FIX 8: stack header row vertically on mobile */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-6 gap-3 md:gap-0">
           <div className="text-center md:text-left">
  <h2
    className="m-0 mb-1"
    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '28px', color: '#191C1E' }}
  >
    Popular Articles
  </h2>
  <p className="m-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280' }}>
    The most frequently asked questions from our professional community.
  </p>
</div>
            
             <a href="#"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#191C1E',
                textDecoration: 'none',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              View all help topics →
            </a>
          </div>

          {/* ✅ FIX 9: 1 col on mobile, original 2 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map((article, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-[10px] cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                style={{ border: '1px solid #C3C6D7' }}
              >
                <div className="flex-shrink-0 mt-1">
                  <img src={support14} alt="article" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                </div>
                <div>
                  <p
                    className="m-0 mb-1"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '15px', color: '#191C1E' }}
                  >
                    {article.title}
                  </p>
                  <p
                    className="m-0"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#6B7280', lineHeight: 1.5 }}
                  >
                    {article.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4 — Still need help */}
      {/* ✅ FIX 10: px-4 on mobile */}
      <div className="w-full px-4 md:px-[100px] py-12 flex flex-col items-center">
        <h2
          className="m-0 mb-2 text-center"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '36px', color: '#191C1E' }}
        >
          Still need help?
        </h2>
        <p
          className="m-0 mb-10 text-center"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#6B7280' }}
        >
          Our specialized support team is ready to assist you through several channels.
        </p>

        {/* ✅ FIX 11: stack cards vertically on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch w-full" style={{ maxWidth: '900px' }}>
          {helpChannels.map((channel) => (
            <div
              key={channel.id}
              onClick={() => setActiveChannel(channel.id)}
              className="flex-1 flex flex-col items-center text-center p-8 rounded-[14px] cursor-pointer transition-all duration-200"
              style={{
                border: activeChannel === channel.id ? '2px solid #DBE1FF' : '2px solid #FFFFFF',
                boxShadow: activeChannel === channel.id
                  ? '0px 4px 20px rgba(219, 225, 255, 0.4)'
                  : '0px 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <div
                className="flex items-center justify-center mb-4 rounded-full"
                style={{ width: '56px', height: '56px', backgroundColor: '#FFF4E8' }}
              >
                <img src={channel.img} alt={channel.title} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>

              <h3
                className="m-0 mb-1"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '15px', color: '#191C1E' }}
              >
                {channel.title}
              </h3>

              <p
                className="m-0 mb-3"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: channel.subtitleColor }}
              >
                {channel.id === 1 ? (
                  <span className="inline-flex items-center gap-1">
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }} />
                    {channel.subtitle}
                  </span>
                ) : channel.subtitle}
              </p>

              <p
                className="m-0 mb-6 flex-1"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}
              >
                {channel.desc}
              </p>

              <button
                className="w-full py-3 rounded-[8px] cursor-pointer"
                style={{
                  backgroundColor: channel.btnBg,
                  border: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: channel.btnColor,
                }}
              >
                {channel.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}