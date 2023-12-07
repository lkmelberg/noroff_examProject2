import { DeleteData } from "../../utils/api/Data";
import ENDPOINTS from "../../utils/api/endpoints";
import { token } from "../../utils/Variables";

export async function CardButtonAction({ id, action }) {
  try {
    if (action === "view") {
      window.location.href = `/venues/${id}`;
    } else if (action === "delete") {
      await DeleteData(`${ENDPOINTS.VENUES}/${id}`, token);
    } else if (action === "edit") {
      window.location.href = `/UpdateVenue/${id}`;
    } else if (action === "ViewBookings") {
      window.location.href = `/VenueBookings/${id}`;
    }
  } catch (error) {
    console.error("Error performing action:", error);
  }
}
