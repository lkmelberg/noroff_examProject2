// import React, { useState, useEffect } from "react";
import { Heading, Flex } from "@chakra-ui/react";
// import VenueCard from "../VenueCard";

export function VenueRender({ isLoading, isError, venue }) {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [pageNumber, setPageNumber] = useState(0);
  //   const [pageSize, setPageSize] = useState(8);
  //   const [filteredVenues, setFilteredVenues] = useState([]);
  //   const [sortedVenues, setSortedVenues] = useState([]);

  //   useEffect(() => {
  //     setFilteredVenues(
  //       venues
  //         .filter((venue) =>
  //           venue.name.toLowerCase().includes(searchTerm.toLowerCase())
  //         )
  //         .sort((a, b) => new Date(b.created) - new Date(a.created))
  //     );
  //   }, [venues, searchTerm]);

  //   useEffect(() => {
  //     setSortedVenues(
  //       filteredVenues.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
  //     );
  //   }, [filteredVenues, pageNumber, pageSize]);

  //   const handleSearch = (e) => {
  //     setSearchTerm(e.target.value);
  //   };

  //   const handleNextPage = () => {
  //     setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //   };

  //   const handlePreviousPage = () => {
  //     setPageNumber((prevPageNumber) => prevPageNumber - 1);
  //   };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        <Flex direction={"column"} marginTop={"1rem"} alignItems={"center"}>
          <Heading pb={3} color="brand.beige">
            {venue.name}
          </Heading>
        </Flex>
      )}
    </div>
  );
}
