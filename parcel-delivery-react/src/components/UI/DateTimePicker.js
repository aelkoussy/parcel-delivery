import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import React, { PureComponent } from "react";

export default class DateTime extends PureComponent {
  state = { selectedDate: new Date() };

  // added by Ahmed to pass chosen value to parent component
  passChangeToParent = () =>
    this.props.onDateTimeChosen(this.state.selectedDate);

  handleDateChange = date => {
    this.setState({ selectedDate: date }, this.passChangeToParent);
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker value={selectedDate} onChange={this.handleDateChange} />
      </MuiPickersUtilsProvider>
    );
  }
}
