import { navigationUIItems } from "@/src/utils/home/navigationBar";
import { Button } from "@/components/ui/button";
import ThemeIcons from "@/src/general/themeIcons";
import Pulse from "@/src/general/pulse";
import DrawerWithTriggerAndContent from "@/src/general/drawerWithContent";
import AuthComponent from "@/src/auth";

type variantTypes =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | null
  | undefined
  | string;

type excludeConfig = {
  [key: string]: boolean;
};

function Navigation({ excludeConfig }: { excludeConfig?: excludeConfig }) {
  return (
    <div className="flex w-screen items-center py-3 px-4 mb-5">
      <div className="hidden flex-1 calsans font-bold tracking-widestForLogo md:block">
        <a href="/">ALPHABET.ANALYTIX</a>
      </div>
      <div className="flex gap-3">
        {navigationUIItems.map(
          ({
            heading,
            variant,
            pulse,
            href,
            isDrawer,
            additionalClasses,
          }: {
            heading: string;
            pulse?: Boolean;
            href?: string;
            variant: variantTypes;
            isDrawer?: Boolean;
            additionalClasses: string[];
          }) => (
            <>
              {!isDrawer && !excludeConfig?.[heading] && (
                <Button
                  // @ts-ignore
                  variant={variant}
                  key={`${heading}-nav`}
                  className={`${additionalClasses.join(" ")} dark:border-cyan relative`}
                >
                  {!href && heading}
                  {href && <a href={href}>{heading}</a>}
                  {pulse && <Pulse />}
                </Button>
              )}
              {isDrawer && (
                <DrawerWithTriggerAndContent trigger={"Login"}>
                  <AuthComponent />
                </DrawerWithTriggerAndContent>
              )}
            </>
          )
        )}
        <ThemeIcons />
      </div>
    </div>
  );
}

export default Navigation;
