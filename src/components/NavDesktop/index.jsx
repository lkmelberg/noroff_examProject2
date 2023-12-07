import React, { useState } from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { NavTab, LogoutTab } from "../NavTab";
import { isCustomer, isManager } from "../../utils/Variables";
import { LogOut } from "../../utils/profile/LogOut";

export function NavDesktop() {
  const handleLogoutClick = () => {
    LogOut();
  };

  const getNavComponent = () => {
    if (isCustomer) {
      return (
        <>
          <NavTab path="/" label="Venues" />
          <NavTab path="/Bookings" label="Bookings" />
          <NavTab path="/Profile" label="Profile" />
          <LogoutTab handleClick={handleLogoutClick} />
        </>
      );
    }
    if (isManager) {
      return (
        <>
          <NavTab path="/ManagerVenues" label="Properties" />
          <NavTab path="/Profile" label="Profile" />
          <LogoutTab handleClick={handleLogoutClick} />
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
