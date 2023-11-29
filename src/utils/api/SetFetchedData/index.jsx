import React from "react";
import { useState, useEffect } from "react";
import ENDPOINTS from "../endpoints";
import { FetchEndpointData } from "../FetchEndpointData";

export function SetFetchedData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const venuesData = await FetchEndpointData(ENDPOINTS.VENUES);
        // const profilesData = await FetchEndpointData(ENDPOINTS.PROFILE);
        // const bookingsData = await FetchEndpointData(ENDPOINTS.BOOKINGS);

        setData({
          venues: venuesData,
          //   profiles: profilesData,
          //   bookings: bookingsData,
        });
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, isError };
}
