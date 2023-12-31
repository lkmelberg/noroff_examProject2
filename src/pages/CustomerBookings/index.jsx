import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
Link;
import BookingListRender from "../../components/render/bookings/BookingListRender";
import ENDPOINTS from "../../utils/endpoints.js";
import { useFetchedData } from "../../hooks/api/useFetchedData.js";
import { token } from "../../utils/Variables";

export function CustomerBookings() {
  const {
    data: bookings,
    isLoading,
    isError,
  } = useFetchedData(ENDPOINTS.PROFILE_BOOKINGS, token);

  return (
    <Flex alignItems={"center"} direction={"column"}>
      <Text m={"2rem"} textStyle={"playfair"}>
        Your Bookings
      </Text>
      <BookingListRender
        isLoading={isLoading}
        isError={isError}
        bookings={bookings}
        buttons={[{ action: "view", label: "View Venue" }]}
      />
    </Flex>
  );
}
