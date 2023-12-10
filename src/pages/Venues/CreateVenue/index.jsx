import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { VenueForm } from "../../../components/VenueForm";
import ENDPOINTS from "../../../utils/endpoints.js";
import { postData } from "../../../hooks/api/data.js";
import { token } from "../../../utils/Variables";

const handleSubmit = async (values) => {
  try {
    const response = await postData(ENDPOINTS.VENUES, values, token);
  } catch (error) {
    console.log("error");
  }
};

export function CreateVenue() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      padding={"1rem"}
      gap={"1rem"}>
      <Text textStyle={"playfair"}>Create Venue</Text>
      <Text textStyle={"lato"}>
        Create your venue. fields marked (r) must be filled in
      </Text>
      <VenueForm onSubmitForm={handleSubmit} buttonText="Create Venue" />
    </Flex>
  );
}
