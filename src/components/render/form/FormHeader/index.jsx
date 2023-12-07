import React from "react";
import { Stack, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function FormHeader({ title, switchText, switchLink, switchLinkText }) {
  return (
    <Stack align={"center"}>
      <Text textStyle={"playfair"} fontSize={"4xl"} textAlign={"center"}>
        {title}
      </Text>
      <Flex direction={"row"}>
        <Text align={"center"}>{switchText} </Text>
        <Link to={switchLink}>
          <Text color={"brand.blue"}> {switchLinkText}</Text>
        </Link>
      </Flex>
    </Stack>
  );
}
