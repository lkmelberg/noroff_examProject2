// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
export const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display Variable', serif`,
    // H2: `'Lato', sans-serif`,
    body: `'Open Sans Variable', sans-serif`,
  },
  colors: {
    brand: {
      lightBlue: "#89B3D9",
      lightBrick: "#D99962",
      brick: "#A64521",
      darkBrick: "#59220E",
      beige: "#F2E3D5",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "brand.darkBrick",
        color: "brand.beige",
        margin: 1,
        minW: "320px",
        minH: "100vh",
      },
      // styles for the `a`
      // a: {
      //   color: "teal.500",
      //   _hover: {
      //     textDecoration: "underline",
      //   },
      // },
    },
  },
});
