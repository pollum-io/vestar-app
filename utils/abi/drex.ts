export const drex = {
	address: '0xC4BAF91be09e5D5CBBDD78844C2877F9c85e4474',
	abi: [
		{
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }
            ],
            name: "approve",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
            stateMutability: "nonpayable",
            type: "function"
        },
	],
} as const
