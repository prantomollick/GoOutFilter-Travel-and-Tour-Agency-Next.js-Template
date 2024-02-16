import React from "react";
import { SubNavigationItem } from "./navigation-content";
import Link from "next/link";

interface TabCardProps {
  subNav: SubNavigationItem[];
}

function TabCard({ subNav }: TabCardProps) {
  return (
    <ul>
      {subNav.map((nav) => (
        <li key={nav.label}>
          <Link href={nav.link}>{nav.label}</Link>
          <ul>
            {nav.tabDetails?.map((tab) => (
              <li key={tab.title}>
                {tab.title}
                <ul>
                  {tab.list.map((list) => (
                    <li key={list.label}>
                      <Link href={list.link}>{list.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div></div>
        </li>
      ))}
    </ul>
  );
}

export default TabCard;
