import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { reviews } from "@/src/utils/home/offerings";

type ReviewsDataType = {
  byStudents?: string[];
  byTeachers?: string[];
  heading?: string;
};

function Reviews() {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="font-black my-10 text-2xl">{reviews.heading}</h2>
      <div className="flex">
        {[...reviews.bySchools, ...reviews.byTeachers].map(
          (review: ReviewsDataType, index: Number) => (
            <Carousel key={review.heading}>
              <CarouselContent className="-ml-4">
                <CarouselItem className="pl-4 lg:basis-1/3">
                  <Card></Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          )
        )}
      </div>
    </div>
  );
}

export default Reviews;
