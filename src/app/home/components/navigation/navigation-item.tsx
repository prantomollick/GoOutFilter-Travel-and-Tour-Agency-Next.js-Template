"use client";
import styles from "./navigation-item.module.scss";
import type { NavigationItem } from "@/app/home/components/navigation/navigation-content";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoTriangleDown } from "react-icons/go";

interface NavigationItemProps {
  navigationContent: NavigationItem[];
}

function NavigationItem({ navigationContent }: NavigationItemProps) {
  const path = usePathname();

  return (
    <ul role="menu" className={styles.nav__menu}>
      {navigationContent.map((nav) => {
        return (
          <li key={nav.label}>
            <Link
              href={nav.link}
              role="menuitem"
              className={classNames(
                styles["nav__menu-item"],
                nav.link === path && "active-primary",
                nav.link === "/" && "active-primary"
              )}
            >
              {nav.label} {nav.subnav && <GoTriangleDown />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationItem;
