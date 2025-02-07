"use client"
import { CartProduct, useCart } from "@/context/CartContext";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CheckoutPage: React.FC = () => {
    const {cart} = useCart();

//   const [cart] = useState<Product[]>([
//     {
//       id: 1,
//       name: "Modern Chair",
//       image: "https://via.placeholder.com/100",
//       price: 120,
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: "Elegant Sofa",
//       image: "https://via.placeholder.com/100",
//       price: 250,
//       quantity: 1,
//     },
//   ]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <>
    <Header />
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 flex flex-col md:flex-row gap-6">
     
      {/* Cart Section */}
      <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-3xl font-clash  font-300 mb-4 text-gray-700">Checkout</h2>
        <div>
          {cart.map((item: CartProduct, index: number) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <Image src={item.image_url} alt={item.name} className="w-24 h-24 object-cover rounded-lg"  height={50}
                width={50}/>
              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
                <p className="font-semibold text-gray-800">Qty: {item.quantity}</p>
              </div>
              <div>
              <h3 className="font-semibold text-lg text-gray-800">Price</h3>
              <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary & Form Section */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Order Summary */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-clash  font-300 mb-4 text-gray-700">Order Summary</h3>
          <p className="flex font-satoshi justify-between text-gray-600"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></p>
          <p className="flex font-satoshi justify-between text-gray-600"><span>Tax (10%):</span> <span>${tax.toFixed(2)}</span></p>
          <p className="flex font-satoshi justify-between font-bold text-xl text-gray-800"><span>Total:</span> <span>${total.toFixed(2)}</span></p>
        </div>

        {/* Checkout Form */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-xl font-clash font-300 mb-4 text-gray-700">Shipping Information</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
            <input type="text" placeholder="Shipping Address" className="w-full p-3 border rounded-lg" required />
            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  );
};

export default CheckoutPage;
