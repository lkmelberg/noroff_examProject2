import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

export function Nav() {
  return (
    <Tabs align="center" isFitted width="90%">
      <TabList borderColor="brand.beige">
        <Tab color="brand.lightBrick">
          <Link to="/">Home</Link>
        </Tab>
        <Tab>
          <Link to="/ProfilePage">Profile</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}
