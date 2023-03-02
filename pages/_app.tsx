import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import "../styles/style.css";
import "../styles/termsScrollbar.css";
import AppWrapper from "../container/AppWrapper";
import "../helpers/translation";
import { useEffect, useState } from "react";

const userTheme = {
  ...theme,
  config: {
    ...theme.config,
    initialColorMode: "light",
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    return () => {
      setIsSSR(false);
    };
  }, []);

  if (isSSR) return null;

  return (
    <ChakraProvider resetCSS theme={userTheme}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ChakraProvider>
  );
};
export default MyApp;
