import React, { useState, useEffect } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import VenueBookingsCard from "../VenueBookingsCard";

export function VenueBookingsRender({ isLoading, isError, venue }) {
  const { name, media, bookings } = venue;

  const venueMedia = media && media.length > 0 ? media[0] : "";

  const [bookingState, setBookingState] = useState([]);

  useEffect(() => {
    if (bookings) {
      setBookingState(bookings);
    }
  }, [bookings]);

  return (
    <Flex direction="column" padding="1rem" alignItems="center">
      <Text textStyle="playfair" margin="1rem">
        Bookings for: {name}
      </Text>
      <Image
        objectFit="cover"
        borderRadius="full"
        boxSize="10rem"
        alt="Venue image"
        src={venueMedia}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : bookingState.length > 0 ? (
        bookingState.map((booking) => (
          <VenueBookingsCard key={booking.id} booking={booking} />
        ))
      ) : (
        <p>No bookings found</p>
      )}
    </Flex>
  );
}
