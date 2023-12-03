import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postData } from "../../../utils/api/FetchData";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function AuthForm({
  endpoint,
  fields,
  title,
  buttonText,
  switchText,
  switchLink,
  switchLinkText,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(fields.schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await postData(endpoint, data);
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
              {title}
            </Heading>
            <Flex direction={"row"}>
              <Text align={"center"}>{switchText} </Text>
              <Link to={switchLink}>
                <Text color={"brand.blue"}> {switchLinkText}</Text>
              </Link>
            </Flex>
          </Stack>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {fields.inputs.map((input) => (
                <FormControl
                  key={input.id}
                  id={input.id}
                  isInvalid={!!errors[input.id]}>
                  <FormLabel>{input.label}</FormLabel>
                  {input.type === "checkbox" ? (
                    <Checkbox {...register(input.id)} />
                  ) : (
                    <InputGroup>
                      <Input
                        type={
                          input.type === "password" && showPassword
                            ? "text"
                            : input.type
                        }
                        {...register(input.id)}
                      />
                      {input.type === "password" && (
                        <InputRightElement h={"full"}>
                          <Button
                            bg={"brand.beige"}
                            variant={"ghost"}
                            onClick={() => setShowPassword((show) => !show)}>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      )}
                    </InputGroup>
                  )}
                  <Text color="red">{errors[input.id]?.message}</Text>
                </FormControl>
              ))}
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
                  {buttonText}
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
