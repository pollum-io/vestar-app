import React, { createContext, useMemo, useState } from "react";
import { createPublicClient, custom, getAccount, http } from "viem";
import { polygonMumbai } from "viem/chains";
import { useWallet } from "../hooks/useWallet";
import ERC20Mod from "../utils/abi/ERC20Mod.json";
import livnERC20 from "../utils/abi/livnERC20.json";
import PersistentFramework from "../utils/persistent";

declare let window: any;

interface ITransactions {
	shares: any;
	approve: any;
}

export const TransactionsContext = createContext({} as ITransactions);

export const TransactionsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	let publicClient: any;
	const { wallet, signer } = useWallet();

	if (
		typeof window !== "undefined" &&
		typeof window?.ethereum !== "undefined"
	) {
		publicClient = createPublicClient({
			chain: polygonMumbai,
			transport: http(),
		});
	}

	const approve = async (spender: any, amount: any, address: `0x${string}`) => {
		console.log(amount, 'amount')
		try {
			const { request } = await publicClient.simulateContract({
				address: "0xf1afd12a36f60663cd41b69d486432cc32e3a336" as `0x${string}`,
				abi: ERC20Mod,
				functionName: "approve",
				args: [spender, amount],
				chain: polygonMumbai,
				account: getAccount(address) || signer,
			});

			await wallet?.writeContract(request);
		} catch (err: any) {
			console.log("Erro");
		}
	};

	const shares = async (oportunityAddress: string, accountAddress: string) => {
		const sharesValue = await publicClient?.readContract({
			address: oportunityAddress,
			abi: livnERC20,
			functionName: "balanceOf",
			args: [accountAddress],
		});
		return sharesValue;
	};

	const providerValue = useMemo(
		() => ({
			approve,
			shares,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return (
		<TransactionsContext.Provider value={providerValue}>
			{children}
		</TransactionsContext.Provider>
	);
};
