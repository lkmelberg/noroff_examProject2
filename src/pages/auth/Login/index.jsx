import React from "react";
import AuthForm from "../../../render/profile/AuthForm";
import { YupSchemaLogin } from "../../../utils/validation/YupSchema";
import ENDPOINTS from "../../../utils/api/endpoints";

export function Login() {
  const loginFields = {
    schema: YupSchemaLogin(), // Define your Yup schema for login fields
    inputs: [
      { id: "email", label: "Email address", type: "email" },
      { id: "password", label: "Password", type: "password" },
    ],
  };

  return (
    <AuthForm
      endpoint={ENDPOINTS.AUTH_LOGIN}
      fields={loginFields}
      title="Login to your account"
      buttonText="Login"
      switchText="Don't have an account?"
      switchLink="../Register"
      switchLinkText="Create account"
    />
  );
}
