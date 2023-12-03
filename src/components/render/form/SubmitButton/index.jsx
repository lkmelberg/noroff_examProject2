import React from "react";
import { Stack, Button } from "@chakra-ui/react";

export function SubmitButton({ buttonText, handleSubmit }) {
  return (
    <Stack spacing={10} pt={2}>
      <Button
        type="submit"
        loadingText="Submitting"
        size="lg"
        bg={"brand.beige"}
        color={"brand.darkBrick"}
        _hover={{
          bg: "brand.blue",
        }}
        onClick={handleSubmit}>
        {buttonText}
      </Button>
    </Stack>
  );
}
