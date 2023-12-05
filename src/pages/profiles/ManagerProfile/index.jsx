import React from "react";
import { Text } from "@chakra-ui/react";

export function ManagerProfile() {
  return (
    <Text p={"3rem"} textStyle={"lato"}>
      You are logged in as a manager. If you would like to create and see
      bookings you have made, please log out and log back in to /or create, your
      manager account.
    </Text>
  );
}
