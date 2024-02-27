import Image from "next/image";
import styles from "./destination-banner.module.scss";

import React from "react";
import Button from "@/components/ui/button/button";

interface Props {
  title: string;
  btnText: string;
  imgLink: string;
  width?: number;
  height?: number;
  captionText?: string;
}

function DestinationBanner({
  title,
  btnText,
  imgLink,
  width = 630,
  height = 550,
  captionText,
  ...props
}: Props) {
  return (
    <div {...props} className={styles["banner"]}>
      <Image
        alt={title}
        src={imgLink}
        width={width}
        height={height}
        className={styles["banner-img"]}
      />
      <div className={styles["banner-overlay"]}></div>

      <div className={styles["banner-content"]}>
        {captionText && (
          <p className={styles["banner-caption"]}>{captionText}</p>
        )}
        <h3 className={styles["banner-heading"]}>{title}</h3>
        <Button color="white" radius="sm" size="lg">
          {btnText}
        </Button>
      </div>
    </div>
  );
}

export default DestinationBanner;
