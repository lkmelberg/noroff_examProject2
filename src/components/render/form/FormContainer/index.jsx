import React from "react";
import { Flex, Stack, Box } from "@chakra-ui/react";

export default function FormContainer({ children }) {
  return (
    <Flex minH={"80vh"} align={"center"} justify={"center"} bg={"brand.beige"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} bg={"brand.darkBrick"} boxShadow={"lg"} p={8}>
          {children}
        </Box>
      </Stack>
    </Flex>
  );
}
