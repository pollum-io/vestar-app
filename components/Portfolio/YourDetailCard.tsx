import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";

export const YourDetailtCard: FunctionComponent = () => {
	const [isInvestidor, setIsInvestidor] = useState(false);
	const [hasInvest, setHasInvest] = useState(false);
	const { t } = useTranslation();

	return (
		<Flex
			w="34.4375rem"
			zIndex="9"
			right="5rem"
			top="13rem"
			boxShadow="0px 20px 25px rgba(31, 41, 55, 0.1)"
			position={"absolute"}
			bgColor="#FFFFFF"
			px="1.5rem"
			py="1.5rem"
			borderRadius={"0.75rem"}
			justifyContent="space-between"
			alignItems={"end"}
			border="1px solid #E5E7EB"
		>
			<Flex
				w={isInvestidor ? "20%" : "max"}
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 0.5 : 1}
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
					{isInvestidor ? "42" : t("opportunities.card.sign") + " 237.097,68"}
				</Text>
			</Flex>
			<Flex
				w="max"
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 0.5 : 1}
			>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{isInvestidor ? t("portfolio.revenue") : t("portfolio.result")}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={isInvestidor ? "#171923" : "#38A169"}
					textAlign={"left"}
				>
					{isInvestidor
						? t("opportunities.card.sign") + " 2.584.256"
						: "+ " + t("opportunities.card.sign") + " 3.256"}
				</Text>
			</Flex>
			<Flex
				w="max"
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 0.5 : 1}
			>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{isInvestidor ? t("portfolio.sharesTraded") : t("portfolio.prof")}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={isInvestidor ? "#171923" : "#38A169"}
				>
					{isInvestidor ? "37%" : "+ 13,5 %"}
				</Text>
			</Flex>
		</Flex>
	);
};
