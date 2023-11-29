import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@chakra-ui/react";

export function CustomerNav() {
  return (
    <>
      <Tab color="brand.lightBrick">
        <Link to="/">Venues</Link>
      </Tab>
      <Tab color="brand.lightBrick">
        <Link to="/ProfilePage">My Profile</Link>
      </Tab>
      <Tab color="brand.lightBrick">
        <Link to="/CustomerBookings">Bookings</Link>
      </Tab>
      <Tab color="brand.lightBrick">
        <Link to="/Login">Logout</Link>
      </Tab>
    </>
  );
}
