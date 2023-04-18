import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

interface IYourDeital {
	data: any;
}

export const YourDetailtCard: FunctionComponent<IYourDeital> = ({ data }) => {
	const [isInvestidor, setIsInvestidor] = useState(false);
	const [hasInvest, setHasInvest] = useState(false);
	const { t } = useTranslation();

	const totalAmount = useMemo(() => {
		const total = data.reduce((acc: any, item: any) => acc + item.amount, 0);

		const formattedTotal = total.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});

		return formattedTotal;
	}, [data]);

	return (
		<Flex
			w={hasInvest ? "34.4375rem" : "29.5625rem"}
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
				w={isInvestidor ? "8.1875rem" : "max"}
				flexDir={"column"}
				alignItems="flex-start"
				opacity={1}
			>
				<Flex alignItems="center" gap="3">
					<Text fontWeight={"500"} fontSize="sm" color="#007D99">
						{isInvestidor
							? t("portfolio.registered")
							: t("portfolio.currentAssets")}
					</Text>
					<Img
						display={isInvestidor ? "none" : "flex"}
						w="3"
						h="3"
						src={"images/icons/info-square.png"}
					/>
				</Flex>
				<Text fontSize={"xl"} fontWeight="600" color="#171923">
					{isInvestidor ? "42" : totalAmount}
				</Text>
			</Flex>
			<Flex
				w="max"
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 1 : 0.5}
			>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{isInvestidor ? "Arrecadação" : ""}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={isInvestidor || !hasInvest ? "#171923" : "#38A169"}
					textAlign={"left"}
				>
					{isInvestidor ? "R$ 2.584.256" : ""}
				</Text>
			</Flex>
			<Flex
				w="max"
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 1 : 0.5}
			>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{isInvestidor ? "Contas Negociadas" : ""}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={isInvestidor || !hasInvest ? "#171923" : "#38A169"}
				>
					{isInvestidor ? "37%" : ""}
				</Text>
			</Flex>
		</Flex>
	);
};
