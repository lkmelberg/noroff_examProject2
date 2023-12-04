import React from "react";
import { Tabs, TabList } from "@chakra-ui/react";
import { NavTab, LogoutTab } from "../NavTab";
import { CheckUserRole } from "../../utils/profile/CheckUserRole";
import { LogOut } from "../../utils/profile/LogOut";

export function Nav() {
  const { isCustomer, isManager } = CheckUserRole();

  const handleLogoutClick = () => {
    LogOut();
  };

  const getNavComponent = () => {
    if (isCustomer) {
      return (
        <>
          <NavTab path="/" label="Venues" />
          <NavTab path="/CustomerBookings" label="Bookings" />
          <NavTab path="/CustomerProfile" label="My Profile" />
          <LogoutTab handleClick={handleLogoutClick} />
        </>
      );
    } else if (isManager) {
      return (
        <>
          <NavTab path="/ManagerBookings" label="Bookings" />
          <NavTab path="/ManagerVenues" label="Properties" />
          <NavTab path="/ManagerProfile" label="Manager Profile" />
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
