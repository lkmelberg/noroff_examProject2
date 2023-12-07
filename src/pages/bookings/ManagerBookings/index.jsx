import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
Link;
import { BookingListRender } from "../../../components/render/bookings/BookingListRender";
import ENDPOINTS from "../../../utils/api/endpoints";
import { UseFetchedData } from "../../../utils/api/UseFetchedData";
import { token } from "../../../utils/Variables";

export function ManagerBookings() {
  let { id } = useParams();
  const endpoint = `${ENDPOINTS.BOOKINGS}`;

  const {
    data: bookings,
    isLoading,
    isError,
  } = UseFetchedData(endpoint, token);

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
