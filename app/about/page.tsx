"use client"
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Features from "../components/Features";
import Signup from "../components/Signup";
import Footer from "../components/Footer";
import ProductListFooter from "../components/ProductListFooter";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Plant pots" ,
      herf:"/"
    },
    { name: "Ceramics"  ,
      herf:"/"},
    { name: "Tables"  ,
      herf:"/"},
    { name: "Chairs" ,
      herf:"/" },
    { name: "Crockery" ,
      herf:"/" },
    { name: "Tableware" ,
      herf:"/" },
    { name: "Cutlery"  ,
      herf:"/"},
      {
     name:"About page",
        herf:"/about"
      },
      {
        name:"All Product List Page",
        herf:"/allproductlist"
      },
      {
        name:"Product Page",
        herf:"/product"
      },
  ];



  return (
    <div>
      <div className="w-full h-[41px] text-white bg-primary flex items-center justify-center relative">
        <h6 className="text-xs md:text-h6 font-satoshi font-[200] text-center">
          Free delivery on all orders over £50 with code easter checkout
        </h6>
        <span className="absolute right-4 md:right-5 cursor-pointer">X</span>
      </div>


    {/* nav  */}
      <div className="w-full h-fit md:h-[134px] py-[30px] px-[28px]">
        {/* Top Section */}
        <div className="w-full h-1/2 pb-[20px] flex justify-between items-center">
          {/* Left: Search Icon */}
          <h1 className="font-clash font-[400] text-h3 cursor-pointer">
            Anino
          </h1>

          {/* Right: Desktop Actions (Unchanged) */}
          <div className="flex items-center gap-[47px]">
            <div
              className="font-satoshi flex text-[#726E8D] items-center 
            gap-3
            md:gap-8 font-[400] text-h5"
            >
              <h5>About us</h5>
              <h5>Contact</h5>
              <h5>Blog</h5>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Image
                className="cursor-pointer"
                src="/icons/search.png"
                alt="shopping-cart"
                height={20}
                width={20}
              />
              <Link href="/cart">
                <Image
                  className="cursor-pointer"
                  src="/icons/shoping-cart.png"
                  alt="shopping-cart"
                  height={20}
                  width={20}
                />
              </Link>

              <Image
                className="cursor-pointer"
                src="/icons/user-avatar.png"
                alt="user-avatar"
                height={20}
                width={20}
              />
            </div>
          </div>

          {/* Mobile Actions: Search + Hamburger */}
          <div className="flex items-center gap-6 md:hidden bg-red-900">
            <Sheet>
              <SheetTrigger>
                <Image
                  className="cursor-pointer"
                  src="/icons/menu.png"
                  alt="menu"
                  height={24}
                  width={24}
                />
              </SheetTrigger>
              <SheetContent side="right" className="bg-white p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <SheetTrigger>
                    <X className="cursor-pointer" height={24} width={24} />
                  </SheetTrigger>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((item: { name: string, herf: string }, index: number) => (
                     <Link href={item.herf} key={index}>
                     <h5
                  
                   className="cursor-pointer text-h5 text-[#726E8D]"
                 >
                   {item.name}
                 </h5>
                 </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Divider */}

        {/* Navigation Links for Desktop (Unchanged for md/lg Screens) */}
        <div className="w-full bg-muted h-1/2 pb-[20px] hidden md:flex items-center pt-[20px] justify-center">
          <div className="hidden md:flex items-center gap-[40px]">
            {navLinks.map((item, index) => (
             <Link href={item.herf} key={index}>
                 <h5 key={index} className="cursor-pointer text-h5 text-[#726E8D]">
                {item.name}
              </h5>
             </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit px-6  flex items-center flex-col md:flex-row justify-between py-5 md:h-[277px] gap-14  md:gap-0  md:py-[88px] md:px-[128px]">
        <h1 className="font-clash w-full text-h2 md:w-[704px] text-primary md:text-h1 font-[300]">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>

       <Link href='/allproductlist'>
       <Button className="text-sm w-full md:text-h5 md:w-44  text-primary bg-muted  font-[300] rounded-none py-3 md:py-[24px] hover:bg-primary hover:text-muted transition-all ease-linear duration-150 px-6 md:px-[32px]">
          View our products
        </Button>
       </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  px-6 py-4 md:px-20 md:py-[60px] gap-4 w-full h-[600px]">
        {/* text */}
        <div className="md:p-16 px-8 py-7  bg-primary flex flex-col  md:justify-between">
          <div className="text-white gap-3">
            <h1 className="font-clash font-[300] text-h4 md:text-h1 ">
              It started with a small idea
            </h1>

            <p className="font-satoshi w-[80%] font-[200] text-h6 md:text-large">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>

          <div>
            <Button className="text-h5 md:w-44  mt-10 w-full md: md:mt-0 text-white bg-[#F9F9F926] font-satoshi hover:bg-accent hover:text-black  font-[300] rounded-none py-[24px] leading-none px-[32px]">
              View Collection
            </Button>
          </div>
        </div>

        {/* image */}
        <div>
          <Image
            src="/images/aboutimage.png"
            alt="image"
            height={1000}
            width={1000}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="grid overflow-hidden mt-20 md:mt-0 grid-cols-1 md:grid-cols-2 w-full h-[600px]">
        {/* image */}
        <div className="overflow-hidden">
          <Image
            src="/images/aboutbottom.png"
            alt="image"
            height={1000}
            width={1000}
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* text */}
        <div className="h-full text-left w-full  pt-[40px] md:pt-[72px] px-6 md:px-[84px] flex flex-col justify-between">
        <div>
          <h3 className="text-h3 font-clash font-[300] text-primary">
          Our service isn’t just personal, it’s actually
          hyper personally exquisite
          </h3>
          <p className="font-satoshi text-[#505977] pt-[25px] font-[300]">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. <br /><br /> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
        </div>

        <div>
          <Button className="font-satoshi text-primary mt-8 md:mb-[54px] bg-muted rounded-none font-[300] text-h5 hover:bg-destructive py-5 px-8 w-full md:w-auto">
            Get in touch
          </Button>
        </div>
      </div>

      </div>

      <div className="mt-10">
        <Features />
      </div>

      <div className="mb-10">
        <Signup />
      </div>

      <div>
        <ProductListFooter />
      </div>
            
    </div>
  );
}
