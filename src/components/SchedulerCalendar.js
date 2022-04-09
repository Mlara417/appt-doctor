import React, { Component } from "react";
import Calendar from "react-calendar";

class SchedulerCalendar extends Component {
  constructor() {
    super();
    this.locale = "en-US";
    this.dateFormat = "mm-dd-yyyy";
    this.date = new Date();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(date) {
    console.log(this.dateFormatter(date, this.dateFormat));
  }

  dateFormatter(inputDate, format) {
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //replace the month
    format = format.replace("mm", month.toString().padStart(2, "0"));

    //replace the year
    if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2, 2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2, "0"));

    return format;
  }

  render() {
    return (
      <Calendar
        value={this.date}
        locale={this.locale}
        minDate={this.date}
        maxDetail="month"
        onClickDay={this.handleClick}
      />
    );
  }
}

export default SchedulerCalendar;
