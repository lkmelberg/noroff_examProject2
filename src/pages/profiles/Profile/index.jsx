import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { isManager, name } from "../../../utils/Variables";
import { CustomerProfile } from "../CustomerProfile";
import { ManagerProfile } from "../ManagerProfile";
import { Avatar } from "../../../components/Avatar";

export function Profile() {
  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"2rem"}>
        <Text textStyle={"playfair"}>Welcome {name}</Text>
        <Avatar size="10rem" border={("2rem", "solid")}></Avatar>
      </Flex>
      {isManager ? <ManagerProfile /> : <CustomerProfile />}
    </>
  );
}
