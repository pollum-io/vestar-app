import React, { createContext, useMemo, useState } from "react";
import { createWalletClient, custom, getAccount } from 'viem'
import { polygonMumbai } from 'viem/chains'

declare let window: any;

interface IWallet {
	connectWallet: any;
	wallet: any;
}

export const WalletContext = createContext({} as IWallet);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	let wallet: any
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [disconnect, setDisconnect] = useState<boolean>(false);
	const [account, setAccount] = useState<string>("");
	const [chainId, setChainId] = useState<number>();

	if (typeof window !== "undefined" && typeof window?.ethereum !== "undefined") {
		wallet = createWalletClient({
			transport: custom(window.ethereum)
		});
	}

	const connectWallet = async () => {
		if (typeof window !== "undefined" && typeof window?.ethereum !== "undefined") {
			try {
				const chainId = await wallet.getChainId();
				if (chainId !== polygonMumbai.id) {
					await wallet.switchChain({ id: polygonMumbai.id })
						.catch(async (error: any) => {
							if (error.code === 4902)
								await wallet.addChain({ chain: polygonMumbai })
						})
				} else {
					const [address] = await wallet.requestAddresses()
					setAccount(address)
				}
				setIsConnected(true)
			} catch (err: any) {
				setIsConnected(false)
				console.log(err.message);
			}
		} else {
			console.log("Instale a metamask");
		}
	}

	const providerValue = useMemo(
		() => ({
			connectWallet,
			wallet,
			account,
			isConnected,
			setIsConnected
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[
			account,
			isConnected,
			setIsConnected
		]
	);

	return (
		<WalletContext.Provider value={providerValue}>
			{children}
		</WalletContext.Provider>
	);
};
