import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
Link;

export function ManagerVenues() {
  return (
    <div>
      <Button variant={"second"}>
        <Link to={"/CreateVenue"}>Create new venue</Link>
      </Button>
    </div>
  );
}
