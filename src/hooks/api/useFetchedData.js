import { useState, useEffect } from "react";
import { fetchData } from "./data";

export function useFetchedData(endpoint, accessToken = null) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const fetchedData = await fetchData(endpoint, "GET", {}, accessToken);

        setData(fetchedData);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      }

      setIsLoading(false);
    };

    getData();
  }, [endpoint, accessToken]);

  return { data, isLoading, isError };
}
