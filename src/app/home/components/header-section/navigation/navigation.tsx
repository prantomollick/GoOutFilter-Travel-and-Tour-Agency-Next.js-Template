"use client";
import styles from "./navigation.module.scss";

import classNames from "classnames";
import Link from "next/link";

import { navigationMenu } from "@/app/navigation-menu";
import Button from "@/components/ui/button/button";

import { GoTriangleDown, GoX } from "react-icons/go";

import { useCurrencyModal } from "@/context/currency-modal-context";
import { useLanguageModal } from "@/context/language-modal-context";
import Image from "next/image";
import Brand from "./brand";
import CurrencyBtn from "./currency-btn/currency-btn";
import LanguageBtn from "./language-btn/language-btn";
import NavigationItem from "./navigation-item";
import { useState } from "react";

function Navigation() {
  const { actions: currencyActions, state: currencyState } = useCurrencyModal();
  const { actions: languageActions, state: languageState } = useLanguageModal();
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  const sidebarOpenHandler = () => {
    setIsSidebar((prev) => !prev);
  };

  const sidebarCloseHandler = () => {
    setIsSidebar(false);
  };

  return (
    <nav
      className={classNames(styles.nav, "py-2", isSidebar && "sidebar-visible")}
      role="navigation"
      aria-label="breadcrumb"
    >
      <div className={styles.backdrop} onClick={sidebarCloseHandler}></div>
      <div className="container-fluid">
        <div className={classNames(styles["nav__wrapper"])}>
          <div
            className={classNames(
              styles["nav__main"],
              "flex item-center gap-3"
            )}
          >
            <Link
              href="/"
              className={classNames(styles["nav__brand-link"], "o-visible")}
            >
              <Brand variant="white" className={styles["nav__brand-img"]} />
            </Link>

            <div className={styles["nav__brand-mobile"]}>
              <Link href="/" className={styles["nav__brand-link-mobile"]}>
                <Brand variant="primary" />
              </Link>
              <button onClick={sidebarCloseHandler} className="btn flex">
                <GoX size={35} />
              </button>
            </div>
            <NavigationItem
              navigationContent={navigationMenu}
              isSidebar={isSidebar}
            />

            {isSidebar && (
              <div className={styles["nav__sidebar-actions"]}>
                <div className={styles.nav__actions}>
                  <Button color="blue" radius="sm" size="sm" variant="bordered">
                    Become An Expert
                  </Button>
                  <Button color="blue" radius="sm" size="sm">
                    Sign In / Register
                  </Button>
                </div>

                <div className={styles["nav__sidebar-cur-lng"]}>
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
              </div>
            )}
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
              <button
                className={classNames(styles["nav__toggler-btn"], "btn")}
                onClick={sidebarOpenHandler}
              >
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
