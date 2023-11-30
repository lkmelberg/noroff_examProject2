import React from "react";

import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logoLight from "../../assets/logo/logoLight.svg";

export function Footer() {
  return (
    <div>
      {" "}
      <Container
        minW="100vw"
        p={50}
        as="footer"
        role="contentinfo"
        py={{
          base: "12",
          md: "16",
        }}>
        <Stack
          spacing={{
            base: "4",
            md: "5",
          }}>
          <Stack justify="space-between" direction="row" align="center">
            <Image
              ali
              width={150}
              height={50}
              src={logoLight}
              alt="Logo for website Holidaze"
            />
            <ButtonGroup variant="tertiary">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="fg.subtle">
            &copy; {new Date().getFullYear()} Holidaze Inc. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}
