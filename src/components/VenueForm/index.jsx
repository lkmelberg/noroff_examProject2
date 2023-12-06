import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PostData } from "../../utils/api/Data";
import ENDPOINTS from "../../utils/api/endpoints";
import { validationSchema } from "../../utils/YupSchema";
import { token } from "../../utils/Variables";
import { Button, Flex } from "@chakra-ui/react";
import { formStyle } from "../render/venueForm/Styling";
import { VenueBasics } from "../render/venueForm/VenueBasics";
import { VenueLocation } from "../render/venueForm/VenueLocation";
import { VenueCheckboxes } from "../render/venueForm/VenueCheckboxes";

export function VenueForm() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    media: [],
    price: 0,
    maxGuests: 0,
    meta: {
      wifi: false, // Optional (default: false)
      parking: false, // Optional (default: false)
      breakfast: false, // Optional (default: false)
      pets: false, // Optional (default: false)
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "media") {
      const mediaArray = value.split(",").map((url) => url.trim());
      setValues({ ...values, [name]: mediaArray });
    } else if (name.startsWith("location.")) {
      const locationField = name.split("location.")[1];
      setValues({
        ...values,
        location: {
          ...values.location,
          [locationField]: value,
        },
      });
    } else {
      const fieldValue =
        event.target.type === "number" ? parseInt(value, 10) : value;
      setValues({ ...values, [name]: fieldValue });
    }
    // console.log(values);
  };

  const handleMetaChange = (event) => {
    const { name, checked } = event.target;
    setValues({
      ...values,
      meta: {
        ...values.meta,
        [name]: checked,
      },
    });
  };

  const handleSubmit = async (event) => {
    console.log(values);
    event.preventDefault();
    try {
      await validationSchema.validate(values, { abortEarly: false });
      const response = await PostData(ENDPOINTS.VENUES, values, token);
      // Log the response from the request
      console.log("Response from POST request:", response);

      // If update is successful, clear error message
      setErrors("");
      setFormStatus("success");

      setTimeout(function () {
        location.reload();
      }, 2500);
    } catch (error) {
      console.error("Error creating venue:", error);
      setFormStatus("error");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {formStatus === "success" && (
        <Flex direction={"column"}>
          Venue Created successfully! Reloading page, please wait!
        </Flex>
      )}
      {formStatus === "error" && <div>Venue was not created - epic fail</div>}
      <Flex
        alignItems={"flex-start"}
        wrap={"wrap"}
        gap={"1rem"}
        width={"100%"}
        justifyContent={"space-between"}>
        <VenueBasics
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
        />
        <VenueLocation
          values={values}
          errors={errors}
          handleInputChange={handleInputChange}
        />
      </Flex>
      <Flex
        alignItems={"center"}
        wrap={"wrap"}
        gap={"1rem"}
        width={"100%"}
        justifyContent={"space-between"}>
        <VenueCheckboxes errors={errors} handleMetaChange={handleMetaChange} />
        <Button variant={"second"} type="submit">
          Create Venue
        </Button>
      </Flex>
    </form>
  );
}
