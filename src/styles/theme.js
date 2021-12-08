import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Space Grotesk",
    body: "Epilogue",
  },
  colors: {
    branco: "#ffffff",
    azul: "#001A34",
    azul1: "#002C58",
    pessego: "#FF4655",
    gradient2: "#F37053",
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          textDecoration: "underline",
        },
      },
    },
    AccordionButton: {
      baseStyle: {
        _focus: {
          outlineColor:'pessego'
          //textDecoration: "underline",
        },
      },
    },
  },
  styles: {
    global: {
      svg: {
        display: "inline",
      },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        bg: "azul",
        color: "branco",
        // lineHeight: "inherit",
      },
    },
  },
});
