import React from "react";
import ENDPOINTS from "../../utils/api/endpoints";
import { FetchVenueData } from "../../utils/api/FetchVenueData";

export async function FetchInitialValues(id) {
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
