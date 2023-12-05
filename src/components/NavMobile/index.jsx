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
import { CheckUserRole } from "../../utils/profile/CheckUserRole";
import { LogOut } from "../../utils/profile/LogOut";
import { Link } from "react-router-dom";

export function NavMobile() {
  const { isManager, isCustomer } = CheckUserRole();
  const [showDrawer, setShowDrawer] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const handleLogoutClick = () => {
    LogOut();
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
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
      <Drawer
        isOpen={showDrawer}
        placement="right"
        onClose={() => setShowDrawer(false)}>
        <DrawerOverlay />
        <DrawerContent bg={"brand.darkBrick"}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {isCustomer && (
                <>
                  <Link to="/" label="Venues">
                    Venues
                  </Link>
                  <Link to="/Bookings" label="Bookings">
                    Bookings
                  </Link>
                  <Link to="/Profile" label="My Profile">
                    Profile
                  </Link>
                  <Button variant={"second"} onClick={handleLogoutClick}>
                    LogOut
                  </Button>
                </>
              )}
              {isManager && (
                <>
                  <Link to="/Bookings" label="Bookings">
                    Bookings
                  </Link>
                  <Link to="/ManagerVenues" label="Properties">
                    Properties
                  </Link>
                  <Link to="/Profile" label="Manager Profile">
                    Profile
                  </Link>
                  <Button variant={"second"} onClick={handleLogoutClick}>
                    Logout
                  </Button>
                </>
              )}
              {!isCustomer && !isManager && (
                <>
                  <Link to="/" label="Venues">
                    Venues
                  </Link>
                  <Link to="/Login" label="Login">
                    Login
                  </Link>
                  <Link to="/Register" label="Register">
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
