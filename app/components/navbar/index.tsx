"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationItems {
  heading: string;
  headingIcon?: any;
  fw?: string;
  ff?: string;
  marginConfig?: string;
  headingFollowUpList: any[];
}

type NavigationBarType = {
  navigationMenuItems: NavigationItems[];
};

const NavigationBar: React.FC<NavigationBarType> = ({
  navigationMenuItems,
}) => {
  return (
    <NavigationMenu className="w-screen min-w-full justify-start">
      <NavigationMenuList className="w-screen min-w-full justify-start">
        <NavigationMenuItem className="w-screen min-w-full flex">
          {navigationMenuItems.map((item: NavigationItems) => (
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} cursor-pointer lg:text p-2 ${item.marginConfig}`}
            >
              {item.heading}
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
