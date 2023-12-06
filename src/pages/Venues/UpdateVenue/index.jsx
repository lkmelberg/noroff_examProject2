import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateData } from "../../../utils/api/Data";
import { FetchVenueData } from "../../../utils/api/FetchVenueData";
import { VenueForm } from "../../../components/VenueForm";
import ENDPOINTS from "../../../utils/api/endpoints";
import { Flex, Text } from "@chakra-ui/react";
import { token } from "../../../utils/Variables";

export async function fetchInitialValues(id) {
  try {
    // Assuming ENDPOINTS has a constant for fetching specific venues based on an ID
    const endpoint = `${ENDPOINTS.VENUES}/${id}`;

    // Make a GET request to fetch initial values
    const initialValues = await FetchVenueData(endpoint);
    console.log(initialValues);
    return initialValues;
  } catch (error) {
    console.error("Error fetching initial values:", error);
    throw error;
  }
}

export function UpdateVenue() {
  let { id } = useParams(); // Extract the 'id' from URL params
  console.log(id);
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
    console.log(values);
    try {
      const response = await UpdateData(updateEndpoint, values, token);
      console.log(response);
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
