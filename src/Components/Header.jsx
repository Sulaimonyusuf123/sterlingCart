import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const categories = [
  'Fresh', "Today's Deals", 'Mobiles', 'Gift Cards', 'Women Clothing',
  'Men Clothing', 'Kids Clothing', 'Health', 'Pet corner', 'Books',
  'Beauty', 'Kitchen', 'Bed Room', 'Sport', 'Bags'
]

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isMinimal = ['/address', '/shipping', '/payments'].includes(location.pathname)

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">

      {/* Row 1: Logo + Sign in + Hamburger */}
      <div className="flex items-center justify-between px-4 md:px-[100px] py-3">
        <div className="flex items-center">
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '24px', color: '#000000' }}>
            Sterling
          </span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '24px', color: '#000000' }}>
            Cart
          </span>
        </div>

        {/* Desktop: Sign in */}
        <button className="hidden md:flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity duration-200">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#000000" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', color: '#000000' }}>
            Sign in
          </span>
        </button>

        {/* Mobile: Hamburger only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden bg-transparent border-none cursor-pointer flex-col gap-1.5 p-1"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#000000' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#000000' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#000000' }} />
        </button>
      </div>

      {/* Divider — always visible */}
      <div className="mx-4 md:mx-[100px]" style={{ height: '1px', backgroundColor: '#f0f0f0' }} />

      {/* Row 2 + Row 3 — hidden on address, shipping, payments */}
      {!isMinimal && (
        <>
          {/* Row 2: Location badge + Search bar — desktop only */}
          <div className="hidden md:flex items-center gap-3 px-[100px] py-2.5">
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#FFAE5D' }}
            >
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '11px', color: '#FFFFFF' }}>
                USA, 0541
              </span>
            </div>
            <div
              className="flex items-center rounded-lg overflow-hidden flex-shrink-0 ml-auto"
              style={{ border: '1px solid #cccccc', width: '400px' }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="flex-1 px-3 py-2 outline-none border-none bg-white"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#606060' }}
              />
              <button className="px-3 py-2 bg-transparent border-none cursor-pointer hover:opacity-70">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#888888" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search bar — always shown below header on non-minimal pages */}
          <div className="flex md:hidden items-center mx-4 my-2 rounded-lg overflow-hidden" style={{ border: '1px solid #cccccc' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 px-3 py-2 outline-none border-none bg-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#606060' }}
            />
            <button className="px-3 py-2 bg-transparent border-none cursor-pointer">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#888888" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Row 3: Category links — desktop only on home page */}
          {isHome && (
            <div className="hidden md:flex items-center justify-between px-[100px] py-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="bg-transparent border-none cursor-pointer whitespace-nowrap hover:text-black transition-colors duration-200"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    color: activeCategory === category ? '#000000' : '#606060',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Mobile Menu Drawer */}
          {menuOpen && (
            <div className="flex md:hidden flex-col bg-white border-t border-gray-100 px-4 py-4 gap-1">

    

              {/* Categories */}
              {isHome && categories.slice(0, 5).map((category) => (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setMenuOpen(false) }}
                  className="text-left bg-transparent border-none cursor-pointer py-2.5 border-b"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: activeCategory === category ? '#000000' : '#606060',
                    borderBottomColor: '#f0f0f0',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </>
      )}

    </header>
  )
}