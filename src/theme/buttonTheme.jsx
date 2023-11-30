import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const brandSecondary = defineStyle({
  background: "brand.darkBrick",
  color: "brand.beige",
  fontFamily: "'Lato', sans-serif",
  fontWeight: "normal",

  // let's also provide dark mode alternatives
  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandSecondary },
});

// // Now we can use the new `brandPrimary` variant
// <Button variant="brandPrimary">...</Button>
