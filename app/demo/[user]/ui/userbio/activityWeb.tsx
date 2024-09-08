import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ActivityWebGraphComponentType = {
  graphUtil: Function;
};

const ActivityWebGraph: React.FC<ActivityWebGraphComponentType> = ({
  graphUtil,
}) => {
  const numberOfYearsActivity = graphUtil();
  /* const activityConfig = apiRequestToHandleNewGraphOnRequest */

  return (
    <div className="flex flex-col">
      <div className="flex my-5">
        <Tabs defaultValue={numberOfYearsActivity[0].year}>
          <TabsList>
            {numberOfYearsActivity.map((activityConfig: any) => (
              <TabsTrigger value={activityConfig.year} className="px-5">
                {activityConfig.year}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <Card className="w-screen h-40">
        <CardContent />
      </Card>
    </div>
  );
};

export default ActivityWebGraph;
