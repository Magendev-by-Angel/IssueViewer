import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("hsl(250deg 24% 9%)", "whiteAlpha.900")(props),
        bg: mode("whiteAlpha.900", "hsl(250deg 24% 9%)")(props),
      },
    }),
  },
  colors: {
    darkPurple: {
      50: "#e7cfff",
      100: "#d4b1fc",
      200: "#6b3ad6",
      300: "#5729c2",
      400: "#8857eb",
      500: "#6b3ad6",
      600: "#5729c2",
      700: "#372175",
      800: "#221052",
      900: "#10062b",
    },
  },
});
