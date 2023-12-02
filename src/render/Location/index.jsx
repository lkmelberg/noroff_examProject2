import React from "react";
import { List, ListItem, Text } from "@chakra-ui/react";

export function Location({ location, listItemStyle }) {
  if (!location || typeof location !== "object") {
    return <Text>Error fetching location information</Text>;
  }

  const excludedProperties = ["continent", "lat", "lng"];

  return (
    <List textStyle={"bodyText"} spacing={3}>
      {Object.entries(location)
        .filter(([key]) => !excludedProperties.includes(key))
        .map(([key, value]) => (
          <ListItem key={key} style={listItemStyle}>
            {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
          </ListItem>
        ))}
    </List>
  );
}
