"use client";
import styles from "./location-search-input.module.scss";

import React, { ComponentPropsWithoutRef, Ref, useRef } from "react";
import MapPointer from "./map-pointer";
import { LocationData } from "./use-location-search-input";
import { useInView } from "react-intersection-observer";

type LocationSearchInputProps = {
  queryValue: string;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSuggestedLocation: (suggession: LocationData) => void;
  isShowSuggession: boolean;
  suggestions: LocationData[];
} & ComponentPropsWithoutRef<"input">;

function LocationSearchInput({
  queryValue,
  onQueryChange,
  onFocus,
  onSuggestedLocation,
  suggestions,
  isShowSuggession,
  ...inputProps
}: LocationSearchInputProps) {
  const locSuggessionRef = useRef<HTMLDivElement | null>(null);

  // console.log(locSuggessionRef.current?.getBoundingClientRect());

  return (
    <>
      <input
        type="text"
        value={queryValue}
        onChange={onQueryChange}
        onFocus={onFocus}
        {...inputProps}
      />
      {isShowSuggession && suggestions.length > 0 && (
        <div className={styles["suggestion"]} ref={locSuggessionRef}>
          <ul className={styles["suggestion__list"]}>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.city}
                className={styles["suggestion__item"]}
                onClick={() => {
                  onSuggestedLocation(suggestion);
                }}
              >
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
