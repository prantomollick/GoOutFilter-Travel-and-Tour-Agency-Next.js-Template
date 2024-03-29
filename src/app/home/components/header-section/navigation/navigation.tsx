"use client";
import styles from "./navigation.module.scss";

import classNames from "classnames";
import Link from "next/link";

import { navigationMenu } from "@/app/navigation-menu";
import Button from "@/components/ui/button/button";

import { GoTriangleDown } from "react-icons/go";

import { useCurrencyModal } from "@/context/currency-modal-context";
import { useLanguageModal } from "@/context/language-modal-context";
import Image from "next/image";
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
      <div className="container-fluid">
        <div className={classNames(styles["nav__wrapper"])}>
          <div
            className={classNames(
              styles["nav__main"],
              "flex item-center gap-3"
            )}
          >
            <Link href="/" className={styles["nav__brand-link"]}>
              <Brand variant="white" />
            </Link>
            <div className={styles["nav__brand-mobile"]}>
              <Link href="/" className={styles["nav__brand-link-mobile"]}>
                <Brand variant="primary" />
              </Link>
              <button>X</button>
            </div>
            <NavigationItem navigationContent={navigationMenu} />
          </div>

          <div
            className={classNames(
              styles["nav__cur-lng-act"],
              "flex item-center gap-2"
            )}
          >
            <div
              className={classNames(styles["nav__cur-lng"], "flex", "gap-2")}
            >
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
              <Button color="white" radius="sm" size="sm">
                Become An Expert
              </Button>
              <Button color="white" variant="bordered" radius="sm" size="sm">
                Sign In / Register
              </Button>
            </div>
            <div className={styles["nav__toggler"]}>
              <div>
                <Image
                  src={"/icon/navigation/nav-user.svg"}
                  width={20}
                  height={20}
                  alt="user icon"
                  priority
                />
              </div>
              <button className={classNames(styles["nav__toggler-btn"], "btn")}>
                <Image
                  width={25}
                  height={12}
                  src="/icon/navigation/nav-icon.svg"
                  alt="nav-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
