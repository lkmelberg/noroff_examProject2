import React from "react";
import { useParams } from "react-router-dom";
import { useFetchedData } from "../../../hooks/api/useFetchedData.js";
import ENDPOINTS from "../../../utils/endpoints.js";
import { VenueRender } from "../../../components/render/venue/VenueRender";
import { BookingCalendar } from "../../../components/BookingCalendar";

export function Venue() {
  let { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = useFetchedData(`${ENDPOINTS.VENUES}/${id}?_bookings=true`);

  return (
    <div>
      <VenueRender isLoading={isLoading} isError={isError} venue={venue} />
      <BookingCalendar
        isLoading={isLoading}
        isError={isError}
        venue={venue}></BookingCalendar>
    </div>
  );
}
