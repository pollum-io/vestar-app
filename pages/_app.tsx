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
import { ToastyProvider } from "../contexts/toasty";

const userTheme = {
	...theme,
	config: {
		...theme.config,
		initialColorMode: "light",
	},
};

const toasty = {
	bg: "#FFFFFF",
	text: "#2D3748",
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
				<ToastyProvider {...toasty}>
					<AppWrapper>
						<Component {...pageProps} />
					</AppWrapper>
				</ToastyProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
};
export default MyApp;
