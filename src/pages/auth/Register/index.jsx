import React from "react";
import { Link } from "react-router-dom";
import RegisterRender from "../../../render/profile/RegisterRender";
import ENDPOINTS from "../../../utils/api/endpoints";

export function Register() {
  return (
    <>
      <RegisterRender ENDPOINT={ENDPOINTS.AUTH_REGISTER}></RegisterRender>
    </>
  );
}
