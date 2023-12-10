import React, { useState, useEffect } from "react";
import BookingCard from "../BookingCard";
import { Flex } from "@chakra-ui/react";

export default function BookingListRender({
  isLoading,
  isError,
  bookings,
  buttons,
}) {
  const [bookingState, setBookingState] = useState([]);

  useEffect(() => {
    if (bookings) {
      setBookingState(bookings);
    }
  }, [bookings]);

  return (
    <Flex
      direction={"row"}
      wrap={"wrap"}
      gap={10}
      marginTop={"1rem"}
      justifyContent={"center"}>
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
