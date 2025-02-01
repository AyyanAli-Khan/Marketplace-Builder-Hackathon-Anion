"use client";
import React, { useContext, useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import ViewButtton from "@/components/ui/ViewButton";
import Image from "next/image";

import Link from "next/link";
import NewProductCard from "@/app/components/NewProductCard";
import { client } from "@/sanity/lib/client";
import Headerv2 from "@/app/components/Headerv2";
import Product from "@/app/components/Product";
import { Loader2 } from "lucide-react";

interface PRODUCTDETAILS {
  name: string;
  price: number;
  image_url: string;
  description: string;
  features: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  quantity: number;
}

interface Params {
  params: {
    name: string;
  };
}

export default function Page({ params }: Params) {
  const slug = params.name;
  const [productDetails, setProductDetails] = useState<PRODUCTDETAILS>();
  const [ceramicsDetails, setCeramicsDetails] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const Features = dynamic(() => import("@/app/components/Features"));
  const Signup = dynamic(() => import("@/app/components/Signup"));
  const ProductListFooter = dynamic(
    () => import("@/app/components/ProductListFooter")
  );

  const productContent = useMemo(() => {
    if (productDetails) {
      return (
        <Product
          product_name={productDetails.name}
          price={productDetails?.price}
          image_url={productDetails.image_url}
          features={productDetails.features}
          dimensions={productDetails.dimensions}
          description={productDetails.description}
        />
      );
    }
    return null;
  }, [productDetails]);

  // const {addToCart} = useCart();

  useEffect(() => {
    const getData = async () => {
      const query = `
      *[_type=='product' && slug.current == '${slug}']{
       name,
       price,
       "image_url":image.asset->url,
       description, 
       features,
       dimensions,
       category,
       quantity
    }
    `;

      const query2 = `
    *[_type=="product"&&tags[0]=="new ceramics"][1..4]{
    _id,
     name,
      price,
     "image_url":image.asset->url,
     slug
       
       }
    `;

      // console.log(query)

      const resp = await client.fetch(query);
      const resp2 = await client.fetch(query2);

      setProductDetails(resp[0]);
      setCeramicsDetails(resp2);

      try {
        const resp = await client.fetch(query);
        const resp2 = await client.fetch(query2);

        setProductDetails(resp[0]);
        setCeramicsDetails(resp2);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [slug]);

  return (
    <div>
      <Headerv2 />

      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Loader2 className="animate-spin text-primary h-10 w-10" />
        </div>
      ) : (
        productContent
      )}

      <div className="w-full h-auto  py-[24px] px-6 md:py-[80px] md:px-[80px]">
        <h2 className="text-h2 text-primary font-clash font-[300] mb-8 md:mb-0">
          New ceramics
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 items-center">
          {ceramicsDetails &&
            ceramicsDetails?.map(
              (
                item: {
                  name: string;
                  image_url: string;
                  price: number;
                  _id: string;
                  slug: { current: string; _type: string };
                },
                index: number
              ) => (
                <div key={index} className="cursor-pointer">
                  <Link href={"/products/" + item.slug.current}>
                    <NewProductCard
                      src={item.image_url}
                      title={item.name}
                      price={item.price}
                    />
                  </Link>
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
