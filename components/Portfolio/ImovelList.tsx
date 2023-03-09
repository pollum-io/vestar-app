import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface IImovelList {
	isFinished: boolean;
	isInvest: boolean;
}

export const ImovelList: FunctionComponent<IImovelList> = ({
	isFinished,
	isInvest,
}) => {
	const { t } = useTranslation();
	return (
		<Flex w="100%" id="table" flexDir={"column"}>
			<Flex
				id="header-table-container"
				w="100%"
				color={"#171923"}
				fontSize={"sm"}
				fontWeight="400"
				mb="1rem"
			>
				{isInvest ? (
					<>
						<Text pr="24.5rem">{t("wantToInvest.property")}</Text>
						<Text pr="11.5rem">{t("wantToInvest.quota")}</Text>
						<Text pr="7.5rem">{t("portfolio.totalInvested")}</Text>
						<Text pr="8.5rem">{t("portfolio.maturity")}</Text>
						<Text pr="8.5rem">{t("portfolio.investment")}</Text>
						<Text mr="8rem" maxW="5%" flexWrap={"wrap"}>
							{t("opportunities.card.expected")}
						</Text>
						<Text maxW="5%" flexWrap={"wrap"}>
							{t("portfolio.current")}
						</Text>
					</>
				) : (
					<>
						<Text flex="2">{t("wantToInvest.property")}</Text>
						<Text flex="1">{t("wantToInvest.quota")}</Text>
						<Text flex="1">{t("portfolio.revenue")}</Text>
						<Text flex="1">{t("opportunitieDetails.shares")}</Text>
						<Text flex="1">{t("opportunitieDetails.available")}</Text>
					</>
				)}
			</Flex>
			<Flex
				id="body-table-container"
				alignItems={"center"}
				boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
				borderRadius="0.75rem"
				opacity={isFinished ? "0.5" : "1"}
			>
				<Flex alignItems={"center"} gap="4" flex="2">
					{isFinished ? (
						<Flex>
							<Flex
								bgColor={"rgba(0, 0, 0, 0.36);"}
								color={"#FFFFFF"}
								px="1.5"
								py="0.1rem"
								borderRadius="15rem"
								fontSize={"xs"}
								fontWeight={"500"}
								position={"absolute"}
								mt="5"
								ml="3"
							>
								Encerrado
							</Flex>
							<Img src="images/ImagePort.png" />
						</Flex>
					) : (
						<Img src="images/ImagePort.png" />
					)}

					<Flex flexDir={"column"}>
						<Text fontSize={"md"} fontWeight={"500"} color={"#171923"}>
							Crypto PLaza
						</Text>
						<Text fontSize={"xs"} fontWeight={"400"} color={"#2D3748"}>
							Residencial
						</Text>
					</Flex>
				</Flex>
				<Flex flex="1">
					{isInvest ? (
						<Flex flexDir={"column"}>
							<Text
								cursor={isFinished ? "default" : "pointer"}
								fontSize={"md"}
								fontWeight="500"
								color={"#007D99"}
							>
								cota_nome
							</Text>
							<Text fontSize={"xs"} fontWeight="400" color={"#2D3748"}>
								03 {t("opportunitieDetails.quota")}
							</Text>
						</Flex>
					) : (
						<Flex>
							<Text
								cursor={isFinished ? "default" : "pointer"}
								fontSize={"md"}
								fontWeight="500"
								color={"#007D99"}
							>
								cota_nome
							</Text>
						</Flex>
					)}
				</Flex>
				<Flex flex="1">
					{isInvest ? (
						<Flex flexDir={"column"}>
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								{t("opportunities.card.sign")} 450
							</Text>
							<Text fontSize={"xs"} fontWeight="400" color={"#171923"}>
								0,5 % {t("portfolio.ofPortfolio")}
							</Text>
						</Flex>
					) : (
						<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
							{t("opportunities.card.sign")} 450
						</Text>
					)}
				</Flex>
				<Flex flex="1">
					<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
						150
					</Text>
				</Flex>
				<Flex flex="1">
					<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
						{isInvest ? "2025" : "47"}
					</Text>
				</Flex>
				{isInvest && (
					<>
						<Flex flex="1">
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								{t("opportunities.card.sign")} 0,00
							</Text>
						</Flex>
						<Flex flex="1">
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								{t("opportunities.card.sign")} 0,00
							</Text>
						</Flex>
					</>
				)}
			</Flex>
		</Flex>
	);
};
