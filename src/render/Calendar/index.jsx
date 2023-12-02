import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar({ isLoading, isError, venue }) {
  const [disabledDates, setDisabledDates] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (!venue || !venue.bookings) return;

    const disabled = venue.bookings.map((booking) => {
      const startDate = new Date(booking.dateFrom);
      const endDate = new Date(booking.dateTo);
      const disabledDates = [];

      for (
        let date = startDate;
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        disabledDates.push(new Date(date));
      }

      return disabledDates;
    });

    setDisabledDates(disabled.flat());
  }, [venue]);

  console.log(venue.bookings);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          excludeDates={disabledDates}
          selectsRange
          selectsDisabledDaysInRange
          inline
        />
      )}
    </div>
  );
}
