import React from "react";
import { Flex, Image, Button } from "@chakra-ui/react";
import { avatarURL } from "../../utils/Variables";
import { Link } from "react-router-dom";

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
          <Button variant="second">
            <Link to={`/EditAvatar`}>Edit Avatar</Link>
          </Button>
        </Flex>
      ) : (
        <Button height={"3rem"} variant="second">
          <Link to={`/EditAvatar`}>Create Avatar</Link>
        </Button>
      )}
    </>
  );
}
