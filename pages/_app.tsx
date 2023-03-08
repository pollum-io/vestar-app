import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import "../styles/termsScrollbar.css";
import AppWrapper from "../container/AppWrapper";
import "../helpers/translation";
import { useEffect, useState } from "react";
import "../styles/maps.css";
import "../styles/mapsLabel.css";

import { QueryClient, QueryClientProvider } from "react-query";

const userTheme = {
	...theme,
	config: {
		...theme.config,
		initialColorMode: "light",
	},
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient({});
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		return () => {
			setIsSSR(false);
		};
	}, []);

	if (isSSR) return null;
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider resetCSS theme={userTheme}>
				<AppWrapper>
					<Component {...pageProps} />
				</AppWrapper>
			</ChakraProvider>
		</QueryClientProvider>
	);
};
export default MyApp;
