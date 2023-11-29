import React, { useState, useEffect } from "react";
import { SetFetchedData } from "../../utils/api/SetFetchedData";
import { usePagination } from "../../utils/UsePagination";
import { Search } from "../../utils/Search";
import VenueCard from "../VenueCard";

export function VenueListRender() {
  const { data, isLoading, isError } = SetFetchedData();
  const venues = data.venues;

  // pagination
  const {
    displayedItems: paginatedVenues,
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(venues);

  // search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedVenues, setSearchedVenues] = useState([]);

  useEffect(() => {
    if (venues && venues.length > 0) {
      const filteredVenues = Search(venues, searchQuery);
      setSearchedVenues(filteredVenues);
    }
  }, [venues, searchQuery]);

  // Apply pagination to the searched venues
  const {
    displayedItems: paginatedSearchedVenues,
    currentPage: searchedCurrentPage,
    totalPages: searchedTotalPages,
    handleNextPage: handleNextSearchedPage,
    handlePreviousPage: handlePreviousSearchedPage,
  } = usePagination(searchedVenues);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Reset pagination to the first page when the search query changes
    handlePreviousSearchedPage();
  };

  return (
    <div>
      <h1>Data Fetching Example</h1>

      <div>
        <input
          type="text"
          placeholder="Search venues..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : searchedVenues.length > 0 ? (
        <div>
          <h2>Venues:</h2>
          <ul>
            {paginatedSearchedVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </ul>
          <div>
            <button
              onClick={handlePreviousSearchedPage}
              disabled={searchedCurrentPage === 1}>
              Previous
            </button>
            <button
              onClick={handleNextSearchedPage}
              disabled={searchedCurrentPage === searchedTotalPages}>
              Next
            </button>
            <p>
              Page: {searchedCurrentPage} of {searchedTotalPages}
            </p>
          </div>
        </div>
      ) : (
        <p>No venues available</p>
      )}
    </div>
  );
}
