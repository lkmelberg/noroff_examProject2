export async function EndpointDataPostUpdate(
  endpoint,
  method = "POST",
  body = {}
) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
