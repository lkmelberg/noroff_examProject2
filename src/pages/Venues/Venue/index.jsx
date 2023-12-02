import React from "react";
import { useParams } from "react-router-dom";
import { VenueRender } from "../../../render/VenueRender";
import { useFetchData } from "../../../utils/api/UseFetchedData";
import ENDPOINTS from "../../../utils/api/endpoints";

export function Venue() {
  let { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = useFetchData(`${ENDPOINTS.VENUES}/${id}`);

  return (
    <div>
      <VenueRender isLoading={isLoading} isError={isError} venue={venue} />
    </div>
  );
}
