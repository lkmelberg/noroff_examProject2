import React from "react";
import AuthForm from "../../../components/AuthForm";
import ENDPOINTS from "../../../utils/api/endpoints";
import { YupSchemaRegister } from "../../../utils/YupSchema";

export function Register() {
  const registerFields = {
    schema: YupSchemaRegister(),
    inputs: [
      { id: "name", label: "First Name", type: "text" },
      { id: "email", label: "Email address", type: "email" },
      { id: "password", label: "Password", type: "password" },
      { id: "avatar", label: "Avatar URL", type: "text" },
      { id: "venueManager", label: "Venue Manager", type: "checkbox" },
    ],
  };
  return (
    <AuthForm
      endpoint={ENDPOINTS.AUTH_REGISTER}
      fields={registerFields}
      title="Create your account"
      buttonText="Create account"
      switchText="Already have an account?"
      switchLink="/Login"
      switchLinkText="Login"
      reloadTo="/Login"
    />
  );
}
