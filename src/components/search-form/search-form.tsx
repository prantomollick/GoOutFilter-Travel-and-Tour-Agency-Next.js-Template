"use client";
import styles from "./search-form.module.scss";

import { GoSearch } from "react-icons/go";
import Button from "../ui/button/button";

import classNames from "classnames";
import LocationSearchInput from "../ui/inputs/location-search-input/location-search-input";
import { useLocationSearchInput } from "../ui/inputs/location-search-input/useLocationSearchInput";
import MyDateRange from "../ui/inputs/my-date-range/my-date-range";
import { useDateRange } from "../ui/inputs/my-date-range/useDateRange";
import GuestInputPopup from "../ui/inputs/guest-input-popup/guest-input-popup";
import { useGuestInput } from "../ui/inputs/guest-input-popup/use-guest-input";

import { CounterKey } from "../ui/inputs/guest-input-popup/use-guest-input";

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
    onClickInput,
    isShowSugg,
    isSuggFilpToTop,
    locSuggRefPopup,
    locSuggInputRef,
    query,
    suggestions,
    onSugLocClick
  } = useLocationSearchInput();

  const {
    state: counterState,
    popupRef: guestPopupRef,
    rootElRef: guestRootElRef,
    handleDecrement,
    handleIncrement,
    onGuestPopupVisibility,
    popupFlipToTop: guestPopupFlipToTop
  } = useGuestInput();

  console.log(selectedDateRange, query);

  return (
    <form className={styles["search-form"]}>
      <div className={styles["search-form__inputs"]}>
        <div className={styles["form-group"]} ref={locSuggInputRef}>
          <label htmlFor="location" className={styles["form-label"]}>
            Location
          </label>
          <LocationSearchInput
            onQueryChange={onInputChange}
            queryValue={query}
            onClickInput={onClickInput}
            suggestions={suggestions}
            isShowSugg={isShowSugg}
            locSuggRefPopup={locSuggRefPopup}
            onClickSuggestion={onSugLocClick}
            isSuggFilpToTop={isSuggFilpToTop}
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

        <div className={`${styles["form-group"]}`} ref={guestRootElRef}>
          <label htmlFor="guest" className={styles["form-label"]}>
            Guest
          </label>
          <span
            id="guest"
            className={styles["form-value"]}
            onClick={() => onGuestPopupVisibility()}
          >
            {counterState.adults} adults - {counterState.children} childeren -{" "}
            {counterState.rooms} room
          </span>
          {counterState.isVisible && (
            <GuestInputPopup
              CounterState={counterState}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              onVisibilityChange={onGuestPopupVisibility}
              guestPopupFlipToTop={guestPopupFlipToTop}
              ref={guestPopupRef}
            />
          )}
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
  );
}

export default SearchForm;
