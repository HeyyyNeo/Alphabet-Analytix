import Navigation from "@/app/ui/home/navigation";
import { TabsComponent } from "./ui";
import SpiderSquareWeb from "@/src/general/spiderSquareWeb";
import UserBio from "./ui/userbio";

const excludeConfig = {
  Login: true,
  Pricing: true,
};

function DashboardPage() {
  return (
    <div>
      <Navigation excludeConfig={excludeConfig} />
      <SpiderSquareWeb />
      <TabsComponent />
    </div>
  );
}

export default DashboardPage;
