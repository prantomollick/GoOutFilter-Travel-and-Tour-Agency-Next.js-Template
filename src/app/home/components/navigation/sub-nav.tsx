import styles from "./sub-nav.module.scss";

import React from "react";
import { type SubNavigationItem } from "./navigation-content";
import Link from "next/link";

interface SubNavProps {
  subNav: SubNavigationItem[];
}

function SubNev({ subNav }: SubNavProps) {
  return (
    <ul className={styles.subNav__list}>
      {subNav.map((nav) => (
        <li key={nav.label}>
          <Link href={nav.link} className={styles["subNav__list-link"]}>
            {nav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SubNev;
