import React, { useState } from "react";
import { PostVenue } from "../../utils/api/Data";
import ENDPOINTS from "../../utils/api/endpoints";
import { validationSchema } from "../../utils/YupSchema";
import { token } from "../../utils/Variables";
import { Button } from "@chakra-ui/react";

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
  });

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: "1rem",
    width: "70vw",
  };

  const formItemStyle = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  };

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "media") {
      const mediaArray = value.split(","); // Splitting URLs by comma to create an array
      setValues({ ...values, [name]: mediaArray });
    } else {
      const fieldValue =
        event.target.type === "number" ? parseInt(value, 10) : value;
      setValues({ ...values, [name]: fieldValue });
    }
    console.log(values);
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
      const response = await PostVenue(ENDPOINTS.VENUES, values, token);
      // Log the response from the request
      console.log("Response from POST request:", response);

      // If update is successful, clear error message
      setErrors("");
      setFormStatus("success");

      //   setTimeout(function () {
      //     location.reload();
      //   }, 1800);
    } catch (error) {
      console.error("Error creating venue:", error);
      setFormStatus("error");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formItemStyle}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleInputChange}
        />
        {errors.name && <div>{errors.name}</div>}
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
        {errors.description && <div>{errors.description}</div>}
      </div>

      {/* Image */}
      <div style={formItemStyle}>
        <label htmlFor="media">
          Images
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
        {errors.media && <div>{errors.media}</div>}
      </div>

      {/* Price */}
      <div style={formItemStyle}>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          value={values.price}
          onChange={handleInputChange}
        />
        {errors.price && <div>{errors.price}</div>}
      </div>

      {/* Max Guests */}
      <div style={formItemStyle}>
        <label htmlFor="maxGuests">Max Guests</label>
        <input
          id="maxGuests"
          name="maxGuests"
          type="number"
          value={values.maxGuests}
          onChange={handleInputChange}
        />
        {errors.maxGuests && <div>{errors.maxGuests}</div>}
      </div>
      {/* Wifi */}
      <div style={formItemStyle}>
        <label htmlFor="wifi">Wifi</label>
        <input
          id="wifi"
          name="wifi"
          type="checkbox"
          onChange={handleMetaChange}
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
          onChange={handleMetaChange}
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
          onChange={handleMetaChange}
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
          onChange={handleMetaChange}
        />
        {errors.pets && <div>{errors.pets}</div>}
      </div>

      <Button variant={"second"} type="submit">
        Create Venue
      </Button>

      {formStatus === "success" && <div>Venue Created successfully!</div>}
      {formStatus === "error" && <div>Venue was not created - epic fail</div>}
    </form>
  );
}
