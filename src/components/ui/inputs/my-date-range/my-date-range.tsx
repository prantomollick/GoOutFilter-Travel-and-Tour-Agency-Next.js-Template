// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "./my-date-range.scss";

import { useState } from "react";

import {
  DateRange,
  DateRangeProps,
  RangeFocus,
  RangeKeyDict
} from "react-date-range";
import { useInView } from "react-intersection-observer";

export type SelectedRangeDate = {
  startDate: Date;
  endDate: Date;
  key: string;
};

type MyDateRangeProps = DateRangeProps & {
  onDateValue?: (dateRangeByKey: RangeKeyDict) => void;
  onVisibleChange?: (visible: boolean) => void;
};

function MyDateRange({
  onDateValue,
  onVisibleChange,
  ...props
}: MyDateRangeProps) {
  const [selectedRange, setSelecteRange] = useState<SelectedRangeDate>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  const {
    ref: dateRangeRef,
    inView,
    entry
  } = useInView({
    root: null,
    rootMargin: "-405px",
    threshold: 0
  });

  const handleFocusChange = (focusedRange: RangeFocus) => {
    if (!onVisibleChange) return;

    if (focusedRange[0] === 0 && focusedRange[1] === 0) {
      onVisibleChange(false);
    }
  };

  const handleDateSelect = (rangesByKey: RangeKeyDict) => {
    setSelecteRange({
      startDate: rangesByKey.selection!.startDate!,
      endDate: rangesByKey.selection!.endDate!,
      key: "selection"
    });
    if (onDateValue) {
      onDateValue(rangesByKey);
    }
  };

  return (
    <DateRange
      ranges={[selectedRange]}
      onChange={handleDateSelect}
      minDate={props.minDate || new Date()}
      direction={props.direction || "horizontal"}
      disabledDates={props.disabledDates}
      editableDateInputs={props.editableDateInputs || false}
      showMonthAndYearPickers={props.showMonthAndYearPickers || false}
      showDateDisplay={props.showDateDisplay || false}
      months={props.months || 1}
      onRangeFocusChange={handleFocusChange}
      {...props}
    />
  );
}

export default MyDateRange;
