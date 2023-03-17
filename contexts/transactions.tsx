import React, { createContext, useMemo, useState } from "react";
import { createPublicClient, custom, http } from "viem";
import { polygonMumbai } from "viem/dist/chains";
import { useWallet } from "../hooks/useWallet";
import ERC20Mod from "../utils/abi/ERC20Mod.json"
import livnERC20 from "../utils/abi/livnERC20.json"
import PersistentFramework from "../utils/persistent";

declare let window: any;

interface ITransactions {
	shares: any;
	aprrove: any;
}

export const TransactionsContext = createContext({} as ITransactions);

export const TransactionsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {

	let publicClient: any
	const { wallet } = useWallet()
	const [spender, setSpender] = useState<string>("");
	const [amount, setAmount] = useState<number>();
	const [valor, setValor] = useState<number>();

	if (typeof window !== "undefined" && typeof window?.ethereum !== "undefined") {
		publicClient = createPublicClient({
			chain: polygonMumbai,
			transport: http()
		})

	}

	const request = await publicClient.simulateContract({
		address: '0xf1afd12a36f60663cd41b69d486432cc32e3a336',
		abi: ERC20Mod,
		functionName: 'approve',
		args: [spender, amount]
		account,
	})

	const supply = await wallet.writeContract(request)

	const aprrove = async (spender: any, amount: any) => {
		await wallet.writeContract({
			address: '0xf1afd12a36f60663cd41b69d486432cc32e3a336',
			abi: ERC20Mod,
			functionName: 'approve',
			args: [spender, amount]
		})
	}

	const shares = async (oportunityAddress: string, accountAddress: string) => {
		const sharesValue = await publicClient?.readContract({
			address: oportunityAddress,
			abi: livnERC20,
			functionName: 'balanceOf',
			args: [accountAddress]
		})
		return sharesValue;
	}

	const providerValue = useMemo(
		() => ({
			aprrove,
			shares
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[
		]
	);

	return (
		<TransactionsContext.Provider value={providerValue}>
			{children}
		</TransactionsContext.Provider>
	);
};
