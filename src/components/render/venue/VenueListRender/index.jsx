import React, { useState, useEffect } from "react";
import { Input, Flex, Button, Text } from "@chakra-ui/react";
import VenueCard from "../VenueCard";

export function VenueListRender({
  isLoading,
  isError,
  venues,
  headerText,
  buttons,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(8);
  const [filteredVenues, setFilteredVenues] = useState([]);
  const [sortedVenues, setSortedVenues] = useState([]);

  useEffect(() => {
    setFilteredVenues(
      venues
        .filter((venue) =>
          venue.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => new Date(b.created) - new Date(a.created))
    );
  }, [venues, searchTerm]);

  useEffect(() => {
    setSortedVenues(
      filteredVenues.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
    );
  }, [filteredVenues, pageNumber, pageSize]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const handlePreviousPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  return (
    <div>
      <Flex direction={"column"} marginTop={"1rem"} alignItems={"center"}>
        <Text textStyle={"playfair"} pb={3} color="brand.beige">
          {headerText}
        </Text>

        <Input
          bg={"brand.beige"}
          borderColor="brand.brand.beige"
          focusBorderColor="brand.brand.beige"
          color={"brand.darkBrick"}
          size={"md"}
          _placeholder={{ opacity: 0.9, color: "brand.darkBrick" }}
          maxWidth="sm"
          type="text"
          placeholder="Search for venue name"
          onChange={handleSearch}
        />
      </Flex>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : sortedVenues.length > 0 ? (
        <div>
          <Flex p={10} gap={10} wrap="wrap" justifyContent="center">
            {sortedVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} buttons={buttons} />
            ))}
          </Flex>

          <Flex gap={10} mb={5} alignItems={"center"} justifyContent={"center"}>
            <Button variant={"second"} onClick={handlePreviousPage}>
              Previous
            </Button>
            <Text>Page: {pageNumber + 1}</Text>
            <Button variant={"second"} onClick={handleNextPage}>
              Next
            </Button>
          </Flex>
        </div>
      ) : (
        <p>No venues found</p>
      )}
    </div>
  );
}
