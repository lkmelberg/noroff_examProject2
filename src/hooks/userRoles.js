export function userRoles() {
  const accessToken = localStorage.getItem("accessToken");
  const venueManager = localStorage.getItem("venueManager");

  let isCustomer = false;
  let isManager = false;

  if (accessToken) {
    if (venueManager === "false") {
      isCustomer = true;
    } else if (venueManager === "true") {
      isManager = true;
    }
  }

  return { isCustomer, isManager };
}
