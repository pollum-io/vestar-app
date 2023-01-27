import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const variantCircular = definePartsStyle({
  control: defineStyle({
    rounded: "full",
  }),
});

const variants = {
  circular: variantCircular,
};

const sizes = {
  xl: definePartsStyle({
    control: defineStyle({
      boxSize: 14,
    }),
    label: defineStyle({
      fontSize: "2xl",
      marginLeft: 6,
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  variants,
  sizes,
});
