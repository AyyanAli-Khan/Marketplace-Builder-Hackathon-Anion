import React from 'react'

export default function ProductListFooter() {
  return (
    <footer className="bg-[#2C2543] text-h6 text-white py-10 font-satoshi font-[200] px-6 md:px-20">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Avion Section */}
        <div>
          <h1 className=" mb-4 text-h1 font-clash font-[400]">Avion</h1>
          <div className='gap-[12px] pt-[16px] flex justify-between flex-col'>
          <p>21 New York Street</p>
          <p>New York City</p>
          <p>United States of America</p>
          <p>432 34</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h5 className="text-h5 font-clash font-[200] mb-4">Social links</h5>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-[24px] h-[24px]" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.png" alt="Facebook" className="w-[24px] h-[24px]" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.png" alt="Instagram" className="w-[24px] h-[24px]" />
            </a>
            <a href="#" aria-label="Skype">
              <img src="/icons/skype.png" alt="Skype" className="w-[24px] h-[24px]" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.png" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Pinterest">
              <img src="/icons/pinterest.png" alt="Pinterest" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h5 className="mb-4 text-h5 font-clash font-[200]">Menu</h5>
          <ul className="flex flex-col justify-between gap-[12px]">
            <li><a href="#">New arrivals</a></li>
            <li><a href="#">Best sellers</a></li>
            <li><a href="#">Recently viewed</a></li>
            <li><a href="#">Popular this week</a></li>
            <li><a href="#">All products</a></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h5 className="text-h5 font-clash font-[200] mb-4">Categories</h5>
          <ul className="flex flex-col justify-between gap-[12px]">
            <li><a href="#">Crockery</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Homeware</a></li>
            <li><a href="#">Plant pots</a></li>
            <li><a href="#">Chairs</a></li>
            <li><a href="#">Crockery</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10"></div>

      {/* Copyright */}
      <div className="mt-4 text-left text-xs">
        Copyright 2022 Avion LTD
      </div>
    </footer>
  )
}
