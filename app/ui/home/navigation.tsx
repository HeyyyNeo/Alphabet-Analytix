import { navigationUIItems } from "@/src/utils/home/navigationBar";
import { Button } from "@/components/ui/button";
import ThemeIcons from "@/src/general/themeIcons";
import Pulse from "@/src/general/pulse";

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

function Navigation() {
  return (
    <div className="flex w-screen items-center py-3 px-4 mb-10">
      <div className="flex-1 calsans font-bold tracking-widestForLogo">
        ALPHABET.ANALYTIX
      </div>
      <div className="flex gap-3">
        {navigationUIItems.map(
          ({
            heading,
            variant,
            pulse,
            additionalClasses,
          }: {
            heading: string;
            pulse?: Boolean;
            variant: variantTypes;
            additionalClasses: string[];
          }) => (
            <Button
              // @ts-ignore
              variant={variant}
              key={`${heading}-nav`}
              href="/["
              className={`${additionalClasses.join(" ")} dark:border-cyan relative`}
            >
              {heading}
              {pulse && <Pulse />}
            </Button>
          )
        )}
        <ThemeIcons />
      </div>
    </div>
  );
}

export default Navigation;
