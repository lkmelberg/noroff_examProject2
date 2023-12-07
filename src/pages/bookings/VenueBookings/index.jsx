import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
Link;

import ENDPOINTS from "../../../utils/api/endpoints";
import { UseFetchedData } from "../../../utils/api/UseFetchedData";
import { VenueBookingsRender } from "../../../components/render/bookings/VenueBookingsList";
// import { token } from "../../../utils/Variables";

export function VenueBookings() {
  let { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = UseFetchedData(`${ENDPOINTS.VENUES}/${id}?_bookings=true`);

  return (
    <div>
      <VenueBookingsRender
        isLoading={isLoading}
        isError={isError}
        venue={venue}
      />
    </div>
  );
}
