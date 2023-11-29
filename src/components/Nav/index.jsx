import React from "react";
import { Tabs, TabList } from "@chakra-ui/react";
import { CustomerNav } from "./CustomerNav";
// import { NotLoggedInNav } from "./NotLoggedInNav";
// import { ManagerNav } from "./ManagerNav";

export function Nav() {
  return (
    <Tabs align="center" isFitted width="90%">
      <TabList borderColor="brand.beige">
        {/* <NotLoggedInNav></NotLoggedInNav> */}
        <CustomerNav></CustomerNav>
        {/* <ManagerNav></ManagerNav> */}
      </TabList>
    </Tabs>
  );
}
