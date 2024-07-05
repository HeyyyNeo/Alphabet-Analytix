import { navigationUIItems } from "@/src/utils/home/navigationBar";
import { Button } from "@/components/ui/button";
import ThemeIcons from "@/src/general/themeIcons";

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
            additionalClasses,
          }: {
            heading: string;
            variant: variantTypes;
            additionalClasses: string[];
          }) => (
            <Button
              // @ts-ignore
              variant={variant}
              key={`${heading}-nav`}
              className={`${additionalClasses.join(" ")} dark:border-cyan`}
            >
              {heading}
            </Button>
          )
        )}
        <ThemeIcons />
      </div>
    </div>
  );
}

export default Navigation;
