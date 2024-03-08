import styles from "./destination-section.module.scss";

import React from "react";
[
  { city: "Hawaii", properties: 12683 },
  { city: "Santorini", properties: 12683 },
  { city: "Mykonos", properties: 12683 },
  { city: "Jersey", properties: 12683 },
  { city: "Istanbul", properties: 12683 },
  { city: "Los Angeles", properties: 12683 },
  { city: "London", properties: 12683 },
  { city: "Prag", properties: 12683 },
  { city: "San Diego", properties: 12683 },
  { city: "Ibiza", properties: 12683 },
  { city: "Paris", properties: 12683 },
  { city: "Amsterdam", properties: 12683 },
  { city: "Phuket", properties: 12683 },
  { city: "Boston", properties: 12683 },
  { city: "Dubai", properties: 12683 },
  { city: "Rome", properties: 12683 },
  { city: "Reykjavik", properties: 12683 },
  { city: "Florence", properties: 12683 },
  { city: "Krakow", properties: 12683 },
  { city: "Miami", properties: 12683 }
];

function DestinationSection() {
  return (
    <section id="#destination">
      <div className="container">
        <div className={styles["section-header"]}>
          <h2 className="s-heading">Destinations we love</h2>
          <p className="s-heading-subtitle">
            Interdum et malesuada fames ac ante ipsum
          </p>
        </div>
        <div className={styles.tab}></div>
      </div>
    </section>
  );
}

export default DestinationSection;
