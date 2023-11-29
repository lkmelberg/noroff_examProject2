import React, { useState, useEffect } from "react";

function paginate(array, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return array.slice(startIndex, endIndex);
}

function getTotalPages(arrayLength, itemsPerPage) {
  return Math.ceil(arrayLength / itemsPerPage);
}

export function usePagination(data) {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const paginatedData = paginate(data, currentPage, itemsPerPage);
      setDisplayedItems(paginatedData);
    }
  }, [data, currentPage]);

  function handleNextPage() {
    const totalPages = getTotalPages(data.length, itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  // Return empty object if data is not an array or is empty
  if (!Array.isArray(data) || data.length === 0) {
    return {
      displayedItems: [],
      currentPage,
      totalPages: 1,
      handleNextPage,
      handlePreviousPage,
    };
  }

  return {
    displayedItems,
    currentPage,
    totalPages: getTotalPages(data.length, itemsPerPage),
    handleNextPage,
    handlePreviousPage,
  };
}
