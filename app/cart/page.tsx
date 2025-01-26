"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext"; // Import the useCart hook
import { CartProduct } from "@/context/CartContext";
import Image from "next/image"

export default function Page() {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Get cart data and functions

  const handleRemoveButton = (productName: string) => {
    removeFromCart(productName)
  }

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <div className="w-full px-6 md:h-fit md:py-[64px] md:px-[188px] bg-muted">
        <h1 className="text-h1 font-clash font-[300] text-center md:text-left">
          Your shopping cart
        </h1>
        <div className="grid md:grid-cols-6 md:gap-x-52 w-full md:mt-10 items-center">
          <div className="col-span-3 hidden md:block">
            <h6 className="text-h6 font-clash font-[200]">Product</h6>
          </div>
          <div className="hidden md:block">
            <h6 className="text-h6 font-clash font-[200]">Quantity</h6>
          </div>
          <div className="hidden md:block">
            <h6 className="text-h6 font-clash font-[200]">Total</h6>
          </div>
          <div className="hidden md:block">
            <h6 className="text-h6 font-clash font-[200]">Action</h6>
          </div>

          {cart.map((item: CartProduct) => (
            <React.Fragment key={item.name}>
              <div className="col-span-3 pt-5">
                <div className="h-auto md:h-[180px] w-full flex flex-row items-center gap-4">
                  <Image src={item.image_url}
                    alt={item.name}
                    className="h-[100px] w-[100px] md:h-full md:w-1/2 object-cover"
                  />
                  <div className="p-[10px] w-full flex flex-col justify-between text-left">
                    <h6 className="font-clash font-[400] text-h4">{item.name}</h6>
                    {/* <p className="font-satoshi font-[200] text-h6">{item.description}</p> */}
                    <p className="font-satoshi font-[200] text-h6">uilggrbhkg.kjhjfsdn,svjk.so;iyh</p>
                    <h1 className="text-h5 font-satoshi font-[200]">£{item.price}</h1>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.name, Number(e.target.value))}
                  className="text-center border rounded-md w-16"
                />
              </div>
              <div className="hidden md:block">
                <h6 className="text-h6 font-clash font-[200] text-center">£{(item.price * item.quantity).toFixed(2)}</h6>
              </div>
              <div >
                <Button
                onClick={()=>handleRemoveButton(item.name)}
                >Remove</Button>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Subtotal Section */}
        <div className="w-full h-fit mb-10 flex flex-col md:mt-[28px] md:flex-row md:justify-end">
          <div className="w-full md:w-fit text-left md:text-right">
            <h4 className="text-primary text-h4 font-clash font-[200]">
              Subtotal &nbsp;&nbsp;{" "}
              <span className="text-black font-[300]">£{subtotal.toFixed(2)}</span>
            </h4>
            <p className="text-primary font-satoshi font-[200] text-h6">
              Taxes and shipping are calculated at checkout
            </p>
            <Button className="w-full md:w-auto text-h5 text-white bg-primary hover:bg-secondary hover:text-white mt-3 md:mt-6 font-[300] rounded-none py-[24px] leading-none px-[32px]">
              Go to checkout
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}