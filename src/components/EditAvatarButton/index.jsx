import React from "react";
import { Button } from "@chakra-ui/react";
import { avatarURL } from "../../utils/Variables";

export function EditAvatarButton({ handleClickButton }) {
  return (
    <>
      <Button variant="second" onClick={handleClickButton}>
        {avatarURL ? "Update Avatar" : "Create Avatar"}
      </Button>
    </>
  );
}
