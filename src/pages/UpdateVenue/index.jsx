import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateData } from "../../utils/api/Data";
import { VenueForm } from "../../components/VenueForm";
import ENDPOINTS from "../../utils/api/endpoints";
import { Flex, Text } from "@chakra-ui/react";
import { token } from "../../utils/Variables";
import { FetchInitialValues } from "../../components/FetchInitialValues";

export function UpdateVenue() {
  let { id } = useParams();
  console.log(id);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedValues = await FetchInitialValues(id);
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
