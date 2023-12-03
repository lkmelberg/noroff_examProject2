// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
export const theme = extendTheme({
  textStyles: {
    playfair: {
      fontSize: "2em",
      fontWeight: "light",
      fontFamily: `'Playfair Display Variable', serif`,
    },
    lato: {
      fontSize: "1em",
      fontWeight: "regular",
      fontFamily: `'Lato', sans-serif`,
    },
    bodyText: {
      fontSize: ".8em",
      fontWeight: "",
      fontFamily: `'Open Sans Variable', sans-serif`,
    },
  },
  colors: {
    brand: {
      blue: "#89B3D9",
      lightBrick: "#D99962",
      brick: "#A64521",
      darkBrick: "#59220E",
      beige: "#F2E3D5",
      lightBeige: "#FFEFE0",
    },
  },
  styles: {
    global: {
      button: {
        bg: "brand.darkBrick",
        color: "brand.beige",
        buttonSecondary: {
          bg: "brand.beige",
          color: "brand.darkBrick",
        },
      },

      // styles for the `body`
      body: {
        bg: "brand.darkBrick",
        color: "brand.beige",
        margin: 0,
        minW: "320px",
        minH: "100vh",
      },
      header: {
        margin: 1,
      },
      footer: {
        bg: "brand.lightBeige",
        color: "brand.darkBrick",
        margin: "0%",
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
