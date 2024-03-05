import styles from "./feature-section.module.scss";

import Image from "next/image";
import React from "react";
import type { Features } from "../../page";

interface Props {
  features: Features[];
}

function FeatureSection({ features }: Props) {
  return (
    <section id="#feature" className="pb-12">
      <div className="container">
        <div className={styles.features}>
          {features.map((feature, i) => {
            return (
              <div className={styles["feature"]} key={i}>
                <Image
                  width={70}
                  height={70}
                  priority={true}
                  src={feature.icon}
                  alt={feature.title}
                  className={styles["feature__icon"]}
                />
                <h3 className={styles["feature__title"]}>{feature.title}</h3>
                <p className={styles["feature__des"]}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
