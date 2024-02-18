// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import "./my-date-range.scss";
import { useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";

function MyDateRange() {
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
    // new Date("2024-02-20"), // Disable February 20, 2024
    new Date("2024-03-07"), // Disable February 25, 2024
    new Date("2024-03-08"), // Disable February 25, 2024
    new Date("2024-03-09") // Disable February 25, 2024
  ];

  const handleDateSelect = (rangesByKey: RangeKeyDict) => {
    setSelecteRange({
      startDate: rangesByKey.selection!.startDate!,
      endDate: rangesByKey.selection!.endDate!,
      key: "selection"
    });
  };

  return (
    <>
      <DateRange
        ranges={[selectedRange]}
        onChange={handleDateSelect}
        minDate={new Date()}
        direction="horizontal"
        disabledDates={disableDates}
        editableDateInputs={false}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
        months={2}
        // showMonthArrow={true}
        // color="#02044A"
        // rangeColors={["#13357B", "#F5F5F5"]}
      />
    </>
  );
}
export default MyDateRange;
