import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateData } from "../../hooks/api/data.js";
import { VenueForm } from "../../components/VenueForm";
import ENDPOINTS from "../../utils/endpoints.js";
import { Flex, Text } from "@chakra-ui/react";
import { token } from "../../utils/Variables";
import { fetchInitialValues } from "../../hooks/api/fetchInitialValues.js";

export function UpdateVenue() {
  let { id } = useParams();

  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedValues = await fetchInitialValues(id);
        setInitialValues(fetchedValues);
      } catch (error) {
        // Handle error fetching initial values
        console.error("Error fetching initial values:", error);
      }
    }

    fetchData();
  }, [id]);

  const updateEndpoint = `${ENDPOINTS.VENUES}/${id}`;

  const handleSubmit = async (values) => {
    try {
      const response = await updateData(updateEndpoint, values, token);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      padding={"1rem"}
      gap={"1rem"}>
      <Text textStyle={"playfair"}>Update Venue</Text>
      {initialValues ? (
        <VenueForm
          initialValues={initialValues}
          onSubmitForm={handleSubmit}
          // method="PUT"
          buttonText="Update Venue"
        />
      ) : (
        <p>Loading initial values...</p>
      )}
    </Flex>
  );
}
