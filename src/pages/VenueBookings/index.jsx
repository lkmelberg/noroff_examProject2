import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
Link;

import ENDPOINTS from "../../utils/endpoints.js";
import { useFetchedData } from "../../hooks/api/useFetchedData.js";
import { VenueBookingsRender } from "../../components/render/bookings/VenueBookingsList";

export function VenueBookings() {
  let { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = useFetchedData(`${ENDPOINTS.VENUES}/${id}?_bookings=true`);

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
