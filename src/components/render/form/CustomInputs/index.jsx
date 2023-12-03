import React from "react";
import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export function CustomInput({ type, showPassword, register, inputId }) {
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
            onClick={() => setShowPassword((show) => !show)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
}
