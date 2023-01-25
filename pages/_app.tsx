import type { AppProps } from "next/app";
import { AppWrapper } from "../container";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";

const userTheme = {
  ...theme,
  config: {
    ...theme.config,
    initialColorMode: "light",
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={userTheme}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ChakraProvider>
  );
};
export default MyApp;
