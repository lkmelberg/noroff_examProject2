// VenueList.js
import React from "react";
import { useFetchData } from "../../../utils/api/UseFetchedData";
import ENDPOINTS from "../../../utils/api/endpoints";
import { VenueListRender } from "../../../render/venue/VenueListRender";

export function VenueList() {
  const { data: venues, isLoading, isError } = useFetchData(ENDPOINTS.VENUES);

  return (
    <div>
      <VenueListRender
        isLoading={isLoading}
        isError={isError}
        venues={venues}
      />
    </div>
  );
}
