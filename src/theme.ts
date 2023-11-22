// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.400",
        color: "white",
        margin: 0,
        minW: "320px",
        minH: "100vh",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});
