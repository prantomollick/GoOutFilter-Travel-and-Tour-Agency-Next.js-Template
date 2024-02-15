"use client";
import styles from "./navigation-item.module.scss";
import type { NavigationItem } from "@/app/home/components/navigation/navigation-content";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoTriangleDown } from "react-icons/go";
import SubNev from "./sub-nav";

interface NavigationItemProps {
  navigationContent: NavigationItem[];
}

function NavigationItem({ navigationContent }: NavigationItemProps) {
  const path = usePathname();

  return (
    <ul role="menu" className={styles.nav__menu}>
      {navigationContent.map((nav) => {
        return (
          <li key={nav.label} className={styles["nav__menu-item"]}>
            <Link
              href={nav.link}
              role="menuitem"
              className={classNames(
                styles["nav__menu-link"],
                nav.link === path && "active-primary",
                nav.link === "/" && "active-primary"
              )}
            >
              {nav.label} {nav.subnav && <GoTriangleDown />}
            </Link>

            {nav.subnav ? <SubNev subNav={nav.subnav} /> : null}
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationItem;
