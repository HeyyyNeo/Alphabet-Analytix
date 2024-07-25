import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import CompanyLogo from "@/src/general/logo";
import { pricingTiers } from "@/src/utils/pricing/details";
import { CircleCheck } from "lucide-react";

type tierInfoProp = {
  heading: string;
  description?: string[];
  pricing: string;
  period: string;
};

function HeroSection() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <CompanyLogo />
      <div className="flex grid md:grid-cols-3 gap-10 w-screen max-w-screen-xl my-10 px-5 md:px-0">
        {pricingTiers.map((tierInfo: tierInfoProp, index: number) => (
          <Card className="w-xl shadow-md flex flex-col" key={tierInfo.heading}>
            <CardHeader className="text-2xl font-normal calsans">
              {tierInfo.heading}
              <hr className="w-10 bg-teal" style={{ padding: "0.5px" }} />
            </CardHeader>
            <CardContent
              className="text-sm font-thin aspekta"
              key={`${tierInfo.heading}-heading`}
            >
              <div
                className="font-bold text-2xl mb-5 flex"
                key={`${tierInfo.heading}-heading`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  height={22}
                  style={{ margin: "5px 10px 0 0" }}
                >
                  <path
                    fill="#63E6BE"
                    d="M308 96c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v44.7c0 6.6 5.4 12 12 12h85.3c27.3 0 48.3 10 61 27.3H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h158.8c-6.2 36.1-33 58.6-74.8 58.6H12c-6.6 0-12 5.4-12 12v53c0 3.3 1.4 6.5 3.9 8.8l165.1 152.4a12 12 0 0 0 8.1 3.2h82.6c10.9 0 16.2-13.4 8.1-20.8L116.9 319.9c76.5-2.3 131.1-53.4 138.3-127.9H308c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-58.7c-3.5-11.5-8.3-22.2-14.3-32H308z"
                  />
                </svg>
                {tierInfo.pricing}
              </div>
              {tierInfo.description?.map((info: string, index: number) => (
                <div className="flex" key={info}>
                  <span>
                    <CircleCheck className="h-4 w-4 mr-2 mt-3 rounded-full dark:text-gray text-black" />
                  </span>
                  <span className="my-2.5 aspekta font-normal text-md dark:text-coolgray text-black">
                    {info}
                  </span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="basis-full">
              <Button
                variant={"outline"}
                className="mt-auto basis-full bg-violet text-white"
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
