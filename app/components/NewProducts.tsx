"use client";
import React, { useEffect, useState } from "react";
import NewProductCard from "./NewProductCard";
import ViewButtton from "@/components/ui/ViewButton";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  name: string;
  price: string;
  _id: string;
  image_url: string;
  slug: {
    _type: string;
    current: string;
  };
}

const NewProducts = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const getData = async () => {
      const query = `
    *[_type=="product"][1..4]{
     _id,
     name,
      price,
     "image_url":image.asset->url,
     slug
      }
      `;
      const resp = await client.fetch(query);
      setProducts(resp);
    };
    getData();
  }, []);

  return (
    <div className="w-full h-fit  bg-white py-[24px] px-6 md:px-[80px] md:py-[80px]">
      {/* Heading */}
      <h2 className="text-h2 text-primary font-clash font-[300] mb-8 md:mb-2">
        New ceramics
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 items-center">
        {products &&
          products?.map((item: Product, index) => (
            <Link key={index}  href={"/products/" + item.slug.current}>
              <NewProductCard
                key={index}
                src={item.image_url}
                title={item.name}
                price={item.price}
              />
            </Link>
          ))}
      </div>

      {/* View Button */}
      <div className="flex justify-center md:mt-8">
        <ViewButtton />
      </div>
    </div>
  );
};

export default NewProducts;
