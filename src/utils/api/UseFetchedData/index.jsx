import { useState, useEffect } from "react";
import { FetchData } from "../Data";

export function UseFetchedData(endpoint, accessToken = null) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const fetchedData = await FetchData(endpoint, "GET", {}, accessToken);

        setData(fetchedData);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [endpoint, accessToken]);

  return { data, isLoading, isError };
}
