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
      fontWeight: "regular",
      fontFamily: `'Open Sans Variable', sans-serif`,
    },
    tinyText: {
      fontSize: ".6em",
      fontWeight: "regular",
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
  components: {
    Button: {
      baseStyle: {
        bg: "brand.darkBrick",
        color: "brand.beige",
      },
      variants: {
        second: {
          bg: "brand.beige",
          color: "brand.darkBrick",
          height: "2.5rem",
          width: "8rem",
        },
      },
    },
  },
  styles: {
    global: {
      form: {
        textarea: {
          width: "11rem",
          height: "60px",
          padding: "0.5rem",
          border: "0.1rem solid",
          borderColor: "brand.beige",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
          color: "inherit",
          transition: "border-color 0.3s ease-in-out",
          textStyle: "bodyText",
          _focus: {
            borderColor: "brand.blue",
            outline: "none",
          },
        },
        input: {
          width: "11rem",
          height: "2rem",
          padding: "0.5rem",
          border: "0.1rem solid",
          borderColor: "brand.beige",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
          color: "inherit",
          transition: "border-color 0.3s ease-in-out",
          textStyle: "bodyText",
          _focus: {
            borderColor: "brand.blue",
            outline: "none",
          },
        },
      },
      body: {
        bg: "brand.darkBrick",
        color: "brand.beige",
        margin: 0,
        minW: "320px",
        minH: "100vh",
        paddingBottom: "200px",
      },
      header: {
        margin: 1,
      },
      footer: {
        bg: "brand.lightBeige",
        color: "brand.darkBrick",
        margin: "0%",
        position: "absolute",
        left: "0",
        bottom: "0",
        right: "0",
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
