import React, { useState, useEffect } from "react";
import { validationSchema } from "../../utils/YupSchema";
import { Button, Flex } from "@chakra-ui/react";
import { formStyle } from "../render/venueForm/Styling";
import { VenueBasics } from "../render/venueForm/VenueBasics";
import { VenueLocation } from "../render/venueForm/VenueLocation";
import { VenueCheckboxes } from "../render/venueForm/VenueCheckboxes";

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

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "media") {
      const mediaArray = value.split(",").map((url) => url.trim());
      setValues({ ...values, [name]: mediaArray });
    } else if (type === "checkbox") {
      setValues({
        ...values,
        meta: {
          ...values.meta,
          [name]: checked,
        },
      });
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
      setValues({
        ...values,
        [name]: type === "number" ? parseInt(value, 10) : value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(values, { abortEarly: false });
      if (onSubmitForm) {
        onSubmitForm(values);
        setErrors("");
        setFormStatus("success ");
        setTimeout(function () {
          location.reload();
        }, 2500);
      }
    } catch (error) {
      console.error("Error creating/updating venue:", error);
      setFormStatus("error");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {formStatus === "success" && <Flex direction={"column"}>Success!</Flex>}
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
        <VenueCheckboxes
          errors={errors}
          handleInputChange={handleInputChange}
        />
        <Button variant={"second"} type="submit">
          {buttonText}
        </Button>
      </Flex>
    </form>
  );
}
