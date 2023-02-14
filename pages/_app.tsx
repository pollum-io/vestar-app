import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import "../styles/style.css";
import "../styles/termsScrollbar.css";
import AppWrapper from "../container/AppWrapper";

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
