import React from "react";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex justify-center items-center">
        <Logo />
          <p className="text-orange-600 font-bold text-3xl ml-3">Omaco</p>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes/>

      </div>
    </div>
  );
};
