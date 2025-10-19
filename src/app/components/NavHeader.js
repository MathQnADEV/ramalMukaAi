import React from 'react'

function NavHeader() {
  return (
      <header className="text-center">
          <h1
              className="text-4xl font-extrabold bg-gradient-to-r from-[#C6FFDD] via-[#FBD786] to-[#f7797d] text-transparent bg-clip-text shadow-lg inline-block"
              style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
              }}
          >
              RAMAL MUKA COY
          </h1>
          <p className='text-gray-300'>Ramal Berdasarkan foto selfie kalian</p>
      </header>
  );
}

export default NavHeader