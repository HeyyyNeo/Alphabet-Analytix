"use client";

import CompanyLogo from "@/src/general/logo";
import { heroSection } from "@/src/utils/home/heroSection";
import { offeringsSummary } from "@/src/utils/home/offerings";

function HeroSection() {
  return (
    <div className="md:p-10 text-center">
      <CompanyLogo />
      <h1 className="font-black lg:text-7xl text-2xl md:text-4xl aspekta text-center mt-5 md:mt-0">
        {heroSection.heading}
      </h1>
      <div className="flex justify-center animate-pulse">
        {/* @ts-ignore */}
        {[...heroSection.subHeading].map((char: string, index: any) => (
          <h1
            key={`${char}-${index}`}
            className={`font-black lg:text-7xl text-2xl md:text-4xl aspekta text-center text-purple`}
          >
            {char.trim() === "" ? <span>&nbsp;</span> : char}
          </h1>
        ))}
      </div>
      <h1 className="font-black lg:text-7xl text-2xl md:text-4xl aspekta text-center">
        {heroSection.thirdFoldHeading}
      </h1>
      <div className="flex justify-center">
        <p className="text-center text-gray m-5 text-sm lg:text-lg md:text-lg max-w-5xl font-thin">
          {offeringsSummary}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
