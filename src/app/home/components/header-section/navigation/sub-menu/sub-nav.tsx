import styles from "./sub-nav.module.scss";

import type { SubNavigationItem } from "@/app/navigation-menu";
import classNames from "classnames";
import Link from "next/link";

interface SubNavProps {
  subMenuDetails: SubNavigationItem[];
  className: string;
}

function SubMenu({ subMenuDetails: subNavs, className }: SubNavProps) {
  return (
    <ul className={classNames(styles.subNav__list, className)}>
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
