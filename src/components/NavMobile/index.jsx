import React, { useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useBreakpointValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { logOut } from "../../utils/profile/logOut.js";
import { Link } from "react-router-dom";
import { userRoles } from "../../hooks/userRoles.js";

export function NavMobile() {
  const { isManager, isCustomer } = userRoles();
  const [showDrawer, setShowDrawer] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const handlelogOutClick = () => {
    logOut();
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <>
      {isMobile ? (
        <IconButton
          aria-label="Toggle Menu"
          icon={<FaBars />}
          onClick={toggleDrawer}
          position="absolute"
          top={4}
          right={4}
          zIndex={10}
          height="2rem"
          width="3rem"
          bg={"brand.beige"}
        />
      ) : null}
      <Drawer isOpen={showDrawer} placement="right" onClose={closeDrawer}>
        <DrawerOverlay />
        <DrawerContent bg={"brand.darkBrick"}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {isCustomer && (
                <>
                  <Link to="/" label="Venues" onClick={closeDrawer}>
                    Venues
                  </Link>
                  <Link
                    to="/CustomerBookings"
                    label="Bookings"
                    onClick={closeDrawer}>
                    Bookings
                  </Link>
                  <Link to="/Profile" label="My Profile" onClick={closeDrawer}>
                    Profile
                  </Link>
                  <Button variant={"second"} onClick={handlelogOutClick}>
                    logOut
                  </Button>
                </>
              )}
              {isManager && (
                <>
                  <Link
                    to="/ManagerVenues"
                    label="Properties"
                    onClick={closeDrawer}>
                    Properties
                  </Link>
                  <Link
                    to="/Profile"
                    label="Manager Profile"
                    onClick={closeDrawer}>
                    Profile
                  </Link>
                  <Button variant={"second"} onClick={handlelogOutClick}>
                    logOut
                  </Button>
                </>
              )}
              {!isCustomer && !isManager && (
                <>
                  <Link to="/" label="Venues" onClick={closeDrawer}>
                    Venues
                  </Link>
                  <Link to="/Login" label="Login" onClick={closeDrawer}>
                    Login
                  </Link>
                  <Link to="/Register" label="Register" onClick={closeDrawer}>
                    Register
                  </Link>
                </>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
