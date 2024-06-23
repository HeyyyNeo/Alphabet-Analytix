import { heroSection } from "@/app/utils/home/heroSection";

function HeroSection() {
  return (
    <div className="p-10">
      <h1 className="font-black lg:text-7xl aspekta text-7xl">
        {heroSection.heading}
      </h1>
      <h2 className="font-black lg:text-9xl aspekta text-7xl">
        {heroSection.subHeading}
      </h2>
      <h3 className="font-black lg:text-6xl aspekta text-7xl">
        {heroSection.thirdFoldHeading}
      </h3>
    </div>
  );
}

export default HeroSection;
