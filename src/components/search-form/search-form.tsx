import styles from "./search-form.module.scss";

import Button from "../ui/button/button";
import { GoSearch } from "react-icons/go";

import React, { useState } from "react";
import { type DateRangeProps, DateRange, RangeKeyDict } from "react-date-range";
import MyDateRange, { SelectedRangeDate } from "../ui/inputs/my-date-range";
import format from "date-fns/format";

function SearchForm() {
  const [dateRange, setDateRange] = useState<SelectedRangeDate>({
    startDate: new Date(),
    endDate: new Date(),
    key: ""
  });

  const [dateSelect, setDateSelect] = useState(false);

  const formattedStartDate = format(dateRange.startDate, "EEE d MMM");
  const formattedEndDate = format(dateRange.endDate, "EEE d MMM");

  const handleChange = () => {
    setDateSelect((prevValue) => !prevValue);
  };

  const handleCheckInOutDates = (dateRange: RangeKeyDict) => {
    setDateRange({
      startDate: dateRange.selection!.startDate!,
      endDate: dateRange.selection!.endDate!,
      key: dateRange.selection!.key!
    });
  };

  return (
    <>
      <form className={styles["search-form"]}>
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
            <span onClick={handleChange} className={styles["form-value"]}>
              {formattedStartDate} - {formattedEndDate}
            </span>
            {dateSelect && (
              <MyDateRange
                onDateValue={handleCheckInOutDates}
                className={styles["form-date"]}
                months={2}
              />
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
