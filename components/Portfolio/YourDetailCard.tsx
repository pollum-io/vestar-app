import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent, useMemo, useState } from "react";
import { useUser } from "../../hooks/useUser";

interface IYourDeital {
	investor?: any;
	enterprise?: any;
}

export const YourDetailtCard: FunctionComponent<IYourDeital> = ({
	investor,
	enterprise,
}) => {
	const [hasInvest, setHasInvest] = useState(false);
	const { isInvestor } = useUser();

	const investorTotalAmount = useMemo(() => {
		const total = investor?.reduce(
			(acc: any, item: any) => acc + item.amount,
			0
		);

		const formattedTotal = total?.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});

		return formattedTotal;
	}, [investor]);

	const enterpriseTotalAmount = useMemo(() => {
		const total = enterprise?.reduce(
			(acc: any, item: any) => acc + item.token_minted * item.token_price,
			0
		);
		const formattedTotal = total?.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
		return formattedTotal;
	}, [enterprise]);

	const soldPercentage = useMemo(() => {
		let mintedTokensTotal = 0;
		let totalSupplyTotal = 0;

		for (let i = 0; i < enterprise?.length; i++) {
			mintedTokensTotal += enterprise[i].token_minted;
			totalSupplyTotal += enterprise[i].token_supply;
		}

		return ((mintedTokensTotal / totalSupplyTotal) * 100).toFixed(2);
	}, [enterprise]);

	return (
		<Flex
			w={hasInvest ? "34.4375rem" : "34.4375rem"}
			zIndex="9"
			boxShadow="0px 20px 25px rgba(31, 41, 55, 0.1)"
			position={"absolute"}
			bgColor="#FFFFFF"
			top="2rem"
			px="1.5rem"
			py="1.5rem"
			borderRadius={"0.75rem"}
			justifyContent="space-between"
			alignItems={"center"}
			border="1px solid #E5E7EB"
		>
			<Flex
				w={!isInvestor ? "8.1875rem" : "max"}
				flexDir={"column"}
				alignItems="flex-start"
				opacity={1}
			>
				<Flex alignItems="center" gap="3">
					<Text fontWeight={"500"} fontSize="sm" color="#007D99">
						{!isInvestor ? "Empreendimentos Cadastrados" : "Patrimônio Atual"}
					</Text>
					<Img
						display={!isInvestor ? "none" : "flex"}
						w="3"
						h="3"
						src={"images/icons/info-square.png"}
					/>
				</Flex>
				<Text fontSize={"xl"} fontWeight="600" color="#171923">
					{!isInvestor ? enterprise?.length : investorTotalAmount}
				</Text>
			</Flex>
			<Flex w="max" flexDir={"column"} alignItems="flex-start" opacity={1}>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{!isInvestor ? "Arrecadação" : ""}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={!isInvestor || !hasInvest ? "#171923" : "#38A169"}
					textAlign={"left"}
				>
					{!isInvestor ? enterpriseTotalAmount : ""}
				</Text>
			</Flex>
			<Flex w="max" flexDir={"column"} alignItems="flex-start" opacity={1}>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{!isInvestor ? "Cotas Negociadas" : ""}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={!isInvestor ? "#171923" : "#38A169"}
				>
					{!isInvestor ? `${soldPercentage}%` : ""}
				</Text>
			</Flex>
		</Flex>
	);
};
