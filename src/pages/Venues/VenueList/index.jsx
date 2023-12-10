import React from "react";
import { useFetchedData } from "../../../hooks/api/useFetchedData.js";
import ENDPOINTS from "../../../utils/endpoints.js";
import { VenueListRender } from "../../../components/render/venue/VenueListRender";

export function VenueList() {
  const {
    data: venues,
    isLoading,
    isError,
  } = useFetchedData(ENDPOINTS.VENUES_ALL);

  return (
    <>
      <VenueListRender
        isLoading={isLoading}
        isError={isError}
        venues={venues}
        headerText="Venues"
        buttons={[{ action: "view", label: "See more" }]}
      />
    </>
  );
}
