import ENDPOINTS from "../../utils/endpoints.js";
import { fetchVenueData } from "./fetchVenueData.js";

export async function fetchInitialValues(id) {
  try {
    const endpoint = `${ENDPOINTS.VENUES}/${id}`;

    const initialValues = await fetchVenueData(endpoint);

    return initialValues;
  } catch (error) {
    console.error("Error fetching initial values:", error);
    throw error;
  }
}
