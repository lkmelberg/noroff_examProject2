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
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log(responseData);

    // Log errors, status, and statusCode
    // if (responseData && responseData.errors) {
    //   console.log("Errors:", responseData.errors);
    // }
    // if (responseData && responseData.status) {
    //   console.log("Status:", responseData.status);
    // }
    // if (responseData && responseData.statusCode) {
    //   console.log("Status Code:", responseData.statusCode);
    // }

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// POST
export async function PostData(endpoint, data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(endpoint, requestOptions);

  if (!response.ok) {
    console.log(response);
    throw new Error("Network response was not ok");
  }
  console.log(response);
  return response.json();
}

// PUT
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

// DELETE
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
