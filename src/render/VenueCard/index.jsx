import React from "react";

function VenueCard({ venue }) {
  return (
    <li key={venue.id}>
      {venue.name}
      {/* Add other venue details as needed */}
    </li>
  );
}

export default VenueCard;
