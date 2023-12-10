import { Text } from "@chakra-ui/react";
import React from "react";

export function CustomerProfile() {
  return (
    <Text p={"3rem"} textStyle={"lato"}>
      You are logged in as a customer. If you would like to create and manage
      properties, please log out and log in with /or create your manager
      account.
    </Text>
  );
}
