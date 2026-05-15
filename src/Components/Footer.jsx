import React from 'react'
import country from '../Components/Images/country.png'

export const Footer = () => {
  return (
    <div className="w-full" style={{ backgroundColor: '#404040' }}>
      <div className="w-full px-4 md:px-[100px] py-6 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">

        {/* Logo */}
        <div className="flex items-baseline">
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              fontSize: '32px',
              color: '#FFFFFF',
            }}
          >
            Sterling
          </span>
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              fontSize: '32px',
              color: '#000000',
            }}
          >
            Cart
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-5 md:gap-8">
          {['About us', 'Contact', 'Help'].map((link) => (
            
             <a key={link}
              href="#"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <img
            src={country}
            alt="flag"
            style={{ width: '24px', height: '16px', objectFit: 'cover', borderRadius: '2px' }}
          />
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#FFFFFF',
            }}
          >
            English
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

      </div>
    </div>
  )
}