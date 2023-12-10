export function logOut() {
  // Clear localStorage here
  localStorage.clear();

  // Redirect to the Venues page
  window.location.replace("/");
}
