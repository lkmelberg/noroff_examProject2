import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@chakra-ui/react";

export function NotLoggedInNav() {
  return (
    <>
      <Tab color="brand.lightBrick">
        <Link to="/">Venues</Link>
      </Tab>

      <Tab color="brand.lightBrick">
        <Link to="/Login">Login</Link>
      </Tab>
      <Tab color="brand.lightBrick">
        <Link to="/Register">Register</Link>
      </Tab>
    </>
  );
}
