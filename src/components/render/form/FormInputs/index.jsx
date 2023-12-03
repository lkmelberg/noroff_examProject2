import React from "react";
import { FormControl, FormLabel, Checkbox, Text } from "@chakra-ui/react";
import { CustomInput } from "../CustomInputs";

export function FormInputs({
  fields,
  register,
  errors,
  showPassword,
  setShowPassword,
}) {
  return (
    <form>
      {fields.map((input) => (
        <FormControl
          key={input.id}
          id={input.id}
          isInvalid={!!errors[input.id]}>
          <FormLabel>{input.label}</FormLabel>
          {input.type === "checkbox" ? (
            <Checkbox {...register(input.id)} />
          ) : (
            <CustomInput
              type={input.type}
              showPassword={showPassword}
              register={register}
              inputId={input.id}
            />
          )}
          <Text color="red">{errors[input.id]?.message}</Text>
        </FormControl>
      ))}
    </form>
  );
}
