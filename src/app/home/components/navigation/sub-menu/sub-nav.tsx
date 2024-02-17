import styles from "./sub-nav.module.scss";

import React from "react";
import { type SubNavigationItem } from "../navigation-content";
import Link from "next/link";

interface SubNavProps {
  subMenuDetails: SubNavigationItem[];
}

function SubMenu({ subMenuDetails: subNavs }: SubNavProps) {
  return (
    <ul className={styles.subNav__list}>
      {subNavs.map((subNav) => (
        <li key={subNav.label}>
          <Link href={subNav.link!} className={styles["subNav__list-link"]}>
            {subNav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
