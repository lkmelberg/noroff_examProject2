import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../utils/api/UseFetchedData";
import ENDPOINTS from "../../../utils/api/endpoints";
import { VenueRender } from "../../../render/venue/VenueRender";
import { Calendar } from "../../../render/venue/Calendar";

export function Venue() {
  let { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = useFetchData(`${ENDPOINTS.VENUES}/${id}?_bookings=true`);

  return (
    <div>
      <VenueRender isLoading={isLoading} isError={isError} venue={venue} />
      <Calendar
        isLoading={isLoading}
        isError={isError}
        venue={venue}></Calendar>
    </div>
  );
}
