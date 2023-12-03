import React from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

export function Meta({ meta, listItemStyle }) {
  if (!meta || typeof meta !== "object" || Object.keys(meta).length === 0) {
    return null;
  }
  // const listItemStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   whiteSpace: "nowrap",
  // };

  return (
    <List textStyle={"bodyText"} spacing={3}>
      {Object.entries(meta).map(([key, value]) => (
        <ListItem key={key} style={listItemStyle}>
          <ListIcon as={value ? CheckIcon : CloseIcon} color="brand.beige" />
          <span style={{ marginLeft: "8px" }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
            {/* Capitalize the key */}
          </span>
        </ListItem>
      ))}
    </List>
  );
}
