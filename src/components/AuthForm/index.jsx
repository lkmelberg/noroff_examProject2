import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostData } from "../../utils/api/Data";
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
      const response = await PostData(endpoint, data);
      console.log(response);
      const { name, email, avatar, venueManager, accessToken } = response;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("avatar", avatar);
      localStorage.setItem("isManager", venueManager);
      localStorage.setItem("accessToken", accessToken);

      window.location.href = "/Profile";
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
