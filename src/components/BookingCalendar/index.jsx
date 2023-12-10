import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { Input, Button, Text, Flex } from "@chakra-ui/react";
import { postData } from "../../hooks/api/data.js";
import ENDPOINTS from "../../utils/endpoints.js";
import { isCustomer, token } from "../../utils/Variables/index.jsx";

export function BookingCalendar({ isLoading, isError, venue }) {
  const [disabledDates, setDisabledDates] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(0);
  const [bookingError, setBookingError] = useState(null);

  let { id } = useParams();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleCreateBooking = async () => {
    try {
      const bookingData = {
        dateFrom: startDate.toISOString(),
        dateTo: endDate.toISOString(),
        guests: guests,
        venueId: venue.id,
      };

      const response = await postData(
        `${ENDPOINTS.BOOKINGS}`,
        bookingData,
        token
      );

      window.location.href = "/CustomerBookings";
    } catch (error) {
      console.error("Error creating booking:", error);
      setBookingError(
        "Failed to create booking. Please try again. Remeber to select dates and number of guests. Check that you are not adding more guests than allowed :)"
      );
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
    <Flex justifyContent={"center"} gap={"1rem"} padding={"1rem"} wrap={"wrap"}>
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
            <Flex alignItems={"center"} direction={"column"}>
              <Text textStyle={"lato"}>Number of Guests (required)</Text>
              <Input
                width={"5rem"}
                borderColor={"brand.beige"}
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                marginBottom="1rem"
              />
              <Button variant="second" onClick={handleCreateBooking}>
                Create Booking
              </Button>
              {bookingError && (
                <Text color="red" textStyle={"lato"} marginBottom="1rem">
                  {bookingError}
                </Text>
              )}
            </Flex>
          )}
        </>
      )}
      {!isCustomer && !isLoading && !isError && (
        <Text textStyle={"lato"}>
          To make a booking, please log in to your customer account.
        </Text>
      )}
    </Flex>
  );
}
