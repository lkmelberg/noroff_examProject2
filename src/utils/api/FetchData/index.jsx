export async function fetchData(
  endpoint,
  method = "GET",
  data = {},
  authToken = null
) {
  const requestOptions = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (authToken) {
    requestOptions.headers.Authorization = `Bearer ${authToken}`;
  }

  if (method !== "GET" && method !== "HEAD") {
    requestOptions.body = JSON.stringify(data);
  }

  const response = await fetch(endpoint, requestOptions);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

// POST
export async function postData(endpoint, data) {
  try {
    const response = await fetchData(endpoint, "POST", data);
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error;
  }
}

// PUT
export async function updateData(endpoint, data, authToken) {
  try {
    const response = await fetchData(endpoint, "PUT", data, authToken);
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

// DELETE
export async function deleteData(endpoint, authToken) {
  try {
    const response = await fetchData(endpoint, "DELETE", null, authToken);
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
}
