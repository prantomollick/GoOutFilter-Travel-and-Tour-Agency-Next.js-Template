"use client";

import styles from "./destination-section.module.scss";

import { City, updatedDestinationData } from "@/data/destination-data";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button/button";
import classNames from "classnames";
import Link from "next/link";
import { formatNumber } from "@/util/formatNumber";

function DestinationSection() {
  const [isMount, setIsMount] = useState(false);
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const [tabCities, setTabCities] = useState<City[]>(
    updatedDestinationData["all"]
  );

  const tabs = Object.keys(updatedDestinationData).map((value, i) => ({
    id: i + 1,
    value
  }));

  const handleTabClick = (tab: { id: number; value: string }) => {
    if (!tab.value) return;
    setTabCities(updatedDestinationData[tab.value]);
    setActiveTabId(tab.id);
  };

  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
    }
  }, [isMount]);

  if (!isMount) {
    return null;
  }

  return (
    <section id="#destination" className="pb-12">
      <div className="container">
        <div className={styles["section-header"]}>
          <h2 className="s-heading">Destinations we love</h2>
          <p className="s-heading-subtitle">
            Interdum et malesuada fames ac ante ipsum
          </p>
        </div>
        <div className={styles["destination__wrapper"]}>
          <div className={styles.tabs}>
            {tabs?.map((tab) => (
              <Button
                key={tab.id}
                type="button"
                size="sm"
                radius="sm"
                className={classNames(
                  styles["tab__btn"],
                  tab.id === activeTabId ? styles["tab__btn--active"] : ""
                )}
                onClick={() => handleTabClick(tab)}
              >
                {tab.value}
              </Button>
            ))}
          </div>

          <ul className={styles["tabs__content"]}>
            {tabCities.map((city, i) => (
              <li key={i} className={styles["tabs__content-item"]}>
                <Link href="#" className={styles["tabs__content-link"]}>
                  <div className={styles["tabs__content-city"]}>
                    <span>{city.city}</span>
                  </div>
                  <span className={styles["tabs__content-property"]}>
                    {formatNumber(city.properties)} properties
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DestinationSection;
