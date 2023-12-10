import React from "react";
import AuthForm from "../../../components/AuthForm";
import { YupSchemaLogin } from "../../../utils/YupSchema";
import ENDPOINTS from "../../../utils/endpoints";

export function Login() {
  const loginFields = {
    schema: YupSchemaLogin(),
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
      switchLink="/Register"
      switchLinkText="Create account"
      reloadTo="/Profile"
    />
  );
}
