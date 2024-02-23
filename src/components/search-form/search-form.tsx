"use client";
import styles from "./search-form.module.scss";

import Button from "../ui/button/button";
import { GoSearch } from "react-icons/go";

import React, { useEffect, useRef, useState } from "react";
import { type DateRangeProps, DateRange, RangeKeyDict } from "react-date-range";
import MyDateRange, {
  SelectedRangeDate
} from "../ui/inputs/my-date-range/my-date-range";
import format from "date-fns/format";
import classNames from "classnames";
import { useDateRange } from "../ui/inputs/my-date-range/useDateRange";
import LocationSearchInput from "../ui/inputs/location-search-input/location-search-input";
import { useLocationSearchInput } from "../ui/inputs/location-search-input/use-location-search-input";
import { useInView } from "react-intersection-observer";

function SearchForm() {
  const {
    handleChange,
    selectedDateRange,
    onRangeFocusChange,
    isVisible,
    dateRangeRef,
    popupDateRangeRef,
    isDateFlipToTop,
    onVisibilityChange,
    formattedDateRangeVal: { startDate, endDate }
  } = useDateRange();

  const {
    onInputChange,
    onFocus,
    isShowSuggession,
    locSuggessionRef,
    query,
    suggestions,
    onSuggestedLocation
  } = useLocationSearchInput();

  return (
    <>
      <form className={styles["search-form"]}>
        <div className={styles["search-form__inputs"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="location" className={styles["form-label"]}>
              Location
            </label>

            <LocationSearchInput
              onQueryChange={onInputChange}
              queryValue={query}
              onFocus={onFocus}
              suggestions={suggestions}
              isShowSuggession={isShowSuggession}
              onSuggestedLocation={onSuggestedLocation}
              placeholder="Where are you going?"
              id="location"
              name="location"
              autoComplete="off"
              className={styles["form-input"]}
            />
          </div>

          <div className={`${styles["form-group"]}`} ref={dateRangeRef}>
            <label htmlFor="checkin" className={styles["form-label"]}>
              Check in - Check out
            </label>
            <span onClick={onVisibilityChange} className={styles["form-value"]}>
              {startDate} - {endDate}
            </span>
            {isVisible && (
              <div
                ref={popupDateRangeRef}
                className={classNames(
                  styles["form-date"],
                  isDateFlipToTop
                    ? styles["form-date-tri-t"]
                    : styles["form-date-tri-b"]
                )}
                style={{ [isDateFlipToTop ? "bottom" : "top"]: "150%" }}
              >
                <MyDateRange
                  onChange={handleChange}
                  ranges={[selectedDateRange]}
                  onVisibleChange={onVisibilityChange}
                  onRangeFocusChange={onRangeFocusChange}
                  months={2}
                />
              </div>
            )}
          </div>

          <div className={`${styles["form-group"]}`}>
            <label htmlFor="guest" className={styles["form-label"]}>
              Guest
            </label>
            <span className={styles["form-value"]}>
              2 adults - 1 childeren - 1 room
            </span>
          </div>
        </div>
        <Button
          size="lg"
          color="blue"
          radius="full"
          type="submit"
          starticon={<GoSearch fontSize={20} />}
          className={styles["form-btn"]}
        >
          Search
        </Button>
      </form>
    </>
  );
}

export default SearchForm;
