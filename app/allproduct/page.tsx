"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import NewProductCard from "../components/NewProductCard";
import ViewButtton from "@/components/ui/ViewButton";
import { client } from "@/sanity/lib/client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface ProductDetails {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: {
    _id: string;
    _type: string;
  };
  slug: {
    _type: string;
    current: string;
  };
}

export default function Page() {
  // const [allProducts, setAllProducts] = useState<ProductDetails[]>([]);
  // const [category, setCategory] = useState<string>("");

  const [allProducts, setAllProducts] = useState<ProductDetails[]>([]);
  //   const [category, setCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductDetails[]>(
    []
  );

  // const [product,setProduct]= useState<ProductDetails[]>([])

  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    "imageUrl": image.asset -> url,
    description,
    category->{_id, _type},
    slug,
  }`;

  const handleCategoyChange = (categoryId: string) => {
    console.log(categoryId);
    // setCategory(categoryId);
    // Filter products based on selected category
    if (categoryId === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category._id === categoryId
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const resp = await client.fetch(query);
      setAllProducts(resp);
      setFilteredProducts(resp); // Initially show all products
    };
    getProduct();
  }, []);

  return (
    <div className="w-full relative">
      <div>
        <Header />
      </div>

      <div className="w-full background ">
        <h1 className="text-center block md:hidden font-clash md:text-h1 font-[400]">
          All Products
        </h1>
      </div>

      {/* <div className="w-full h-[64px]  px-8 hidden md:flex items-center justify-between">
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
      </div> */}

      <div className="w-full h-[64px] px-8 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-10 ">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-10">
              {/* Category */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2">
                  <h5 className="text-primary font-satoshi font-[200] text-h5">
                    Category
                  </h5>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 bg-white rounded-md shadow-lg space-y-2">
                    <li onClick={() => handleCategoyChange("all")}>
                      <NavigationMenuLink className="cursor-pointer">
                        All
                      </NavigationMenuLink>
                    </li>
                    <li onClick={() => handleCategoyChange("ceramics-7")}>
                      <NavigationMenuLink className="cursor-pointer">
                        Ceramics
                      </NavigationMenuLink>
                    </li>
                    <li onClick={() => handleCategoyChange("chairs-2")}>
                      <NavigationMenuLink href="#">Chairs</NavigationMenuLink>
                    </li>
                    <li onClick={() => handleCategoyChange("crockory-24")}>
                      <NavigationMenuLink href="#">Crockory</NavigationMenuLink>
                    </li>
                    <li onClick={() => handleCategoyChange("cutlery-12")}>
                      <NavigationMenuLink href="#">Cutlery</NavigationMenuLink>
                    </li>
                    <li onClick={() => handleCategoyChange("plant-pots-3")}>
                      <NavigationMenuLink href="#">
                        Plant Pots
                      </NavigationMenuLink>
                    </li>
                    <li onClick={() => handleCategoyChange("tables-9")}>
                      <NavigationMenuLink href="#">Tables</NavigationMenuLink>
                    </li>
                    <li onClick={() => handleCategoyChange("tableware-1")}>
                      <NavigationMenuLink href="#">
                        Tableware
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-10">
              {/* Category */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2">
                  <h5 className="text-primary font-satoshi font-[200] text-h5">
                    Product type
                  </h5>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 bg-white rounded-md shadow-lg space-y-2">
                    <li>
                      <NavigationMenuLink href="#">
                        Electronics
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Clothing</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">
                        Home & Kitchen
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Sports</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-10">
              {/* Category */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2">
                  <h5 className="text-primary font-satoshi font-[200] text-h5">
                    Price
                  </h5>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 bg-white rounded-md shadow-lg space-y-2">
                    <li>
                      <NavigationMenuLink href="#">
                        Electronics
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Clothing</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">
                        Home & Kitchen
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Sports</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-10">
              {/* Category */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2">
                  <h5 className="text-primary font-satoshi font-[200] text-h5">
                    Brand
                  </h5>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 bg-white rounded-md shadow-lg space-y-2">
                    <li>
                      <NavigationMenuLink href="#">
                        Electronics
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Clothing</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">
                        Home & Kitchen
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Sports</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Right Section - Sorting */}
        <div className="flex items-center gap-10">
          <h6 className="font-satoshi font-[200] text-h6 text-primary">
            Sorting by:
          </h6>
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2 sm:hidden md:flex">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2">
                  <h5 className="text-primary font-satoshi font-[200] text-h5">
                    Date Added
                  </h5>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 bg-white rounded-md shadow-lg w-36 space-y-2">
                    <li>
                      <NavigationMenuLink href="#">
                        Newest First
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">
                        Oldest First
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">
                        Price: Low to High
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">
                        Price: High to Low
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
          {filteredProducts.map((product) => (
            <Link href={"/products/" + product.slug.current}>
              <NewProductCard
                className="cursor-pointer"
                key={product._id}
                src={product.imageUrl}
                title={product.name}
                price={product.price}
                lazyloading={true}
              />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
