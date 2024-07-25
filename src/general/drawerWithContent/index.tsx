import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

function DrawerWithTriggerAndContent({
  trigger,
  children,
}: {
  trigger: string;
  children: React.ReactNode;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>{trigger}</Button>
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
}

export default DrawerWithTriggerAndContent;
