import { Button } from "@/components/ui/button";
import ViewButtton from "@/components/ui/ViewButton";
import Image from "next/image";
import React from "react";
import NewProductCard from "../components/NewProductCard";
import Features from "../components/Features";
import Signup from "../components/Signup";
import ProductListFooter from "../components/ProductListFooter";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Page() {
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


  const NewProductDetails = [
    {
      src: "/images/hero image.png",
      title: "The Dandy chair",
      price: 250,
    },
    {
      src: "/images/dark chair.png",
      title: "The Dandy chair",
      price: 250,
    },
    {
      src: "/images/Product Image.png",
      title: "The Dandy chair",
      price: 250,
    },
    {
      src: "/images/hero image.png",
      title: "The Dandy chair",
      price: 250,
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

      <nav className="py-4 px-4 md:py-[25px] md:px-[80px] flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-lg md:text-h3 font-clash font-[200]">Avion</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex gap-[20px] md:gap-[44px]">
            {navLinks.map((item: { name: string, herf: string }, index: number) => (
              <Link href={item.herf} key={index}> 
                <li
                
                className="text-sm md:text-h5 font-satoshi font-[200]"
              >
                {item.name}
              </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Icons for Desktop */}
        <div className="hidden md:flex gap-[16px]">
          <img
            src="/icons/search.png"
            alt="search"
            className="h-[16px] w-[16px]"
          />
          <img
            src="/icons/shoping-cart.png"
            alt="shopping-cart"
            className="h-[16px] w-[16px]"
          />
          <img
            src="/icons/user-avatar.png"
            alt="user avatar"
            className="h-[16px] w-[16px]"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <div className="flex items-center md:hidden gap-[16px]">
            <img
              src="/icons/search.png"
              alt="search"
              className="h-[16px] w-[16px]"
            />
            <img
              src="/icons/shoping-cart.png"
              alt="shopping-cart"
              className="h-[16px] w-[16px]"
            />
            <img
              src="/icons/user-avatar.png"
              alt="user avatar"
              className="h-[16px] w-[16px]"
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <img
                  src="/icons/menu.png"
                  alt="menu"
                  className="h-[16px] w-[16px]"
                />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <h2 className="text-lg font-clash font-[200] mb-4">Menu</h2>
              <ul className="flex flex-col gap-4">
                {navLinks.map((item: { name: string, herf: string }, index: number) => (
                  <Link href={item.herf} key={index}  >
                    <li className="text-base font-satoshi font-[200]">
                    {item.name}
                  </li>
                  </Link>
                ))}
              </ul>
              <SheetClose asChild>
                <button className="mt-6 text-sm text-primary underline">
                  Close
                </button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="w-full h-fit min-md:h-[760px] grid md:grid-cols-2 grid-cols-1 p-0 ">
        {/* <div className='w-full h-[760px] flex items-center p-0 '> */}
        <div className="h-full">
          <Image
            src="/images/imageleft.png"
            alt="product image"
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Image Details */}
        <div className="h-fit py-6 px-6 md:py-[51px] md:px-[55px] ">
          <div className="md:p-[40px]  h-full w-full">
            <div>
              <h1 className="text-h3 md:text-h1 font-clash font-[300]">
                The Dandy Chair
              </h1>
              <h4 className="text-h4 font-satoshi font-[200] ">£250</h4>
            </div>
            <div className="mt-5  md:mt-14 text-h6 flex justify-between flex-col gap-[20px]">
              <h5 className="text-h5 text-primary font-clash font-[200]">
                Description
              </h5>

              <p className="text-h6 md:text-h5 text-[#505977] font-satoshi font-[200]">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>

              <ul className=" list-disc font-satoshi font-[200] px-5 text-[#505977]">
                <li>Premium material </li>
                <li>Handmade upholstery</li>
                <li> Quality timeless classic</li>
              </ul>
            </div>
            <div className="py-[20px] mt-4 md:mt-10">
              <h5 className="text-primary font-clash font-[200]">Dimensions</h5>
              <div className="flex gap-[60px] mt-5">
                <div className="flex flex-col gap-4">
                  <h6 className="text-primary text-h6 font-clash font-[200] ">
                    Height
                  </h6>
                  <h6 className="text-primary font-satoshi font-[200] text-h5 ">
                    110cm
                  </h6>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-primary text-h6 font-clash font-[200] ">
                    Width
                  </h6>
                  <h6 className="text-primary font-satoshi font-[200] text-h5 ">
                    75cm
                  </h6>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-primary text-h6 font-clash font-[200] ">
                    Depth
                  </h6>
                  <h6 className="text-primary font-satoshi font-[200] text-h5 ">
                    50cm
                  </h6>
                </div>
              </div>
            </div>
            <div className="py-7 flex items-center md:flex-row flex-col justify-between">
              <h6 className="text-primary text-h6 font-clash font-[200]">
                Amount: <span className="pl-10">1</span>
              </h6>

             <Link href='/cart'>
             <Button className="text-h5 mt-3 sm:w-full md:w-24 text-white bg-primary  hover:bg-muted font-satoshi font-[300] rounded-none py-[24px] leading-none px-[32px] hover:text-black">
                Add to Cart
              </Button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto  py-[24px] px-6 md:py-[80px] md:px-[80px]">
      <h2 className="text-h2 text-primary font-clash font-[300] mb-8 md:mb-0">New ceramics</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 items-center">
        {/* <div className="flex items-center justify-between"> */}
          {NewProductDetails.map(
            (
              item: { src: string; title: string; price: number },
              index: number
            ) => (
            <div key={index}>
                <NewProductCard
                src={item.src}
                title={item.title}
                price={item.price}
              />
            </div>
            )
          )}
        </div>

        <div className="flex items-center justify-center">
          <ViewButtton />
        </div>
      </div>

      <div>
        <Features />
      </div>

      <div className="mt-14">
        <Signup />
      </div>

      <div>
        <ProductListFooter />
      </div>
    </div>
  );
}
