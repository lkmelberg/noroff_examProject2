import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { isManager, name } from "../../../utils/Variables";
import { CustomerProfile } from "../CustomerProfile";
import { ManagerProfile } from "../ManagerProfile";
import { Avatar } from "../../../components/Avatar";
import { EditAvatarButton } from "../../../components/EditAvatarButton";

export function Profile() {
  function redir() {
    window.location.href = "/EditAvatar";
  }
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"2rem"}
        gap={"1rem"}>
        <Text textStyle={"playfair"}>Welcome {name}</Text>
        <Avatar size="10rem" border={("2rem", "solid")}></Avatar>
        <EditAvatarButton handleClickButton={redir}></EditAvatarButton>
      </Flex>
      {isManager ? <ManagerProfile /> : <CustomerProfile />}
    </>
  );
}
