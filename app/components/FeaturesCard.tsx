import Image from "next/image";
import React from "react";

interface PROPS {
  heading: string;
  text: string;
  iconPath: string;
}

const FeaturesCard = ({ heading, text, iconPath }: PROPS) => {
  return (
    <div className="text-primary mt-8 md:mt-12 flex flex-col items-start md:items-start justify-start w-full md:w-62 h-auto">
      {/* Icon */}
      <Image src={iconPath} alt="icon" height={24} width={24} className="mb-4" />
      {/* Heading */}
      <p className="text-h3 font-clash  font-[200] text-left  ">
        {heading}
      </p>

      {/* Text */}
      <p className="text-h5 w-[260px] text-left mt-2">{text}</p>
    </div>
  );
};

export default FeaturesCard;
