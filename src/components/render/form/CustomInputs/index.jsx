// CustomInput.js
import React from "react";
import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export function CustomInput({
  type,
  showPassword,
  setShowPassword,
  register,
  inputId,
}) {
  return (
    <InputGroup>
      <Input
        type={type === "password" && showPassword ? "text" : type}
        {...register(inputId)}
      />
      {type === "password" && (
        <InputRightElement h={"full"}>
          <Button
            bg={"brand.beige"}
            variant={"ghost"}
            onClick={() => setShowPassword((showPassword) => !showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
}
