import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
Link;
import { VenueListRender } from "../../../components/render/venue/VenueListRender";
import ENDPOINTS from "../../../utils/api/endpoints";
import { UseFetchedData } from "../../../utils/api/UseFetchedData";
import { token } from "../../../utils/Variables";

export function ManagerVenues() {
  const {
    data: venues,
    isLoading,
    isError,
  } = UseFetchedData(ENDPOINTS.MANAGER_VENUES, token);

  return (
    <Flex direction={"column"} marginTop={"3rem"} alignItems={"center"}>
      <Button variant={"second"}>
        <Link to={"/CreateVenue"}>Create venue</Link>
      </Button>

      <VenueListRender
        isLoading={isLoading}
        isError={isError}
        venues={venues}
        headerText="Your Venues"
        buttons={[
          { action: "edit", label: "Edit Venue" },
          { action: "delete", label: "Delete Venue" },
        ]}
      />
    </Flex>
  );
}
