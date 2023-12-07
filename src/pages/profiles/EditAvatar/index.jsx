import React, { useState } from "react";
import { Flex, Button, Text, Input, FormErrorMessage } from "@chakra-ui/react";
import { UpdateData } from "../../../utils/api/Data";
import { Avatar } from "../../../components/Avatar";
import ENDPOINTS from "../../../utils/api/endpoints";
import { name, token } from "../../../utils/Variables";

export function EditAvatar() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (event) => {
    setAvatarUrl(event.target.value);
  };

  const handleUpdateAvatar = async () => {
    if (!isURLValid(avatarUrl)) {
      setErrorMessage("Invalid URL. Please provide a valid URL.");
      return;
    }

    try {
      const body = {
        avatar: avatarUrl,
      };

      const response = await UpdateData(ENDPOINTS.AVATAR, body, token);

      // Log the response from the request
      console.log("Response from PUT request:", response);

      // If update is successful, clear error message
      setErrorMessage("");
      setResponseMessage("Avatar updated successfully");
      localStorage.setItem("avatar", avatarUrl);
      setTimeout(function () {
        location.reload();
      }, 1800);
    } catch (error) {
      console.error("Error updating avatar:", error);
      setResponseMessage("");
    }
  };

  // Function to validate URL
  const isURLValid = (url) => {
    // Basic URL validation regex
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
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
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
        {responseMessage && <Text>{responseMessage}</Text>}
      </Flex>
    </>
  );
}
