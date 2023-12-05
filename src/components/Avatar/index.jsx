import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { avatarURL } from "../../utils/Variables";

export function Avatar({ size, border }) {
  return (
    <>
      {avatarURL ? (
        <Flex direction={"column"} alignItems={"center"} gap={"2rem"}>
          <Image
            boxSize={size}
            borderRadius={"full"}
            border={border}
            borderColor={"brand.lightBrick"}
            fit={"cover"}
            src={avatarURL}
            alt="profile avatar"
          />
        </Flex>
      ) : (
        <Text textStyle={"bodyText"} fontSize={"15px"}>
          You don't have an avatar yet
        </Text>
      )}
    </>
  );
}
