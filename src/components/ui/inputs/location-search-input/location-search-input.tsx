"use client";
import styles from "./location-search-input.module.scss";

import React, { ComponentPropsWithoutRef, RefObject } from "react";
import MapPointer from "./map-pointer";

import classNames from "classnames";
import { LocationData } from "./useLocationSearchInput";

type LocationSearchInputProps = {
  queryValue: string;
  locSuggRefPopup: RefObject<HTMLDivElement>;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickInput: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onClickSuggestion: (suggession: LocationData) => void;
  isSuggFilpToTop: boolean;
  isShowSugg: boolean;
  suggestions: LocationData[];
} & ComponentPropsWithoutRef<"input">;

function LocationSearchInput({
  queryValue,
  onQueryChange,
  onFocus,
  onClickSuggestion,
  onClickInput,
  isSuggFilpToTop,
  isShowSugg,
  locSuggRefPopup,
  suggestions,
  ...inputProps
}: LocationSearchInputProps) {
  return (
    <>
      <input
        type="text"
        value={queryValue}
        onChange={onQueryChange}
        onClick={onClickInput}
        required
        {...inputProps}
      />
      {isShowSugg && suggestions.length > 0 && (
        <div
          className={classNames(
            styles["suggestion"],
            isSuggFilpToTop
              ? styles["suggestion-bottom-tri"]
              : styles["suggestion-top-tri"]
          )}
          ref={locSuggRefPopup}
        >
          <ul className={styles["suggestion__list"]}>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.city}
                className={styles["suggestion__item"]}
                onClick={() => {
                  onClickSuggestion(suggestion);
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
