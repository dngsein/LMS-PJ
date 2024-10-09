import React from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoute } from "@/components/navbar-routes";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoute />
    </div>
  );
};
