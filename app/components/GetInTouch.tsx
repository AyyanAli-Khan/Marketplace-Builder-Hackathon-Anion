import { Button } from '@/components/ui/button'
import React from 'react'

export default function GetInTouch() {
  return (
    <div className="w-full h-auto md:h-[603px] flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="h-full text-left w-full md:w-1/2 pt-[40px] md:pt-[72px] px-6 md:px-[84px] flex flex-col justify-between">
        <div>
          <h3 className="text-h3 font-clash font-[300] text-primary">
            From a studio in London to a global brand with over 400 outlets
          </h3>
          <p className="font-satoshi text-[#505977] pt-[25px] font-[300]">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique
            became the hotbed for the London interior design community.
          </p>
        </div>

        <div>
          <Button className="font-satoshi mt-8 md:mb-[54px] bg-muted rounded-none font-[300] text-h5 hover:bg-destructive py-5 px-8 w-full md:w-auto">
            Get in touch
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="h-[300px] md:h-full w-full md:w-1/2 mt-6 md:mt-0">
        <img
          src="/images/bigImage.png"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

