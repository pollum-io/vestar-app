import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import "../styles/termsScrollbar.css";
import AppWrapper from "../container/AppWrapper";
import "../styles/maps.css";
import "../styles/mapsLabel.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastyProvider } from "../contexts/toasty";
import { OpportunitiesProvider } from "../contexts/opportunities";
import { WalletProvider } from "../contexts/wallet";
import { TransactionsProvider } from "../contexts/transactions";

const toasty = {
	bg: "#FFFFFF",
	text: "#2D3748",
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient({});

	return (
		<WalletProvider>
			<TransactionsProvider>
				<QueryClientProvider client={queryClient}>
					<OpportunitiesProvider>
						<ChakraProvider resetCSS theme={theme}>
							<ToastyProvider {...toasty}>
								<AppWrapper>
									<Component {...pageProps} />
								</AppWrapper>
							</ToastyProvider>
						</ChakraProvider>
					</OpportunitiesProvider>
				</QueryClientProvider>
			</TransactionsProvider>
		</WalletProvider>
	);
};
export default MyApp;
