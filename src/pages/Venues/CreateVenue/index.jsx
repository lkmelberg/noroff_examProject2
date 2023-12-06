import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { VenueForm } from "../../../components/VenueForm";
import ENDPOINTS from "../../../utils/api/endpoints";
import { PostData } from "../../../utils/api/Data";
import { token } from "../../../utils/Variables";

const handleSubmit = async (values) => {
  console.log(values);
  try {
    const response = await PostData(ENDPOINTS.VENUES, values, token);
    console.log(response);
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
      <VenueForm onSubmitForm={handleSubmit} buttonText="Create Venue" />
    </Flex>
  );
}
