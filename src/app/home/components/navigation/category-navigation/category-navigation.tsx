import styles from "./category-navigation.module.scss";

import React, { Fragment, useState } from "react";
import { SubNavigationItem, TabCard, TabDetail } from "../navigation-content";
import Link from "next/link";
import NavigationTabCard from "@/components/navigation-tab-card/navigation-tab-card";
import classNames from "classnames";

interface TabCardProps {
  catNavDetails: SubNavigationItem[];
}

function CategoryNavigation({ catNavDetails: subNavs }: TabCardProps) {
  const [selectedTabDetails, setSelectedTabDetails] =
    useState<SubNavigationItem>(subNavs[0]);

  const handleTabSelected = (subNav: SubNavigationItem) => {
    setSelectedTabDetails(subNav);
  };

  return (
    <div className={styles["cat__nav"]}>
      <ul className={styles["cat__nav--list"]}>
        {subNavs.map((subNav) => (
          <li
            key={subNav.label}
            className={classNames(
              styles["cat__nav--item"],
              styles[
                `${
                  selectedTabDetails.label === subNav.label &&
                  "cat__nav-selected"
                }`
              ]
            )}
            onClick={() => handleTabSelected(subNav)}
          >
            {subNav.label}
          </li>
        ))}
      </ul>
      {
        <CatNavigationTabDetails
          tabDetails={selectedTabDetails.tabDetails || []}
          tabCard={selectedTabDetails.tabCard!}
        />
      }
    </div>
  );
}

export default CategoryNavigation;

interface CatNavigationTabDetailsProps {
  tabDetails: TabDetail[];
  tabCard: TabCard;
}

function CatNavigationTabDetails({
  tabDetails,
  tabCard
}: CatNavigationTabDetailsProps) {
  return (
    <div className={styles["navTabDetails"]}>
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
