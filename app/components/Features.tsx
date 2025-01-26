import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const featureCardDetails = [
    {
      iconPath: "/icons/Delivery.png",
      heading: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard",
    },
    {
      iconPath: "/icons/Checkmark.png",
      heading: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      iconPath: "/icons/Purchase.png",
      heading: "Unbeatable prices",
      text: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      iconPath: "/icons/Sprout.png",
      heading: "Recycled packaging",
      text: "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  return (
    <section className="w-full px-6 text-primary pt-[60px]  md:px-[86px]">
      {/* Heading */}
      <h1 className="text-h3 font-clash text-left md:text-center font-[300]">
        What makes our brand different
      </h1>

      {/* Cards Container */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-5 justify-start md:justify-around mt-8">
        {featureCardDetails.map((featureCard, index: number) => (
       <div key={index}>
           <FeaturesCard 
            heading={featureCard.heading}
            text={featureCard.text}
            iconPath={featureCard.iconPath}
            key={index}
          />
       </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
