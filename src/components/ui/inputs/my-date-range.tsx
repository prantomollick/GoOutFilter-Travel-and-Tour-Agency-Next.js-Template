// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "./my-date-range.scss";

import { useState } from "react";

import { DateRange, DateRangeProps, RangeKeyDict } from "react-date-range";

export type SelectedRangeDate = {
  startDate: Date;
  endDate: Date;
  key: string;
};

type MyDateRangeProps = DateRangeProps & {
  onDateValue?: (dateRangeByKey: RangeKeyDict) => void;
};

function MyDateRange({ onDateValue, ...props }: MyDateRangeProps) {
  const [selectedRange, setSelecteRange] = useState<SelectedRangeDate>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  const disableDates = [
    new Date("2024-03-07"),
    new Date("2024-03-08"),
    new Date("2024-03-09")
  ];

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
      {...props}
    />
  );
}
export default MyDateRange;
