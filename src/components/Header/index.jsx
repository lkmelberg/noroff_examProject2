import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Nav";
import { Flex, Image } from "@chakra-ui/react";
import logoDark from "../../assets/logo/logoDark.svg";

export function Header() {
  return (
    <Flex as="header" direction="column" alignItems="center">
      <Link to="/">
        <Image
          ali
          width={150}
          height={50}
          src={logoDark}
          alt="Logo for website Holidaze"
        />
      </Link>
      <Nav />
    </Flex>
  );
}
