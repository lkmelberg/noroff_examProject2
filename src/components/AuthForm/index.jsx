import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postData } from "../../utils/api/Data";
import FormContainer from "../render/form/FormContainer";
import { FormHeader } from "../render/form/FormHeader";
import { FormInputs } from "../render/form/FormInputs";
import { SubmitButton } from "../render/form/SubmitButton";

export default function AuthForm({
  endpoint,
  fields,
  title,
  buttonText,
  switchText,
  switchLink,
  switchLinkText,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(fields.schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await postData(endpoint, data);
      console.log(response);
      const { name, email, avatar, venueManager, accessToken } = response;

      // Check if the user is a manager
      const isManager = venueManager;
      localStorage.setItem("isManager", isManager);
      // Store accessToken in localStorage or a secure storage mechanism for later use
      localStorage.setItem("accessToken", accessToken);

      if (venueManager) {
        window.location.href = "/ManagerProfile";
      } else if (!venueManager) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormContainer>
      <FormHeader
        title={title}
        switchText={switchText}
        switchLink={switchLink}
        switchLinkText={switchLinkText}
      />
      <FormInputs
        fields={fields.inputs}
        register={register}
        errors={errors}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <SubmitButton
        buttonText={buttonText}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </FormContainer>
  );
}
