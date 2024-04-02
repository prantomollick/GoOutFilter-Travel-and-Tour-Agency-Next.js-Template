"use client";
import type { NavigationItem } from "@/app/navigation-menu";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import CategoryNavigation from "./category-navigation/category-navigation";
import styles from "./navigation-item.module.scss";
import SubMenu from "./sub-menu/sub-nav";

interface NavigationItemProps {
  navigationContent: NavigationItem[];
  isSidebar: boolean;
}

function NavigationItem({ navigationContent, isSidebar }: NavigationItemProps) {
  const path = usePathname();
  const [navs, setNavs] = useState<NavigationItem[]>(
    navigationContent.map((item) => {
      if (item.subnav) {
        return {
          ...item,
          isSubnavActive: false
        };
      } else {
        return item;
      }
    })
  );
  const [isSubnavVisible, setIsSubnavVisible] = useState(false);

  const handleSubnanVisibility = (label: string) => {
    const filteredNavs = navs.map((nav) => {
      if (nav.label.toLowerCase() === label.toLowerCase()) {
        return {
          ...nav,
          isSubnavActive: !nav.isSubnavActive
        };
      } else {
        return nav;
      }
    });

    setNavs(filteredNavs);
  };

  return (
    <ul
      role="menu"
      className={classNames(
        styles.nav__menu,
        isSidebar && "sidebar-visible",
        isSubnavVisible && "submenu-visible"
      )}
    >
      {navs.map((nav, idx) => {
        return (
          <li
            key={idx}
            className={classNames(
              styles["nav__menu-item"],
              nav.isSubnavActive ? "subnav-visible" : ""
            )}
          >
            <Link
              href={nav.link}
              role="menuitem"
              className={classNames(
                styles["nav__menu-link"],
                nav.link === path && "active-primary",
                nav.link === "/" && "active-primary"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleSubnanVisibility(nav.label);
              }}
            >
              {nav.label} {nav.subnav && !isSidebar && <GoTriangleDown />}
              {nav.subnav && isSidebar && !nav.isSubnavActive && (
                <GoTriangleRight />
              )}
              {isSidebar && nav.isSubnavActive && <GoTriangleDown />}
            </Link>

            {nav.subnav && nav.label.toLowerCase() !== "categories" ? (
              <SubMenu
                subMenuDetails={nav.subnav}
                className={nav.isSubnavActive ? "subnav-visible" : ""}
              />
            ) : null}

            {nav.subnav && nav.label.toLowerCase() === "categories" && (
              <CategoryNavigation
                catNavDetails={nav.subnav}
                className={nav.isSubnavActive ? "subnav-visible" : ""}
                isSidebar={isSidebar}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationItem;
