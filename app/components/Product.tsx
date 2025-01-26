"use client"
import React ,{ useState} from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';



interface PROPS {
    image_url: string,
    product_name: string,
    price: number,
    description: string,
    features: string[],
    dimensions: {
      height: string,
      width: string,
      depth: string,
    },
    // quantity: number,


}


const ProductPage = ({image_url , product_name , price,description,features,dimensions}:PROPS) => {

  const { addToCart, updateQuantity} = useCart();


  

  const handleAddToCart = () => {
    addToCart({
        name: product_name,
        price: price,
        image_url: image_url,
        quantity: quantity,
    });

    alert("item add to cart")
}

const handleUpdateQuantity = () =>{
  updateQuantity(product_name,quantity)
}

    const [quantity, setQuantity] = useState<number>(1);


    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1); // Increment quantity
        handleUpdateQuantity()
    };
    
    const decrementQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Decrement but not below 1
        handleUpdateQuantity()
    };

  return (
    <div>
          <div className="w-full h-fit md:max-h-[760px]  min-md:h-[760px] grid md:grid-cols-2 grid-cols-1 p-0 ">
        <div className=" max-h-[760px] w-full ">
          <Image
            src={image_url}
            alt="product image"
            height={1000}
            width={1000}
            className="h-full w-full object-cover object-center"
            priority 
          />
        </div>
        
        {/* Image Details */}
        <div className="h-fit py-6 px-6 md:py-[51px] md:px-[55px] ">
          <div className="md:p-[40px]  h-full w-full">
            <div>
              <h1 className="text-h3 md:text-h1 font-clash font-[300]">
               {product_name}
              </h1>
              <h4 className="text-h4 font-satoshi font-[200] ">£{price}</h4>
            </div>
            <div className="mt-5  md:mt-14 text-h6 flex justify-between flex-col gap-[20px]">
              <h5 className="text-h5 text-primary font-clash font-[200]">
                Description
              </h5>

              <p className="text-h6 md:text-h5 text-[#505977] font-satoshi font-[200]">
               {description}
              </p>

              <ul className=" list-disc font-satoshi font-[200] px-5 text-[#505977]">
              {features.map((item: string, index: number)=>(
              <li key={index}>{item}</li>
              ))}
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
                    {dimensions.height}
                  </h6>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-primary text-h6 font-clash font-[200] ">
                    Width
                  </h6>
                  <h6 className="text-primary font-satoshi font-[200] text-h5 ">
                  {dimensions.width}
                  </h6>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-primary text-h6 font-clash font-[200] ">
                    Depth
                  </h6>
                  <h6 className="text-primary font-satoshi font-[200] text-h5 ">
                  {dimensions.depth}
                  </h6>
                </div>
              </div>
            </div>
            <div className="py-7 flex items-center md:flex-row flex-col justify-between">
              {/* <h6 className="text-primary text-h6 font-clash font-[200]">
             Quantity: <span className="pl-10">{quantity}</span>
                 

                 
              </h6> */}
            {/* <div className="flex items-center">
        <h6 className="text-primary text-h6 font-clash font-[200]">Quantity:</h6>
        <div className="flex items-center ml-4">
          {/* Decrement Button *
          <button
            onClick={decrementQuantity}
            className="text-white bg-primary  hover:bg-secondary font-satoshi font-[300] rounded-l-md py-[12px] px-[20px] hover:text-white transition"
          >
            -
          </button>

          {/* Quantity Display 
          <span className="px-4 text-primary font-satoshi text-h6">{quantity}</span>

          {/* Increment Button 
          <button
            onClick={incrementQuantity}
            className="text-white bg-primary hover:bg-secondary font-satoshi font-[300] rounded-r-md py-[12px] px-[20px] hover:text-white transition"
          >
            +
          </button>
        </div>
            </div> */}

<div className="flex items-center">
        <h6 className="text-primary text-h6 font-clash font-[200]">Quantity:</h6>
        <div className="flex items-center ml-4 space-x-2">
          {/* Decrement Button */}
          <button
            onClick={decrementQuantity}
            className="text-white bg-primary hover:bg-muted font-satoshi font-[300] rounded-l-md py-[12px] px-[20px] hover:text-black transition"
          >
            -
          </button>

          {/* Quantity Display */}
          <span className="px-4 text-primary font-satoshi text-h6">{quantity}</span>

          {/* Increment Button */}
          <button
            onClick={incrementQuantity}
            className="text-white bg-primary hover:bg-muted font-satoshi font-[300] rounded-r-md py-[12px] px-[20px] hover:text-black transition"
          >
            +
          </button>
        </div>
      </div>
              {/* <Link href="/cart2"> */}
                <Button 
                onClick={handleAddToCart}
                className="text-h5 mt-3  sm:w-full md:w-24 text-white bg-primary  hover:bg-secondary font-satoshi font-[300] rounded-md py-[24px] leading-none px-[32px]">
                  Add to Cart
                </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage;