import Image from "next/image";
import React from "react";

interface PROPS {
  src: string,
  title: string,
  price: number | string,
  className?: string,
  lazyloading?: boolean 
}

const NewProductCard = ({src, title, price , className, lazyloading}: PROPS) => {

 const loading: "lazy" | "eager" = lazyloading? "lazy":"eager" ;

  return (
    <div className={`mt-6 hover:scale-105 transition-all ease-linear duration-200 h-fit w-26  md:w-[305px] text-primary md:h-[462px] ${className}`}>
      <Image
        src={src}
        alt="product image"
        className="md:h-[80%] h-56 w-full"
        loading={loading}
        height={1000}
        width={1000}
      />
      <div className="flex justify-between gap-2 py-2 md:py-4 flex-col">
        <h4 className="text-h4 tracking-tight font-clash font-[300]">{title}</h4>
        <p className="text-[18px] font-satoshi font-[300]">£{price}</p>
      </div>
    </div>
  );
};

export default NewProductCard;
