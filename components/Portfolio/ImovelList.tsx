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
					<Flex alignItems="end" justifyContent="space-between" w="100%">
						<Text w="19.5rem">{t("wantToInvest.property")}</Text>
						<Text ml="1.6rem">{t("wantToInvest.quota")}</Text>
						<Text w="6.375rem" ml="4.8rem">
							{t("portfolio.totalInvested")}
						</Text>
						<Flex alignItems="center" gap="0.3125rem">
							<Text ml="1rem">{t("portfolio.maturity")}</Text>
							<Img
								src="images/icons/info-square.png"
								w="0.7706rem"
								h="0.7706rem"
							/>
						</Flex>
						<Flex alignItems="center" gap="0.3125rem">
							<Text w="6.375rem">{t("opportunities.card.expected")}</Text>
							<Img
								src="images/icons/info-square.png"
								w="0.7706rem"
								h="0.7706rem"
							/>
						</Flex>
						<Flex alignItems="center" gap="0.3125rem" mr="6.5rem">
							<Text w="6.375rem">{t("portfolio.current")}</Text>
							<Img
								src="images/icons/info-square.png"
								w="0.7706rem"
								h="0.7706rem"
							/>
						</Flex>
					</Flex>
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
				borderRadius="0.75rem"
				opacity={isFinished ? "0.5" : "1"}
				border="1px solid #EDF2F7"
				_hover={{
					cursor: "pointer",
					boxShadow:
						"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
					border: "1px solid transparent",
				}}
				transition="150ms"
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
				<Flex flex="1" display={isInvest ? "none" : "flex"}>
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
