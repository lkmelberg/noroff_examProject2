import React from "react";
import { Stack, Heading, Flex, Text, Link } from "@chakra-ui/react";

export function FormHeader({ title, switchText, switchLink, switchLinkText }) {
  return (
    <Stack align={"center"}>
      <Heading fontSize={"4xl"} textAlign={"center"}>
        {title}
      </Heading>
      <Flex direction={"row"}>
        <Text align={"center"}>{switchText} </Text>
        <Link to={switchLink}>
          <Text color={"brand.blue"}> {switchLinkText}</Text>
        </Link>
      </Flex>
    </Stack>
  );
}
