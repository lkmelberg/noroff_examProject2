import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@chakra-ui/react";

export function NavTab({ path, label, handleClick }) {
  return (
    <Tab color="brand.lightBrick">
      <Link to={path}>{label}</Link>
    </Tab>
  );
}

export function LogoutTab({ handleClick }) {
  return (
    <Tab color="brand.lightBrick" onClick={handleClick}>
      <span>Logout</span>
    </Tab>
  );
}
