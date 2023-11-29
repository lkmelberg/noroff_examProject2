import React, { useState, useEffect } from "react";
import { Input, Heading } from "@chakra-ui/react";
import VenueCard from "../VenueCard";

export const VenueListRender = ({ isLoading, isError, venues }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
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
      <Heading color="brand.beige">Venues</Heading>

      <Input
        type="text"
        placeholder="Search venues..."
        onChange={handleSearch}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : sortedVenues.length > 0 ? (
        <div>
          <h2 color="brand.brick">Venues:</h2>
          <ul>
            {sortedVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </ul>
          <div>
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </div>
      ) : (
        <p>No venues available</p>
      )}
    </div>
  );
};
