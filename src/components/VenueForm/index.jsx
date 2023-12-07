import React, { useState, useEffect } from "react";
import { Button, Flex, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { formStyle } from "../render/venueForm/Styling";
import { VenueBasics } from "../render/venueForm/VenueBasics";
import { VenueLocation } from "../render/venueForm/VenueLocation";
import { VenueCheckboxes } from "../render/venueForm/VenueCheckboxes";
import { validationSchema } from "../../utils/YupSchema";
import * as yup from "yup";

export function VenueForm({ initialValues, onSubmitForm, buttonText }) {
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  const [values, setValues] = useState({
    name: "",
    description: "",
    media: [],
    price: 0,
    maxGuests: 0,
    rating: 0,
    created: "",
    updated: "",
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
      continent: "",
      lat: 0,
      lng: 0,
    },
  });

  useEffect(() => {
    if (initialValues) {
      setValues(initialValues);
    }
  }, [initialValues]);

  const validateField = async (fieldName, fieldValue) => {
    try {
      await yup.reach(validationSchema, fieldName).validate(fieldValue);
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error.message,
      }));
    }
  };

  const handleInputChange = async (event) => {
    const { name, value, type, checked } = event.target;

    let updatedValues = { ...values };

    if (name === "media") {
      const mediaArray = value.split(",").map((url) => url.trim());
      updatedValues = { ...updatedValues, [name]: mediaArray };
    } else if (type === "checkbox") {
      updatedValues = {
        ...updatedValues,
        meta: {
          ...updatedValues.meta,
          [name]: checked,
        },
      };
    } else if (name.startsWith("location.")) {
      const locationField = name.split("location.")[1];
      updatedValues = {
        ...updatedValues,
        location: {
          ...updatedValues.location,
          [locationField]: value,
        },
      };
    } else {
      updatedValues = {
        ...updatedValues,
        [name]: type === "number" ? parseInt(value, 10) : value,
      };

      await validateField(name, value);
    }

    setValues(updatedValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(values, { abortEarly: false });
      if (onSubmitForm) {
        onSubmitForm(values);
        setErrors({});
        setFormStatus("success");
        setTimeout(function () {
          window.location.href = "/ManagerVenues";
        }, 2500);
      }
    } catch (error) {
      console.error("Error creating/updating venue:", error);
      setFormStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {formStatus === "success" && (
        <Flex direction={"column"}>Success! Please Wait for redirect</Flex>
      )}
      {formStatus === "error" && (
        <Flex direction={"column"}>
          Venue was not created/updated - epic fail
        </Flex>
      )}
      <Flex
        alignItems={"flex-start"}
        wrap={"wrap"}
        gap={"1rem"}
        width={"100%"}
        justifyContent={"space-between"}>
        <VenueBasics
          values={values}
          // errors={errors}
          handleInputChange={handleInputChange}
        />
        <VenueLocation
          values={values}
          // errors={errors}
          handleInputChange={handleInputChange}
        />
      </Flex>
      <Flex
        alignItems={"center"}
        wrap={"wrap"}
        gap={"1rem"}
        width={"100%"}
        justifyContent={"space-between"}>
        <VenueCheckboxes
          errors={errors}
          handleInputChange={handleInputChange}
        />
        <Button variant={"second"} type="submit">
          {buttonText}
        </Button>
      </Flex>

      {/* Displaying form validation errors */}
      <Flex direction="column">
        {Object.keys(errors).map((fieldName) => (
          <FormControl key={fieldName} isInvalid={!!errors[fieldName]}>
            <FormErrorMessage
              fontSize="md" // Change font size
              color="brand.beige" // Change text color
              mt={1}
              textDecoration="underline" // Add underline to the text
              textDecorationColor="red">
              Errors you must fix before you can continue: <br />
              {errors[fieldName]}
            </FormErrorMessage>
          </FormControl>
        ))}
      </Flex>
    </form>
  );
}
