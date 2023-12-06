import React from "react";
import { UseFetchedData } from "../../../utils/api/UseFetchedData";
import ENDPOINTS from "../../../utils/api/endpoints";
import { VenueListRender } from "../../../components/render/venue/VenueListRender";

export function VenueList() {
  const { data: venues, isLoading, isError } = UseFetchedData(ENDPOINTS.VENUES);

  return (
    <>
      <VenueListRender
        isLoading={isLoading}
        isError={isError}
        venues={venues}
        headerText="Venues"
      />
    </>
  );
}
