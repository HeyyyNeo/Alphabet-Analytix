import { Card, CardContent } from "@/components/ui/card";
import { curricullumDataMock } from "@/src/lib/ui/user";
import Combobox from "@/src/general/comboBox";
import { Separator } from "@/components/ui/separator";
import VerticalTabs from "@/src/general/verticalTabs";
import { userTabsConfig } from "@/app/demo/utils";

export type tabsType = {
  tabText: string;
  icon?: any;
};

function TabsComponent() {
  return (
    <Card className="mx-4 px-0">
      <CardContent className="px-0">
        <Combobox
          title="Select Curricullum"
          options={curricullumDataMock}
          triggerClassName="ml-2 mt-2"
          dropdownClassName="bg-white dark:bg-black"
        />
        <Separator orientation="horizontal" className="mx-0 px-0 mt-2" />
        <VerticalTabs userTabsConfig={userTabsConfig} />
      </CardContent>
    </Card>
  );
}

export default TabsComponent;
