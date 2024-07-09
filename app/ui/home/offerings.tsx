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
    <div className="w-screen grid grid-cols-2 gap-4 px-40">
      {detailedOfferings.map((offerings: OfferingsType, index: number) => (
        <Card className="max-w-47">
          <CardHeader className="text-2xl font-black relative">
            {offerings.heading}
          </CardHeader>
          <CardContent className="text-gray">
            {offerings.solutionText}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Offerings;
