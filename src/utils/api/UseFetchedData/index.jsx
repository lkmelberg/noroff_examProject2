import { useState, useEffect } from "react";
import { FetchVenueData } from "../FetchVenueData";

export function useFetchData(endpoint) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const fetchedData = await FetchVenueData(endpoint);
        setData(fetchedData);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, isError };
}
