"use client";
import styles from "./navigation.module.scss";

import classNames from "classnames";
import Link from "next/link";

import { navigationContent } from "@/app/data/navigation-content";
import Button from "@/components/ui/button/button";
import { useModal } from "@/context/modal-context";
import { usePathname } from "next/navigation";
import { GoTriangleDown } from "react-icons/go";
import CurrencyBtn from "../currency-btn/currency-btn";
import LanguageBtn from "../language-btn/language-btn";
import Brand from "./brand";
import NavigationItem from "./navigation-item";

function Navigation() {
  const path = usePathname();
  const { actions } = useModal();

  return (
    <nav
      className={classNames(styles.nav, "py-2")}
      role="navigation"
      aria-label="breadcrumb"
    >
      <div className="flex item-center gap-3">
        <Link href="/">
          <Brand variant="white" />
        </Link>
        <NavigationItem navigationContent={navigationContent} />
      </div>

      <div className="flex item-center gap-2">
        <div className="flex gap-2">
          <CurrencyBtn onClick={actions.onOpen}>
            USD <GoTriangleDown />
          </CurrencyBtn>
          <span className="divider-line bg-white"></span>
          <LanguageBtn />
        </div>
        <div className={styles.nav__actions}>
          <Button color="white">Become An Expert</Button>
          <Button color="white" variant="bordered">
            Sign In / Register
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
