import React from "react";
import { Flex } from "@chakra-ui/react";
import { formItemStyle } from "../Styling";

export function VenueCheckboxes({ errors, handleInputChange }) {
  return (
    <Flex minW={"22rem"} gap={".3rem"} direction={"column"}>
      {/* Wifi */}
      <div style={formItemStyle}>
        <label htmlFor="wifi">Wifi</label>
        <input
          id="wifi"
          name="wifi"
          type="checkbox"
          onClick={handleInputChange}
        />
        {errors.wifi && <div>{errors.wifi}</div>}
      </div>

      {/* Parking */}
      <div style={formItemStyle}>
        <label htmlFor="parking">Parking</label>
        <input
          id="parking"
          name="parking"
          type="checkbox"
          onChange={handleInputChange}
        />
        {errors.parking && <div>{errors.parking}</div>}
      </div>

      {/* Breakfast */}
      <div style={formItemStyle}>
        <label htmlFor="breakfast">Breakfast</label>
        <input
          id="breakfast"
          name="breakfast"
          type="checkbox"
          onChange={handleInputChange}
        />
        {errors.breakfast && <div>{errors.breakfast}</div>}
      </div>

      {/* Pets */}
      <div style={formItemStyle}>
        <label htmlFor="pets">Pets</label>
        <input
          id="pets"
          name="pets"
          type="checkbox"
          onChange={handleInputChange}
        />
        {errors.pets && <div>{errors.pets}</div>}
      </div>
    </Flex>
  );
}
