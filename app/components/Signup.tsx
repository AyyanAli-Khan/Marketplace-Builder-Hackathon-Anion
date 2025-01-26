import React from 'react';

export default function Signup() {
  return (
    <div className="w-full mt-4 h-auto flex flex-col items-center gap-7 md:gap-[72px] px-6 py-6 md:py-[68px]">
      <div
        className="text-primary flex flex-col items-center justify-between gap-[20px] w-full md:w-3/4"
      >
        <h1 className="text-h4 md:text-h1 text-primary font-clash font-[300] text-center">
          Join the club and get the benefits
        </h1>
        <p className="text-h6 md:text-h5 w-full md:w-[40%] text-center font-satoshi">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 h-fit md:h-[56px] w-full md:w-[472px]">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 md:py-0 h-[56px] w-full md:w-[80%] rounded-md md:rounded-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@gmail.com"
        />
        <button
          className="bg-primary font-satoshi font-[200] text-white h-[56px] w-full md:w-[20%] text-h6 md:text-h5 rounded-md md:rounded-none"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
