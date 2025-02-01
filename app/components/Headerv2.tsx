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

const Headerv2 = () => {
  const { cart } = useCart();
  const navLinks = [
    { name: "Plant pots", herf: "/" },
    { name: "Ceramics", herf: "/" },
    { name: "Tables", herf: "/" },
    { name: "Chairs", herf: "/" },
    { name: "Crockery", herf: "/" },
    { name: "Tableware", herf: "/" },
    { name: "Cutlery", herf: "/" },
    {
      name: "About page",
      herf: "/about",
    },
    {
      name: "All Product List Page",
      herf: "/allproductlist",
    },
    {
      name: "Product Page",
      herf: "/product",
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
          <img
            src="/icons/search.png"
            alt="search"
            className="h-[16px] w-[16px]"
          />
          <Link href="/cart">
            <img
              src="/icons/shoping-cart.png"
              alt="shopping-cart"
              className="h-[16px] w-[16px]"
            />
          </Link>
          {cart.length > 0 && ( // Show badge only if cart is not empty
            <Badge className="absolute top-12 right-24 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </Badge>
          )}
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
