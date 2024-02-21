"use client";
import styles from "./location-search-input.module.scss";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { LocationData } from "./use-location-search-input";
import MapPointer from "./map-pointer";

type LocationSearchInputProps = {
  queryValue: string;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: LocationData[];
} & ComponentPropsWithoutRef<"input">;

function LocationSearchInput({
  queryValue,
  onQueryChange,
  suggestions,
  ...inputProps
}: LocationSearchInputProps) {
  return (
    <>
      <input
        type="text"
        value={queryValue}
        onChange={onQueryChange}
        {...inputProps}
      />
      {suggestions.length > 0 && (
        <div className={styles["suggestion"]}>
          <ul className={styles["suggestion__list"]}>
            {suggestions.map((suggestion) => (
              <li key={suggestion.city} className={styles["suggestion__item"]}>
                <div className={styles["suggestion__icon"]}>
                  <MapPointer />
                </div>
                <div className={styles["suggestion__content"]}>
                  <span className={styles["suggestion__content-city"]}>
                    {suggestion.city}
                  </span>
                  <span className={styles["suggestion__content-location"]}>
                    {suggestion.location}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default LocationSearchInput;
