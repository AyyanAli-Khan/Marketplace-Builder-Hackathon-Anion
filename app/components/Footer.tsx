import { Button } from "@/components/ui/button";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-6 py-6 md:py-[58px] md:px-[82px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="font-[300] text-h5 font-clash  mb-4">Menu</h3>
            <ul className="space-y-2 text-h6 font-satoshi font-[300]">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-[300] text-h5 font-clash mb-4">Categories</h3>
            <ul className="space-y-2  text-h6 font-satoshi font-[300]">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="font-[300] text-h5 font-clash mb-4">Our company</h3>
            <ul className="space-y-2  text-h6 font-satoshi font-[300]">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div className="col-span-2">
            <h3 className="font-[300] text-h5 font-clash mb-4">Join our mailing list</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-[80%] p-2 h-[56px]  bg-[#3b2c59] text-white outline-none"
              />
              <Button
                className="px-4 h-[56px] w-[20%] rounded-none py-6 bg-white text-h5 text-primary hover:bg-gray-200"
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>

        {/* Divider and Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm font-satoshi font-[200]">Copyright 2022 Avion LTD</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" aria-label="LinkedIn">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Skype">
              <img src="/icons/skype.png" alt="Skype" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Pinterest">
              <img src="/icons/pinterest.png" alt="Pinterest" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
