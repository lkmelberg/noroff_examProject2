import React from "react";
import { useParams } from "react-router-dom";
import { UseFetchedData } from "../../../utils/api/UseFetchedData";
import ENDPOINTS from "../../../utils/api/endpoints";
import { VenueRender } from "../../../components/render/venue/VenueRender";
import { Calendar } from "../../../components/render/venue/Calendar";

export function Venue() {
  let { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = UseFetchedData(`${ENDPOINTS.VENUES}/${id}?_bookings=true`);

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
