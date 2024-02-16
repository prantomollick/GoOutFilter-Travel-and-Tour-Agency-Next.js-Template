import styles from "./category-navigation.module.scss";

import React, { Fragment, useState } from "react";
import { SubNavigationItem, TabCard, TabDetail } from "./navigation-content";
import Link from "next/link";
import NavigationTabCard from "@/components/navigation-tab-card/navigation-tab-card";
import classNames from "classnames";

interface TabCardProps {
  subNavs: SubNavigationItem[];
}

function CategoryNavigation({ subNavs }: TabCardProps) {
  const [selectedTabDetails, setSelectedTabDetails] =
    useState<SubNavigationItem>(subNavs[0]);

  const handleTabSelected = (subNav: SubNavigationItem) => {
    setSelectedTabDetails(subNav);
  };

  return (
    <ul className={styles["cat__nav"]}>
      {subNavs.map((subNav) => (
        <li
          key={subNav.label}
          className={classNames(
            styles["cat__nav--item"],
            selectedTabDetails.label.trim() === subNav.label.trim() &&
              "selected-primary-light"
          )}
          onClick={() => handleTabSelected(subNav)}
        >
          {subNav.label}
        </li>
      ))}

      {
        <CatNavigationTabDetails
          tabDetails={selectedTabDetails.tabDetails || []}
          tabCard={selectedTabDetails.tabCard!}
        />
      }
    </ul>
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
    <div className={styles["cat__navTab--details"]}>
      <ul className={styles["cat__navTab--list"]}>
        {tabDetails.map((tab) => (
          <Fragment key={tab.title}>
            <li key={tab.title} className={styles["cat__navTab--list-heading"]}>
              {tab.title}
            </li>
            <ul className={styles["cat__navTab--list-content"]}>
              {tab.list.map((list) => (
                <li key={list.label}>
                  <Link href={list.link}>{list.label}</Link>
                </li>
              ))}
            </ul>
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
