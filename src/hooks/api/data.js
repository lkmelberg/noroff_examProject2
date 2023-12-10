export async function fetchData(
  endpoint,
  method = "GET",
  data = {},
  accessToken = null
) {
  const requestOptions = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (accessToken) {
    requestOptions.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (method !== "GET" && method !== "HEAD") {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(endpoint, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
    throw error;
  }
}

export async function postData(endpoint, data, accessToken) {
  try {
    const response = await fetchData(endpoint, "POST", data, accessToken);

    return response;
  } catch (error) {
    console.error("Error creating venue:", error);
    throw error;
  }
}

export async function updateData(endpoint, data, accessToken) {
  try {
    const response = await fetchData(endpoint, "PUT", data, accessToken);

    return response;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function deleteData(endpoint, accessToken) {
  try {
    const response = await fetchData(endpoint, "DELETE", null, accessToken);

    window.location.reload();
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
    window.location.reload();
    throw error;
  }
}
