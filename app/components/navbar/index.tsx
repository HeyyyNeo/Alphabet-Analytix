"use client"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface NavigationItems {
  heading: string,
  headingIcon?: any,
  headingFollowUpList: any[]
}

type NavigationBarType = {
  navigationMenuItems: NavigationItems[]
}

const NavigationBar: React.FC<NavigationBarType> = ({ navigationMenuItems }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {navigationMenuItems.map((item: NavigationItems)=>(
            <>
              <NavigationMenuTrigger>{item.heading}</NavigationMenuTrigger>
              <NavigationMenuContent>
                
              </NavigationMenuContent>
            </>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationBar;