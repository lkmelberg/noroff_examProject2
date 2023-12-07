import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { formItemStyle } from "../Styling";

export function VenueBasics({ values, handleInputChange }) {
  return (
    <Flex minW={"22rem"} gap={".3rem"} direction={"column"}>
      <div style={formItemStyle}>
        <label htmlFor="name">Name(r)</label>
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
        <label htmlFor="description">Description(r)</label>
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
          Image URL{" "}
          <Text textStyle={"tinyText"}>
            (for multiple, seperate with comma)
          </Text>
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
        <label htmlFor="price">Price per night(r)</label>
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
        <label htmlFor="maxGuests">Max Guests(r)</label>
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
