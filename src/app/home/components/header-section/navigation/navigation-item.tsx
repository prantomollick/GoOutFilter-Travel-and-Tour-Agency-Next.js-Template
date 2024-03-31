"use client";
import type { NavigationItem } from "@/app/navigation-menu";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoTriangleDown } from "react-icons/go";
import styles from "./navigation-item.module.scss";
import SubNev from "./sub-menu/sub-nav";
import CategoryNavigation from "./category-navigation/category-navigation";
import SubMenu from "./sub-menu/sub-nav";

interface NavigationItemProps {
  navigationContent: NavigationItem[];
  isSidebar: boolean;
}

function NavigationItem({ navigationContent, isSidebar }: NavigationItemProps) {
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
              {nav.label} {nav.subnav && !isSidebar && <GoTriangleDown />}
            </Link>

            {nav.subnav && nav.label.toLowerCase() !== "categories" ? (
              <SubMenu subMenuDetails={nav.subnav} />
            ) : null}

            {nav.subnav && nav.label.toLowerCase() === "categories" && (
              <CategoryNavigation catNavDetails={nav.subnav} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationItem;
