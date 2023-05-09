import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles";
import AppWrapper from "../container/AppWrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastyProvider } from "../contexts/toasty";
import { OpportunitiesProvider } from "../contexts/opportunities";
import { WalletProvider } from "../contexts/wallet";
import { UserProvider } from "../contexts/user";
import { TransactionsProvider } from "../contexts/transactions";
import "../styles/maps.css";
import "../styles/termsScrollbar.css";
import "../styles/mapsLabel.css";
import "../styles/tooltipChart.css";
import "../styles/pieChart.css";
import "../helpers/i18";
import { useEffect, useState } from "react";

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
		<WalletProvider>
			<UserProvider>
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
			</UserProvider>
		</WalletProvider>
	);
};
export default MyApp;
