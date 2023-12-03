import * as yup from "yup";

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
