import React from "react";
import { Flex } from "@chakra-ui/react";
import { formItemStyle } from "../Styling";

export function VenueBasics({ values, handleInputChange }) {
  return (
    <Flex minW={"22rem"} gap={".3rem"} direction={"column"}>
      <div style={formItemStyle}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleInputChange}
        />
      </div>

      {/* Description */}
      <div style={formItemStyle}>
        <label htmlFor="description">Description</label>
        <textarea
          rows="5"
          id="description"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        />
      </div>

      {/* Image */}
      <div style={formItemStyle}>
        <label htmlFor="media">
          Images URL
          <br />
          (seperate by comma)
        </label>

        <textarea
          rows="5"
          id="media"
          name="media"
          value={values.media}
          onChange={handleInputChange}
        />
      </div>

      {/* Price */}
      <div style={formItemStyle}>
        <label htmlFor="price">Price per night</label>
        <input
          id="price"
          name="price"
          type="number"
          min="0"
          value={values.price}
          onChange={handleInputChange}
        />
      </div>

      {/* Max Guests */}
      <div style={formItemStyle}>
        <label htmlFor="maxGuests">Max Guests</label>
        <input
          id="maxGuests"
          name="maxGuests"
          type="number"
          min="0"
          value={values.maxGuests}
          onChange={handleInputChange}
        />
      </div>
    </Flex>
  );
}
