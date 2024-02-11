"use client";
import styles from "./navigation.module.scss";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { GoTriangleDown } from "react-icons/go";
import Button from "@/components/ui/button/button";
import Brand from "./brand";
import CurrencyBtn from "../currency-btn/currency-btn";
import LanguageBtn from "../language-btn/language-btn";
import { useParams, usePathname } from "next/navigation";

function Navigation() {
  const path = usePathname();

  const navData = [
    {
      label: "Home",
      link: "/home",
      subnav: [
        { label: "Home 1", link: "#" },
        { label: "Home 2", link: "#" }
      ]
    },
    {
      label: "Categories",
      link: "#",
      subnav: [
        {
          label: "Hotel",
          link: "/hotel",
          tabDetails: [
            { label: "Hotel List", link: "#" },
            { label: "Hotel List V1", link: "#" }
          ],
          tabCard: {
            imgSrc: "./src/img/subnav-travel-through-world.png",
            heading: "Things to do on your trip",
            btnText: "Experiences"
          }
        },
        {
          label: "Tour",
          link: "/tour",
          tabDetails: [
            { label: "Tour List", link: "#" },
            { label: "Tour List V1", link: "#" }
          ],
          tabCard: {
            imgSrc: "./src/img/tour.jpg",
            heading: "Things to do on your Tour",
            btnText: "See all Tour"
          }
        }
      ]
    },
    {
      label: "Destination",
      link: "/description"
    },
    {
      label: "Blog",
      link: "/blog",
      subnav: [
        { label: "Blog List V1", link: "#" },
        { label: "Blog List V2", link: "#" }
      ]
    },
    {
      label: "Pages",
      link: "/pages",
      subnav: [
        { label: "404", link: "#" },
        { label: "About", link: "#" },
        { label: "Become expert", link: "#" }
      ]
    },
    {
      label: "Contact",
      link: "/contact"
    }
  ];

  return (
    <header className="nav-container bg-darkest-blue text-white font-medium">
      <nav
        className={classNames(styles.nav, "py-2")}
        role="navigation"
        aria-label="breadcrumb"
      >
        <div className="flex item-center gap-3">
          <Link href="/">
            <Brand variant="white" />
          </Link>
          <ul role="menu" className={styles.nav__menu}>
            {navData.map((nav) => {
              return (
                <li key={nav.label}>
                  <Link
                    href={nav.link}
                    role="menuitem"
                    className={classNames(
                      styles["nav__menu-item"],
                      nav.link === path && "active-primary",
                      nav.link === "/" && "active-primary"
                    )}
                  >
                    {nav.label} {nav.subnav && <GoTriangleDown />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex item-center gap-2">
          <div className="flex gap-2">
            <CurrencyBtn />
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
    </header>
  );
}

export default Navigation;
