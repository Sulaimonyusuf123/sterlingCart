import React from 'react';
import deal from '../Components/Images/deal.png'
import deal1 from '../Components/Images/deal1.png'
import deal2 from '../Components/Images/deal2.png'
import deal3 from '../Components/Images/deal3.png'
import deal4 from '../Components/Images/deal4.png'
import deal5 from '../Components/Images/deal5.png'

const deals = [
  { id: 1, image: deal1, name: "ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse", price: "$119.00", discount: "-42% off" },
  { id: 2, image: deal2, name: "Zebronics Zeb-Transformer-K USB Gaming Keyboard | RGB LED Lighting", price: "$99.00", discount: "-56% off" },
  { id: 3, image: deal3, name: "TP-LINK Freeend USB Hub, 4USB 2.0Port Charging Hub", price: "$19.00", discount: "-78% off" },
  { id: 4, image: deal4, name: "Scotch's Moguls Post Premium Extended for Wall from room Office Gaming", price: "$159.00", discount: "-25% off" },
  { id: 5, image: deal5, name: "HyperX Streamer Starter Pack (HMHS1-3021), Black", price: "$119.65", discount: "-50% off" },
]

export const TodaysHotDeals = () => {
  return (
    <div className="w-full px-4 md:px-[100px] py-8">

      {/* Hero Banner */}
      <div className="w-full mb-8 rounded-2xl overflow-hidden">
        <img src={deal} alt="Echo Dot" className="w-full h-auto object-cover" />
      </div>

      {/* Section Heading */}
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '24px', color: '#000000', marginBottom: '12px' }}>
        Today's hot deals
      </h2>

      {/* Orange Line */}
      <div style={{ width: '100%', height: '2px', backgroundColor: '#FFAE5D', marginBottom: '24px' }} />

      {/* Products Grid — 2 cols mobile, 5 cols desktop */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {deals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="w-full aspect-square flex items-center justify-center p-4">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
            </div>
            <div className="p-3">
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#000000',
                  marginBottom: '8px',
                  lineHeight: '1.4',
                  height: '40px',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {item.name}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '14px', color: '#FF3232' }}>
                  {item.price}
                </span>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '12px', color: '#FF3232' }} className='md:ml-16 ml-8'>
                  {item.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}