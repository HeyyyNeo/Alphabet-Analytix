"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TabContentLayout from "@/app/demo/[user]/ui/layout";
import { tabsType } from "@/app/demo/[user]/ui/tabs";

type userTabsConfigType = {
  userTabs: tabsType[];
};

function VerticalTabs({
  userTabsConfig,
}: {
  userTabsConfig: userTabsConfigType;
}) {
  const { userTabs } = userTabsConfig;

  return (
    <Tabs defaultValue={userTabs[0].tabText} className="ml-2 min-h-96">
      <TabsList className="mb-2 flex flex-col justify-start items-start bg-transparent ht-auto">
        {userTabs.map((tab: tabsType) => {
          const Component = tab?.icon;

          return (
            <TabsTrigger
              value={tab.tabText}
              className="pl-2 py-2.5 pr-10 hover:bg-muted data-[state=active]:shadow-none flex items-center my-1 rounded-md"
            >
              <Component className="h-4 w-4 mr-3" />
              <span>{tab.tabText}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {userTabs.map((tab: tabsType) => (
        <>
          <TabsContent value={tab.tabText}>
            {<TabContentLayout componentIdentifier={tab.tabText} />}
          </TabsContent>
        </>
      ))}
    </Tabs>
  );
}

export default VerticalTabs;
