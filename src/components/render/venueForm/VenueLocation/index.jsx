import React from "react";
import { Flex } from "@chakra-ui/react";
import { formItemStyle } from "../Styling";

export function VenueLocation({ values, errors, handleInputChange }) {
  return (
    <Flex minW={"22rem"} gap={".3rem"} direction={"column"}>
      {/* address  */}
      <div style={formItemStyle}>
        <label htmlFor="address">Address</label>
        <input
          id="adress"
          name="location.address"
          type="text"
          // value={values.location.address}
          onChange={handleInputChange}
        />
        {errors.location && errors.location.address && (
          <div>{errors.location.address}</div>
        )}
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
        {errors.location && errors.location.city && (
          <div>{errors.location.city}</div>
        )}
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
        {errors.location && errors.location.zip && (
          <div>{errors.location.zip}</div>
        )}
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
        {errors.location && errors.location.country && (
          <div>{errors.location.country}</div>
        )}
      </div>
    </Flex>
  );
}
