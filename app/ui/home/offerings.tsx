import { CardHeader, Card, CardContent } from "@/components/ui/card";
import { detailedOfferings } from "@/src/utils/home/offerings";

type OfferingsType = {
  heading: string;
  teacherIcon: any;
  solutionText: string;
  studentIcon: any;
};

function Offerings() {
  return (
    <div className="flex max-w-screen-2xl justify-center mx-auto">
      <div className="grid lg:grid-cols-2 gap-4 px-5 md:px-40">
        {detailedOfferings.map((offerings: OfferingsType, index: number) => (
          <Card>
            <CardHeader className="text-2xl md:text-2xl calsans relative">
              {offerings.heading}
            </CardHeader>
            <CardContent className="text-gray">
              {offerings.solutionText}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Offerings;
