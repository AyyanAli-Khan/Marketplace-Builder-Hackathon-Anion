"use client";
import React, { useEffect, useState } from "react";
import NewProductCard from "./NewProductCard";
import ViewButtton from "@/components/ui/ViewButton";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface PopularProducts {
  name: string;
  price: string;
  _id: string;
  image_url: string;
  slug: {
    _type: string;
    current: string;
  };
}

const PopularProduct = () => {
  const [popularProduct, setPopularProduct] = useState<PopularProducts[]>();

  useEffect(() => {
    const getData = async () => {
      const query = `
    *[_type=="product"][5..8]{
     _id,
     name,
      price,
     "image_url":image.asset->url,
     slug,
      }
      `;
      const resp = await client.fetch(query);
      setPopularProduct(resp);
    };
    getData();
  }, []);

  return (
    <section className="w-full min-h-[744px] px-6 py-6 md:pt-[64px] md:px-[80px]">
      <h2 className="text-primary text-h4 md:text-h2 font-clash font-[300]">
        Our popular products
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 items-center">
        {popularProduct &&
          popularProduct.map((product: PopularProducts, index: number) => (
            <Link href={"/products/" + product.slug.current} key={index}>
              <NewProductCard
                src={product.image_url}
                title={product.name}
                price={product.price}
              />
            </Link>
          ))}
      </div>

      <div className="flex items-center justify-center">
        <ViewButtton />
      </div>
    </section>
  );
};

export default PopularProduct;
