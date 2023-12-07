import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input, Button } from "@chakra-ui/react"; // Import your UI library components
import { PostData } from "../../utils/api/Data";
import ENDPOINTS from "../../utils/api/endpoints"; // Import API endpoints
import { isCustomer, token } from "../../utils/Variables";

export function Calendar({ isLoading, isError, venue }) {
  const [disabledDates, setDisabledDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(0);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleCreateBooking = async () => {
    const accessToken = token;
    try {
      const bookingData = {
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString(),
        guests: guests,
        venueId: venue.id,
      };

      console.log(bookingData);
      // Make sure to replace 'YOUR_BOOKING_ENDPOINT' with the actual booking endpoint
      const response = await PostData(
        ENDPOINTS.BOOKINGS,
        bookingData,
        accessToken
      );
      console.log("Booking created:", response);
      window.location.href = "/CustomerBookings";
      // Handle success or perform necessary actions after creating the booking
    } catch (error) {
      console.error("Error creating booking:", error);
      // Handle error
    }
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

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        <>
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

          {isCustomer && (
            <>
              <Input
                type="number"
                placeholder="Number of guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                marginBottom="1rem"
              />
              <Button colorScheme="teal" onClick={handleCreateBooking}>
                Create Booking
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
