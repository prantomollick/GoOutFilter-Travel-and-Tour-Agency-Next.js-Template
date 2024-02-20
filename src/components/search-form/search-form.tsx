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

function SearchForm() {
  const {
    isVisible,
    dateRange,
    onDateRange,
    formRef,
    dateRangeRef,
    dateRangeFlip,
    onVisibilityChange,
    formattedDateRangeVal: { startDate, endDate }
  } = useDateRange();

  return (
    <>
      <form className={styles["search-form"]} ref={formRef}>
        <div className={styles["search-form__inputs"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="location" className={styles["form-label"]}>
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Where are you going?"
              className={styles["form-input"]}
            />
          </div>

          <div className={`${styles["form-group"]}`}>
            <label htmlFor="checkin" className={styles["form-label"]}>
              Check in - Check out
            </label>
            <span onClick={onVisibilityChange} className={styles["form-value"]}>
              {startDate} - {endDate}
            </span>
            {isVisible && (
              <div
                ref={dateRangeRef}
                className={classNames(
                  styles["form-date"],
                  styles[
                    `${dateRangeFlip ? "form-date-tri-b" : "form-date-tri-t"}`
                  ]
                )}
                style={{ [dateRangeFlip ? "bottom" : "top"]: "150%" }}
              >
                <MyDateRange
                  onDateValue={onDateRange}
                  onVisibleChange={onVisibilityChange}
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
