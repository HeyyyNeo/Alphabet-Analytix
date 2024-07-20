"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AvatarUI from "@/src/general/avatar";
import { reviews } from "@/src/utils/home/offerings";
import { BadgeCheck } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

type ReviewsDataType = {
  content?: string;
  bio?: any;
};

function Reviews() {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="font-black mt-0 mb-5 text-3xl calsans opacity-80 pb-2">
        {reviews.heading}
      </h2>
      <div className="flex">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-screen max-w-6xl"
        >
          <CarouselContent className="">
            {[...reviews.bySchools, ...reviews.byTeachers].map(
              (review: ReviewsDataType, index: Number) => (
                <CarouselItem className="flex flex-col pl-4 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <div className="flex">
                        <AvatarUI className="h-16 w-16" />
                        <div className="flex flex-col mx-5 aspekta font-thin">
                          <div className="flex">
                            <span>{review?.bio?.name}</span>
                            <BadgeCheck className="h-4 w-4 text-cyan my-0.5 mx-2" />
                          </div>
                          <span className="calsans text-md opacity-75">
                            {review?.bio?.schoolName}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="font-thin aspekta">
                      {review.content}
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
