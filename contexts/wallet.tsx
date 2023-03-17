import React, { createContext, useEffect, useMemo, useState } from "react";
import { createWalletClient, custom, getAccount } from 'viem'
import { polygonMumbai } from 'viem/chains'
import PersistentFramework from "../utils/persistent";

declare let window: any;
interface IWallet {
	connectWallet: any;
	disconnectWallet: any;
	wallet: any;
	account: string;
	isConnected: any;
}

export const WalletContext = createContext({} as IWallet);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	let wallet: any
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [account, setAccount] = useState<string>("");

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
					setIsConnected(true)
					PersistentFramework.add("connected", { isConnected: true });
					PersistentFramework.add("address", address);
				}
			} catch (err: any) {
				setIsConnected(false)
				console.log(err.message);
			}
		} else {
			console.log("Instale a metamask");
		}
	}

	const disconnectWallet = () => {
		const value = PersistentFramework.get("connected") as { [k: string]: any };

		if (value?.isConnected) {
			PersistentFramework.remove("address");
			PersistentFramework.remove("connected");
			setIsConnected(false)
			setAccount("")
		}
	}

	useEffect(() => {
		const value = PersistentFramework.get("connected") as { [k: string]: any };

		if (value?.isConnected) {
			const address = PersistentFramework.get("address") as any;

			setIsConnected(true)
			setAccount(address)
		}
	}, [])


	const providerValue = useMemo(
		() => ({
			connectWallet,
			disconnectWallet,
			wallet,
			account,
			isConnected,
			setIsConnected
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[
			account,
			isConnected,
			setIsConnected,
		]
	);

	return (
		<WalletContext.Provider value={providerValue}>
			{children}
		</WalletContext.Provider>
	);
};
