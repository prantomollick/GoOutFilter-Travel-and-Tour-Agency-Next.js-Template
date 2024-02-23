// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "./my-date-range.scss";

import { DateRange, DateRangeProps, RangeKeyDict } from "react-date-range";

export type SelectedRangeDate = {
  startDate: Date;
  endDate: Date;
  key: string;
};

type MyDateRangeProps = DateRangeProps & {
  onDateValue?: (dateRangeByKey: RangeKeyDict) => void;
  onVisibleChange?: (visible: boolean) => void;
};

function MyDateRange({ ...props }: MyDateRangeProps) {
  return (
    <DateRange
      // ranges={[selectedRange]}
      // onChange={handleDateSelect}
      minDate={props.minDate || new Date()}
      direction={props.direction || "horizontal"}
      disabledDates={props.disabledDates}
      editableDateInputs={props.editableDateInputs || false}
      showMonthAndYearPickers={props.showMonthAndYearPickers || false}
      showDateDisplay={props.showDateDisplay || false}
      months={props.months || 1}
      // onRangeFocusChange={handleFocusChange}
      {...props}
    />
  );
}

export default MyDateRange;
