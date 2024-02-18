// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "./my-date-range.scss";

import { useState } from "react";

import { DateRangeProps, DateRange, RangeKeyDict } from "react-date-range";

type MyDateRangeProps = DateRangeProps & {
  onDateValue?: (dateRangeByKey: RangeKeyDict) => void;
};

function MyDateRange({ onDateValue, ...props }: MyDateRangeProps) {
  const [selectedRange, setSelecteRange] = useState<{
    startDate: Date;
    endDate: Date;
    key: string;
  }>({
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
      minDate={new Date()}
      direction={props.direction || "horizontal"}
      disabledDates={props.disabledDates}
      editableDateInputs={props.editableDateInputs || false}
      showMonthAndYearPickers={props.showMonthAndYearPickers}
      showDateDisplay={props.showDateDisplay}
      months={2}
      {...props}
    />
  );
}
export default MyDateRange;
