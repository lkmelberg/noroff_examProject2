import React, { useState } from "react";
import { Flex, Button, Text, Input } from "@chakra-ui/react";
import { updateData } from "../../../hooks/api/data.js";
import { Avatar } from "../../../components/Avatar";
import ENDPOINTS from "../../../utils/endpoints.js";
import { name, token } from "../../../utils/Variables";
import * as yup from "yup";

export function EditAvatar() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (event) => {
    setAvatarUrl(event.target.value);
    setErrorMessage("");
    setResponseMessage("");
  };

  const handleUpdateAvatar = async () => {
    try {
      await yup
        .string()
        .url()
        .required("Avatar URL cannot be empty")
        .validate(avatarUrl);
    } catch (error) {
      setErrorMessage("Invalid URL. Please provide a valid URL.");
      return;
    }

    try {
      const body = {
        avatar: avatarUrl,
      };

      const response = await updateData(ENDPOINTS.AVATAR, body, token);

      setErrorMessage("");
      setResponseMessage("Avatar updated successfully, please wait");
      localStorage.setItem("avatar", avatarUrl);
      setTimeout(function () {
        location.reload();
      }, 1800);
    } catch (error) {
      console.error("Error updating avatar:", error);
      setResponseMessage("");
    }
  };

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"2rem"}
        gap={"1rem"}>
        <Text textStyle={"playfair"}>Hi {name}</Text>
        <Text textStyle={"lato"}>
          Edit your avatar by pasting an image URL in the input field below
        </Text>
        <Avatar size="10rem" border={("2rem", "solid")}></Avatar>
        <Input
          borderColor={"brand.beige"}
          type="text"
          _placeholder={{ opacity: 0.9, color: "brand.beige" }}
          placeholder="Enter Avatar URL"
          value={avatarUrl}
          onChange={handleInputChange}
        />
        <Button variant={"second"} onClick={handleUpdateAvatar}>
          Update Avatar
        </Button>
        {errorMessage && (
          <Text
            fontSize="md"
            color="brand.beige"
            mt={1}
            textDecoration="underline"
            textDecorationColor="red">
            {errorMessage}
          </Text>
        )}
        {responseMessage && <Text>{responseMessage}</Text>}
      </Flex>
    </>
  );
}
