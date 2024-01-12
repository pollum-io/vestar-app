import React, { createContext, useMemo, useState } from "react";
import { createPublicClient, custom, Account, http, defineChain } from "viem";
import { useWallet } from "../hooks/useWallet";
import { fetchUserApproveData } from "../services/fetchUserApproveData";
import { abi as compliantTokenABI} from "../utils/abi/compliantToken.json";
import { abi as crowdSaleABI} from "../utils/abi/crowdSale.json";
import PersistentFramework from "../utils/persistent";

declare let window: any;

interface ITransactions {
	shares: any;
	approve: any;
}

export const ripple = defineChain({
  id: 1440002,
  name: 'XRPL EVM Sidechain',
  network: 'xrpl',
  nativeCurrency: {
    decimals: 6,
    name: 'XRP',
    symbol: 'XRP',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-evm-sidechain.xrpl.org'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://evm-sidechain.xrpl.org' },
  },
  contracts: {
    compliantToken: {
      address: '0x8F0d3718689CdbA2b309d33a9a03eB81cE2c17F2',
      blockCreated: 5443218,
    },
    crowdSale: {
      address: '0x9F8c217Fa1D510D7B2bE75C088Cc28A0F87b440b',
      blockCreated: 5443220,
    },
  },
});


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
			chain: ripple,
			transport: http(),
		});
	}

	// const approve = async (
	// 	spender: any,
	// 	amount: any,
	// 	address: `0x${string}`,
	// 	token?: any
	// ) => {
	// 	try {
	// 		const { request } = await publicClient.simulateContract({
	// 			address: "0xf1afd12a36f60663cd41b69d486432cc32e3a336" as `0x${string}`,
	// 			abi: ERC20Mod,
	// 			functionName: "approve",
	// 			args: [spender, amount],
	// 			chain: polygonMumbai,
	// 			account: getAccount(address) || signer,
	// 		});

	// 		const txHash = await wallet?.writeContract(request);

	// 		await waitForApproval(txHash);
	// 		await fetchUserApproveData(spender, address, String(amount), token);
	// 	} catch (err: any) {
	// 		console.log(err, "Erro");
	// 	}
	// };

	const waitForApproval = async (txHash: string) => {
		return new Promise((resolve, reject) => {
			const intervalId = setInterval(async () => {
				try {
					const transaction = await publicClient
						.getTransactionReceipt({
							hash: txHash,
						})
						.catch(() => null);
					if (transaction && transaction?.status) {
						clearInterval(intervalId);
						resolve(transaction);
					}
				} catch (err) {
					clearInterval(intervalId);
					reject(err);
				}
			}, 2000);
		});
	};

	//////////////////////////////////
	// Compliant Token
	//////////////////////////////////

	const getIsWhitelisted = async (compliantTokenAddress: string, accountAddress: string) => {
		// TODO: do it return something?
		const isWhitelisted = await publicClient?.readContract({
			address: compliantTokenAddress,
			abi: compliantTokenABI,
			functionName: "isWhitelisted",
			args: [accountAddress],
		});

		return isWhitelisted;
	};

	const callAddToWhitelist = async (compliantTokenAddress: string, accountAddress: string) => {
		// TODO: do it return something?
		await publicClient?.writeContract({
			address: compliantTokenAddress,
			abi: compliantTokenABI,
			functionName: "addToWhitelist",
			args: [accountAddress],
		});
	};



	//////////////////////////////////
	// Crowd Sale
	//////////////////////////////////
	const getBoughtTokens = async (crowdSaleAddress: string, accountAddress: string) => {
		const boughtTokens = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "getBoughtTokens",
			args: [accountAddress],
		});
		return boughtTokens;
	};

	const getDrexAvailableForRefund = async (crowdSaleAddress: string, accountAddress: string) => {
		const drexAvailable = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "getDrexAvailableForRefund",
			args: [accountAddress],
		});
		return drexAvailable;
	};

	const getAvailableTokensToClaim = async (crowdSaleAddress: string, accountAddress: string) => {
		const tokensToClaim = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "getAvailableTokensToClaim",
			args: [accountAddress],
		});
		return tokensToClaim;
	};

	const getAvailableTokens = async (crowdSaleAddress: string) => {
		const availableTokens = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "getAvailableTokens",
		});

		return availableTokens;
	};

	const getDrexRaised = async (crowdSaleAddress: string) => {
		const drexRaised = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "drexRaised",
		});
		return drexRaised;
	};

	const calculateTokenAmount = async (crowdSaleAddress: string) => {
		const tokenAmount = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "calculateTokenAmount",
		});

		return tokenAmount;
	};

	const getCloseTime = async (crowdSaleAddress: string) => {
		const closeTime = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "closeTime",
		});

		return closeTime;
	};

	const getMaxBuyAllowed = async (crowdSaleAddress: string) => {
		const maxBuyAllowed = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "maxBuyAllowed",
		});

		return maxBuyAllowed;
	};

	const getTokenSold = async (crowdSaleAddress: string) => {
		const tokenSold = await publicClient?.readContract({
			address: crowdSaleAddress,
			abi: crowdSaleABI,
			functionName: "tokenSold",
		});

		return tokenSold;
	};


	const providerValue = useMemo(
		() => ({
			getIsWhitelisted,
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
