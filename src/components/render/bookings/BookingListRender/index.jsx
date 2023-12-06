import React, { useState, useEffect } from "react";
import BookingCard from "../BookingCard";
import { Flex } from "@chakra-ui/react";

export function BookingListRender({ isLoading, isError, bookings, buttons }) {
  const [bookingState, setBookingState] = useState([]);

  useEffect(() => {
    if (bookings) {
      setBookingState(bookings);
    }
  }, [bookings]);

  return (
    <Flex direction={"column"} marginTop={"1rem"} alignItems={"center"}>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : bookingState.length > 0 ? (
        bookingState.map((booking) => (
          <BookingCard key={booking.id} booking={booking} buttons={buttons} />
        ))
      ) : (
        <p>No bookings found</p>
      )}
    </Flex>
  );
}
