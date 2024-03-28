"use client";
import React from "react";
import Navigation from "./navigation/navigation";
import { useStickyNavigation } from "@/context/navigation-sticky-context";

function Header() {
  const { isSticky } = useStickyNavigation();
  // sticky bg-darkest-blue
  return (
    <header
      className={`text-white font-medium w-100 transition-3ms ${
        isSticky
          ? "bg-darkest-blue sticky shadow-soft"
          : "bg-transparent absolute"
      }`}
    >
      <Navigation />
    </header>
  );
}

export default Header;
