import { Component } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class MyDateRangePicker extends Component {
  state = {
    selectionRange: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  };

  handleSelect = (ranges) => {
    // Handle selected date range here
    console.log("Selected range:", ranges.selection);
  };

  render() {
    const { selectionRange } = this.state;
    return (
      <DateRangePicker ranges={[selectionRange]} onChange={this.handleSelect} />
    );
  }
}

export default MyDateRangePicker;
