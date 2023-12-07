import React from "react";
import { Flex } from "@chakra-ui/react";
import { formItemStyle } from "../Styling";

export function VenueLocation({ values, handleInputChange }) {
  return (
    <Flex minW={"22rem"} gap={".3rem"} direction={"column"}>
      {/* address  */}
      <div style={formItemStyle}>
        <label htmlFor="address">Address</label>
        <input
          id="adress"
          name="location.address"
          type="text"
          onChange={handleInputChange}
        />
      </div>

      {/* city  */}
      <div style={formItemStyle}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="location.city"
          type="text"
          value={values.location.city}
          onChange={handleInputChange}
        />
      </div>

      {/* zip  */}
      <div style={formItemStyle}>
        <label htmlFor="zip">Zip</label>
        <input
          id="zip"
          name="location.zip"
          type="number"
          min="0"
          value={values.location.zip}
          onChange={handleInputChange}
        />
      </div>

      {/* country  */}
      <div style={formItemStyle}>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="location.country"
          type="text"
          value={values.location.country}
          onChange={handleInputChange}
        />
      </div>
    </Flex>
  );
}
