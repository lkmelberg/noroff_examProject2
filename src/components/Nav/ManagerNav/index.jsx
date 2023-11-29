import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@chakra-ui/react";

export function ManagerNav() {
  return (
    <>
      <Tab color="brand.lightBrick">
        <Link to="/ProfilePage">Manager Profile</Link>
      </Tab>
      <Tab color="brand.lightBrick">
        <Link to="/ManagerBookings">Bookings</Link>
      </Tab>
      <Tab color="brand.lightBrick">
        <Link to="/ManagerVenues">Properties</Link>
      </Tab>
      <Tab color="brand.lightBrick">
        <Link to="/Login">Logout</Link>
      </Tab>
    </>
  );
}
