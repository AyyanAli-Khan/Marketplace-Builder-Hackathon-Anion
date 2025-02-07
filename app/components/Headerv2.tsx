import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const Headerv2 = () => {
  const { cart } = useCart();

  const navLinks = [
    { name: "Plant pots", herf: "/allproduct" },
    { name: "Ceramics", herf: "/allproduct" },
    { name: "Tables", herf: "/allproduct" },
    { name: "Chairs", herf: "/allproduct" },
    { name: "Crockery", herf: "/allproduct" },
    { name: "Tableware", herf: "/allproduct" },
    { name: "Cutlery", herf: "/allproduct" },
    {
      name: "About us",
      herf: "/about",
    },
    {
      name: "All Products",
      herf: "/allproduct",
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
          <Link href={"/"}>
            <h1 className="text-lg md:text-h3 font-clash font-[200]">Avion</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex gap-[20px] md:gap-[44px]">
            {navLinks.map(
              (item: { name: string; herf: string }, index: number) => (
                <Link href={item.herf} key={index}>
                  <li className="text-sm md:text-h5 font-satoshi font-[200]">
                    {item.name}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>

        {/* Icons for Desktop */}
        <div className="hidden md:flex gap-[16px]">
          <Image
            src="/icons/search.png"
            alt="search"
            className="h-[16px] w-[16px]"
            height={20}
                width={20}
          />
          <Link href="/cart">
            <Image
              src="/icons/shoping-cart.png"
              alt="shopping-cart"
              className="h-[16px] w-[16px]"
              height={20}
                width={20}
            />
          </Link>
          {cart.length > 0 && ( // Show badge only if cart is not empty
            <Badge className="absolute top-12 right-24 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </Badge>
          )}
          <Link href={'/profile'}>  
          <Image
            src="/icons/user-avatar.png"
            alt="user avatar"
            className="h-[16px] w-[16px]"
            height={20}
                width={20}
          />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <div className="flex items-center md:hidden gap-[16px]">
            <Image
              src="/icons/search.png"
              alt="search"
              className="h-[16px] w-[16px]"
              height={20}
                width={20}
            />
            <Link href={"/cart"}>
              <Image
                src="/icons/shoping-cart.png"
                alt="shopping-cart"
                height={20}
                width={20}
                className="h-[16px] w-[16px]"
              />
            </Link>
            {cart.length > 0 && (
              <Badge className="absolute top-10 left-80 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </Badge>
            )}
           <Link href={'/profile'}>
           <Image
              src="/icons/user-avatar.png"
              alt="user avatar"
              className="h-[16px] w-[16px]"
              height={20}
                width={20}
              />
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Image
                  src="/icons/menu.png"
                  alt="menu"
                  className="h-[16px] w-[16px]"
                  height={20}
                width={20}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <h2 className="text-lg font-clash font-[200] mb-4">Menu</h2>
              <ul className="flex flex-col gap-4">
                {navLinks.map(
                  (item: { name: string; herf: string }, index: number) => (
                    <Link href={item.herf} key={index}>
                      <li className="text-base font-satoshi font-[200]">
                        {item.name}
                      </li>
                    </Link>
                  )
                )}
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
    </div>
  );
};

export default Headerv2;
