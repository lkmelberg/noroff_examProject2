import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
Link;
import { BookingListRender } from "../../../components/render/bookings/BookingListRender";
import ENDPOINTS from "../../../utils/api/endpoints";
import { UseFetchedData } from "../../../utils/api/UseFetchedData";
import { token } from "../../../utils/Variables";

export function CustomerBookings() {
  const {
    data: bookings,
    isLoading,
    isError,
  } = UseFetchedData(ENDPOINTS.PROFILE_BOOKINGS, token);

  return (
    <BookingListRender
      isLoading={isLoading}
      isError={isError}
      bookings={bookings}
      headerText="Venues"
      buttons={[{ action: "view", label: "View Venue" }]}
    />
  );
}
