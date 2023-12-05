import * as yup from "yup";
// Profile
const commonSchema = {
  email: yup
    .string()
    .matches(
      /^(?=.*\@)(?=.*\.noroff\.no?$|noroff\.no?$)/,
      "Email must be a valid stud.noroff.no or noroff.no email address"
    )
    .required("Please enter your email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters"),
};

//  registration
export const YupSchemaRegister = () => {
  return yup.object({
    ...commonSchema,
    name: yup
      .string()
      .matches(
        /^[A-Za-z0-9_]+$/,
        "Name must not contain punctuation symbols apart from underscore"
      )
      .required("Please enter your first name"),
    avatar: yup.string().url("Please enter a valid URL for the avatar"),
    venueManager: yup.boolean().default(false),
  });
};

//  login
export const YupSchemaLogin = () => {
  return yup.object({
    ...commonSchema,
  });
};

// Venue

export const validationSchema = yup.object({
  name: yup.string().required("Please enter venue name"),
  description: yup.string().required("Please enter description"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Please enter price")
    .positive("Price must be a positive number")
    .integer("Price must be an integer"),
  maxGuests: yup
    .number()
    .required("Please enter max guests")
    .positive("Max guests must be a positive number")
    .integer("Max guests must be an integer"),
  rating: yup
    .number()
    .min(0, "Rating must be at least 0")
    .max(5, "Rating cannot exceed 5"),

  media: yup.array().of(yup.string().url("Please enter a valid URL")),

  "meta.wifi": yup.boolean(),
  "meta.parking": yup.boolean(),
  "meta.breakfast": yup.boolean(),
  "meta.pets": yup.boolean(),

  "location.address": yup.string(),
  "location.city": yup.string(),
  "location.zip": yup.string(),
  "location.country": yup.string(),
  "location.continent": yup.string(),
  "location.lat": yup.number(),
  "location.lng": yup.number(),
});
