import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { YupSchema } from "../../../utils/validation/YupSchema";
import { FetchEndpointData } from "../../../utils/api/FetchEndpointData";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function RegisterRender(ENDPOINT) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupSchema()),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await FetchEndpointData(ENDPOINT, "POST", data);

      console.log("Response:", response);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Flex minH={"80vh"} align={"center"} justify={"center"} bg={"brand.beige"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} bg={"brand.darkBrick"} boxShadow={"lg"} p={8}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Register your account
            </Heading>
            <Flex direction={"row"}>
              <Text align={"center"}>Already a user?</Text>
              <Link to="../Login">
                <Text color={"brand.blue"}>Login</Text>
              </Link>
            </Flex>
          </Stack>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <HStack>
                <FormControl id="name" isInvalid={!!errors.name}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" {...register("name")} />
                  <Text color="red">{errors.name?.message}</Text>
                </FormControl>
              </HStack>
              <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
                <Text color="red">{errors.email?.message}</Text>
              </FormControl>
              <FormControl id="password" isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      bg={"brand.beige"}
                      variant={"ghost"}
                      onClick={() => setShowPassword((show) => !show)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text color="red">{errors.password?.message}</Text>
              </FormControl>

              <FormControl id="avatar" isInvalid={!!errors.avatar}>
                <FormLabel>Avatar URL</FormLabel>
                <Input type="text" {...register("avatar")} />
                <Text color="red">{errors.avatar?.message}</Text>
              </FormControl>
              <FormControl display={"inline-flex"} id="venueManager">
                <FormLabel>Venue Manager</FormLabel>
                <Checkbox {...register("venueManager")} />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"brand.beige"}
                  color={"brand.darkBrick"}
                  _hover={{
                    bg: "brand.blue",
                  }}>
                  Sign up
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
