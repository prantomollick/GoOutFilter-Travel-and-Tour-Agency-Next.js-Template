import styles from "./navigation.module.scss";
import Button from "@/components/ui/button/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoTriangleDown } from "react-icons/go";
import Brand from "./brand";
import classNames from "classnames";

function Navigation() {
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
    <header className="nav-container bg-darkest-blue text-white">
      <nav
        className={classNames(styles.nav, "py-2")}
        role="navigation"
        aria-label="breadcrumb"
      >
        <div className="flex item-center gap-3">
          <Link href="/" className={styles.nav__brand}>
            <Brand variant="white" />
          </Link>
          <ul role="menu" className={styles.nav__menu}>
            {navData.map((nav) => {
              return (
                <li key={nav.label}>
                  <Link
                    href={nav.link}
                    role="menuitem"
                    className={styles["nav__menu-item"]}
                  >
                    {nav.label} {nav.subnav && <GoTriangleDown />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex item-center">
          <div className="nav__curr-lang">
            <button type="button" className="nav__curr-btn">
              USD <GoTriangleDown />
            </button>
            <button type="button" className="nav__lang-btn">
              <Image width={20} height={20} src="/flag.png" alt="flag" />
              <span>Country Name</span>
              <GoTriangleDown />
            </button>
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
