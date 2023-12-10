import React from "react";
import { Tabs, TabList } from "@chakra-ui/react";
import { NavTab, LogOutTab } from "../NavTab";
import { isCustomer, isManager } from "../../utils/Variables/index.jsx";
import { logOut } from "../../utils/profile/logOut.js";

export function NavDesktop() {
  const handlelogOutClick = () => {
    logOut();
  };

  const getNavComponent = () => {
    if (isCustomer) {
      return (
        <>
          <NavTab path="/" label="Venues" />
          <NavTab path="/CustomerBookings" label="Bookings" />
          <NavTab path="/Profile" label="Profile" />
          <LogOutTab handleClick={handlelogOutClick} />
        </>
      );
    }
    if (isManager) {
      return (
        <>
          <NavTab path="/ManagerVenues" label="Properties" />
          <NavTab path="/Profile" label="Profile" />
          <LogOutTab handleClick={handlelogOutClick} />
        </>
      );
    } else {
      return (
        <>
          <NavTab path="/" label="Venues" />
          <NavTab path="/Login" label="Login" />
          <NavTab path="/Register" label="Register" />
        </>
      );
    }
  };

  return (
    <Tabs align="center" isFitted width="90%">
      <TabList borderColor="brand.beige">{getNavComponent()}</TabList>
    </Tabs>
  );
}
