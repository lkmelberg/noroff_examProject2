import React from "react";
export function LogOut() {
  // Clear localStorage here
  localStorage.clear();

  // Redirect to the Venues page
  window.location.replace("/");
}
