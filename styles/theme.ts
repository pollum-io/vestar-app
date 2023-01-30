import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { checkboxTheme } from "./roundCheckbox";

const config: ThemeConfig = {
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  overrides: {
    styles: {
      "*": {
        boxShadow: "none",
      },
    },
  },
  components: {
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    ModalCloseButton: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Checkbox: checkboxTheme,
  },
  zIndices: {
    default: 1,
    behind: "-1000",
  },
  colors: {},
  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Roboto Mono",
  },
});
