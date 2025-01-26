import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import FeaturesCard from "../components/FeaturesCard";
import Link from "next/link";
import NewProductCard from "../components/NewProductCard";
import ViewButtton from "@/components/ui/ViewButton";

export default function Page() {

    const NewProductDetails = [
        {
          src: '/images/hero image.png',
          title: 'The Dandy chair',
          price: 250,
        },
        {
          src: '/images/dark chair.png',
          title: 'The Dark chair',
          price: 250,
        },
        {
          src: '/images/hero image.png',
          title: 'The Dandy chair',
          price: 250,
        },
        {
          src: '/images/hero image.png',
          title: 'The Dandy chair',
          price: 250,
        },
        {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
          {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
          {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
          {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
          {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
          {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
          {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
          {
            src: '/images/hero image.png',
            title: 'The Dandy chair',
            price: 250,
          },
      ];


  return (
    <div className="w-full relative">
      <div>
        <Header />
      </div>

      <div className="w-full background ">
        <h1 className="text-center block md:hidden font-clash md:text-h1 font-[400]">All Products</h1>
      </div>

      <div className="w-full h-[64px]  px-8 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-10 ">
          <div className="flex items-center gap-2">
            <h5 className="text-primary md:block font-satoshi font-[200] sm:hidden text-h5">
              Category
            </h5>
            <Image
              src="/icons/drop-down.png"
              alt="icon"
              height={16}
              width={16}
            />
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-primary md:block font-satoshi font-[200] sm:hidden text text-h5">
              Product type
            </h5>
            <Image
              src="/icons/drop-down.png"
              alt="icon"
              height={16}
              width={16}
            />
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-primary md:block font-satoshi font-[200] sm:hidden text-h5">
              Price
            </h5>
            <Image
              src="/icons/drop-down.png"
              alt="icon"
              height={16}
              width={16}
            />
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-primary font-satoshi font-[200] sm:hidden md:block text-h5">
              Brand
            </h5>
            <Image
              src="/icons/drop-down.png"
              alt="icon"
              height={16}
              width={16}
            />
          </div>
        </div>

        <div className="flex items-center gap-10">
          <h6 className="font-satoshi font-[200] text-h6 text-primary">
            Sorting by:
          </h6>

          <div className="md:flex items-center gap-2 hidden mr-10">
            <h5 className="text-primary font-satoshi font-[200] sm:hidden md:block text-h5">
              Date added
            </h5>
            <Image
              src="/icons/drop-down.png"
              alt="icon"
              height={16}
              width={16}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[64px]  px-8 md:hidden flex items-center justify-around">
        <div className="flex  bg-[#F9F9F9] py-2 px-4 items-center gap-2">
          <h5 className="text-primary md:block font-satoshi font-[200] sm:hidden text-h5">
          Filters
          </h5>
          <Image src="/icons/drop-down.png" alt="icon" height={16} width={16} />
        </div>
        <div className="flex bg-[#F9F9F9] py-2 px-4 items-center gap-2">
          <h5 className="text-primary md:block font-satoshi font-[200] sm:hidden text-h5">
            Sorting
          </h5>
          <Image src="/icons/drop-down.png" alt="icon" height={16} width={16} />
        </div>
      </div>


      <div>
      <div className="grid grid-cols-2 md:px-[80px] md:py-[30px] lg:grid-cols-4 gap-2 md:gap-6 items-center">
        {NewProductDetails.map((item, index) => (
          <Link key={index} href='/productlist'><NewProductCard key={index} src={item.src} title={item.title} price={item.price} /></Link>
        ))}
      </div>

      <div className="flex justify-center md:mb-10">
        <ViewButtton />
      </div>
      </div>


      <div>
        <Footer />
      </div>
    </div>
  );
}
