import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { VenueForm } from "../../../components/VenueForm";

export function CreateVenue() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      padding={"1rem"}
      gap={"1rem"}>
      <Text textStyle={"playfair"}>Create Venue</Text>
      <VenueForm />
    </Flex>
  );
}
