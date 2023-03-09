import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import "../styles/style.css";
import "../styles/termsScrollbar.css";
import AppWrapper from "../container/AppWrapper";
import "../styles/maps.css";
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
	bg: "red",
	text: "red",
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient({});

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
