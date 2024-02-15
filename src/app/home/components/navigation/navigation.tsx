"use client";
import styles from "./navigation.module.scss";

import classNames from "classnames";
import Link from "next/link";

import { navigationContent } from "@/app/home/components/navigation/navigation-content";
import Button from "@/components/ui/button/button";

import { GoTriangleDown } from "react-icons/go";

import { useCurrencyModal } from "@/context/currency-modal-context";
import { useLanguageModal } from "@/context/language-modal-context";
import Brand from "./brand";
import CurrencyBtn from "./currency-btn/currency-btn";
import LanguageBtn from "./language-btn/language-btn";
import NavigationItem from "./navigation-item";

function Navigation() {
  const { actions: currencyActions, state: currencyState } = useCurrencyModal();
  const { actions: languageActions, state: languageState } = useLanguageModal();

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
          <CurrencyBtn onClick={currencyActions.onOpen}>
            {currencyState.content?.currency?.code} <GoTriangleDown />
          </CurrencyBtn>
          <span className="divider-line bg-white"></span>
          <LanguageBtn
            countryCode={languageState.content?.language?.code}
            onClick={languageActions.onOpen}
          >
            <span>{languageState.content?.language?.name}</span>
            <GoTriangleDown />
          </LanguageBtn>
        </div>
        <div className={styles.nav__actions}>
          <Button color="white" radius="sm">
            Become An Expert
          </Button>
          <Button color="white" variant="bordered" radius="sm">
            Sign In / Register
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
