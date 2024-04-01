import styles from "./category-navigation.module.scss";

import { Fragment, useState } from "react";
import { SubNavigationItem, TabCard, TabDetail } from "@/app/navigation-menu";
import NavigationTabCard from "@/components/navigation-tab-card/navigation-tab-card";
import classNames from "classnames";
import Link from "next/link";
import { GoTriangleRight } from "react-icons/go";

interface TabCardProps {
  catNavDetails: SubNavigationItem[];
  className: string;
}

function CategoryNavigation({
  catNavDetails: subNavs,
  className
}: TabCardProps) {
  const [catNavs, setCatNavs] = useState(subNavs);

  const handleTabSelected = (subNav: SubNavigationItem, idx: number) => {
    const updateCatNavs = catNavs.map((nav) => {
      if (nav.label.toLowerCase() === subNav.label.toLowerCase()) {
        return {
          ...nav,
          isActive: !nav.isActive
        };
      } else {
        return {
          ...nav,
          isActive: false
        };
      }
    });
    setCatNavs(updateCatNavs);
  };

  return (
    <div className={classNames(styles["cat__nav"], className)}>
      <ul className={styles["cat__nav--list"]}>
        {catNavs.map((nav, idx) => (
          <Fragment key={idx}>
            <li
              className={classNames(
                styles["cat__nav--item"],
                styles[`${nav.isActive && "cat__nav-selected"}`]
              )}
              onClick={() => handleTabSelected(nav, idx)}
            >
              {nav.label}
              {className == "subnav-visible" && <GoTriangleRight />}
            </li>
            <CatNavigationTabDetails
              tabDetails={nav.tabDetails || []}
              tabCard={nav.tabCard!}
              className={nav.isActive ? "cat-tab-active" : ""}
            />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default CategoryNavigation;

interface CatNavigationTabDetailsProps {
  tabDetails: TabDetail[];
  tabCard: TabCard;
  className: string;
}

function CatNavigationTabDetails({
  tabDetails,
  tabCard,
  className
}: CatNavigationTabDetailsProps) {
  return (
    <div className={classNames(styles["navTabDetails"], className)}>
      <ul className={styles["navTabDetails__list"]}>
        {tabDetails.map((tab) => (
          <Fragment key={tab.title}>
            <li key={tab.title}>
              {tab.title}
              <ul className={styles["navTabDetails__inner-list"]}>
                {tab.list.map((list) => (
                  <li key={list.label}>
                    <Link
                      href={list.link}
                      className={styles["navTabDetails__inner-link"]}
                    >
                      {list.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </Fragment>
        ))}
      </ul>

      <NavigationTabCard
        imgLink={tabCard.imgSrc || "/navigation-card/tour.jpg"}
        btnText={tabCard.btnText || "Learn More"}
        title={tabCard.heading || "Things to do on your trip"}
        imgSize={{ width: 280, height: 300 }}
      />
    </div>
  );
}
