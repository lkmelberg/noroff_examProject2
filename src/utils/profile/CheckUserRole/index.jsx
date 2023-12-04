import React from "react";

export function CheckUserRole() {
  const accessToken = localStorage.getItem("accessToken");
  const venueManager = localStorage.getItem("isManager");

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
