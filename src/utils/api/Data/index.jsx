export async function FetchData(
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
    console.log("Response:", response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
    throw error;
  }
}

export async function PostData(endpoint, data, accessToken) {
  try {
    const response = await FetchData(endpoint, "POST", data, accessToken);
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error creating venue:", error);
    throw error;
  }
}

export async function UpdateData(endpoint, data, accessToken) {
  try {
    const response = await FetchData(endpoint, "PUT", data, accessToken);
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function DeleteData(endpoint, accessToken) {
  try {
    const response = await FetchData(endpoint, "DELETE", null, accessToken);
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
}
