import { Flex, Img, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import React, { FunctionComponent, useEffect, useState } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { IOpportunitiesCard } from "../../dtos/Oportunities";
import { Collections } from "../../components/Imovel/Collections";
import { formatDate } from "../../utils/formatDate";
import { TbInfoSquare } from "react-icons/tb";
import { TimelineComponent } from "../../components/Imovel/TimelineComponent";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { PriceCard } from "../../components/Imovel/PriceCard";
import { Maps } from "../../components/Map/Maps";
import { Carousel } from "../../components/Imovel/Carousel";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useTransactions } from "../../hooks/useTransactions";
import { useWallet } from "../../hooks/useWallet";
import { useOpportunities } from "../../hooks/useOpportunities";
import { FiMapPin } from "react-icons/fi";
import { compliantToken } from '../../utils/abi/compliantToken';

interface IImovelProps {
	imovelDetails: IOpportunitiesCard;
	usersId: any;
}

export const ImovelContainer: FunctionComponent<IImovelProps> = ({
	imovelDetails,
	usersId,
}) => {
	const [dateEndend, setDateEnded] = useState<any>();
	const [ended, setEnded] = useState<any>();
	// const [totalSupply, setTotalSupply] = useState<number>(-1);
	const [availableTokens, setAvailableTokens] = useState<number>(0);
	const [tokenSold, setTokenSold] = useState<number>(0);
	const [unitPrice, setUnitPrice] = useState<number>(0);
	const [maxBuyAllowed, setMaxBuyAllowed] = useState<number>(0);
	const [toClaim, setToClaim] = useState<number>(0);
	const [forRefund, setForRefund] = useState<number>(0);
	const [boughtTokens, setBoughtTokens] = useState<number>(0);
	const [isWhitelisted, setIsWhitelisted] = useState<bool>(false);
	const [isOpen, setIsOpen] = useState<bool>(false);
	const { account } = useWallet();
	const { getAvailableTokens, getTokenSold, callAddToWhitelist, calculateTokenAmount, getMaxBuyAllowed, getAvailableTokensToClaim, getDrexAvailableForRefund, getIsWhitelisted, getTotalSupply, getIsOpen, getBoughtTokens } = useTransactions();
	const { t } = useTranslation();

	const renderer = ({
		days,
		hours,
		minutes,
		completed,
		props: { date },
	}: CountdownRenderProps) => {
		const dateFormated = moment(date).format("DD/MM/YYYY");
		if (completed) {
			setEnded(true);
			setDateEnded(dateFormated);
			return;
		} else {
			setEnded(false);
			return (
				<Text fontWeight="500" fontSize="1.25rem" lineHeight="2rem" id="timer">
					{t("opportunitieDetails.timer", {
						value1: days,
						value2: hours,
						value3: minutes,
					})}
				</Text>
			);
		}
	};

	useEffect(
		() => {
			const getCotas = async () => {
				// No wallet connect needed
				if (imovelDetails.sale_address) {
					// const totalSupply = await getTotalSupply(
					// 	imovelDetails.sale_address,
					// );
					const availableTokens = await getAvailableTokens(
						imovelDetails.sale_address,
					);
					const tokenSold = await getTokenSold(
						imovelDetails.sale_address,
					);
					const maxBuyAllowed = await getMaxBuyAllowed(
						imovelDetails.sale_address
					);
					const unitPrice = await calculateTokenAmount(
						imovelDetails.sale_address, 1000000
					);
					const isOpen = await getIsOpen(
						imovelDetails.sale_address
					);

					// setTotalSupply(Number(totalSupply));
					setAvailableTokens(Number(availableTokens));
					setTokenSold(Number(tokenSold));
					setUnitPrice(Number(1) / (Number(unitPrice) / Number(1e18)));
					setMaxBuyAllowed(Number(maxBuyAllowed));
					setIsOpen(isOpen);
				}

				// Wallet connected needed
				if (imovelDetails.sale_address && account) {
					const toClaim = await getAvailableTokensToClaim(
						imovelDetails.sale_address, account
					);
					const forRefund = await getDrexAvailableForRefund(
						imovelDetails.sale_address, account
					);
					const boughtTokens = await getBoughtTokens(
						imovelDetails.sale_address, account
					);


					// DREX
					const isWhitelisted = await getIsWhitelisted(
						imovelDetails.compliant_address, account
					);

					setToClaim(Number(toClaim));
					setForRefund(Number(forRefund));
					setBoughtTokens(Number(boughtTokens));
					setIsWhitelisted(isWhitelisted);

				}
			};
			getCotas();
		},
		// eslint-disable-next-line
		[imovelDetails?.sale_address, account, dateEndend]
	);

	console.log("0x", imovelDetails?.compliant_address);


	return (
		<DefaultTemplate>
			<Flex px="5rem" flexDir={"column"} alignItems="center">
				<Collections images={imovelDetails?.pictures_enterprise as any[]} />
				<Flex gap="2.75rem" maxWidth="70rem">
					<Flex flexDir={"column"}>
						<Flex gap="0.5rem" pb="0.5rem">
							<Img
								w="6"
								h="6"
								src={`/api/file/${imovelDetails?.enterprise_logo}`}
							/>
							<Text fontWeight={"400"} color="#171923">
								{imovelDetails?.enterprise_name}
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="1.5rem" pb="1rem">
							{imovelDetails?.name && (
								<Text fontSize="4xl" fontWeight={"600"} color="#171923">
									{imovelDetails?.name}
								</Text>
							)}
							<Text
								fontSize={"sm"}
								fontWeight="400"
								color="#171923"
								bgColor="#F0E8FF"
								py="0.25rem"
								px="1rem"
								borderRadius={"4.875rem"}
							>
								{imovelDetails?.enterprise_type}
							</Text>
							{boughtTokens > 0 && (
								<Flex
									bgColor="#F0E8FF"
									py="0.25rem"
									px="1rem"
									borderRadius={"4.875rem"}
									fontSize={"sm"}
									color="#171923"
									gap="0.25rem"
									display={boughtTokens > 0 ? "flex" : "none"}
									w="max"
								>
									<Text w="max" fontWeight="400">
										{t("opportunitieDetails.youHave")}
									</Text>
									<Text w="max" fontWeight="600">
										{Number(boughtTokens) / 1e18 } {t("opportunitieDetails.yourShares")}
									</Text>
								</Flex>
							)}
						</Flex>
						<Flex gap="0.625rem" pb="1.5rem">
							<Icon w="1.25rem" h="1.5rem" color={"#718096"} as={FiMapPin} />
							<Text color={"#718096"}>
								{" "}
								{`${imovelDetails?.address?.street}, ${imovelDetails?.address?.neighborhood}`}
							</Text>
						</Flex>
						<Flex flexDir={"column"} pb="3rem">
							<SimpleGrid
								columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
								w="fit-content"
								rowGap="2rem"
							>
								<Flex flexDir={"column"} gap="0.25rem" w="7rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										{t("opportunitieDetails.unitPrice")}
									</Text>
									<Flex gap="0.25rem">
										<Text fontSize={"xs"} color="#718096">
											R$
										</Text>
										<Text color="#000000">1.500,00</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem" w="7rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										{t("opportunities.card.minInvest")}
									</Text>
									<Flex gap="0.25rem">
										<Text fontSize={"xs"} color="#718096">
											R$
										</Text>
										<Text color="#000000">{`${"1.500,00"}$`}</Text> {/* TODO */}
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem" w="7rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										{t("opportunitieDetails.maxAllowed")}
									</Text>
									<Flex gap="0.25rem">
										<Text fontSize={"xs"} color="#718096">
											R$
										</Text>
										<Text color="#000000">16.800,00</Text>
									</Flex>
								</Flex>
								<Flex
									flexDir={"column"}
									gap="0.25rem"
									w="10.5rem"
									order={["unset", "unset", "unset", "1", "unset"]}
								>
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										{t("opportunitieDetails.expected")}
									</Text>
									<Flex gap="0.25rem" alignItems="center" w="7rem">
										<Text color="#000000">
											{60}%{" "}
										</Text>
										<Icon as={TbInfoSquare} color={"#A0AEC0"} w={5} h={5} />
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem" w="7rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										{t("opportunitieDetails.start")}
									</Text>
									<Flex gap="0.25rem">
										<Text color="#000000">
											{formatDate(imovelDetails?.init_date)} {/* TODO */}
										</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem" w="7rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										{t("opportunities.card.estConc")}
									</Text>
									<Flex gap="0.25rem">
										<Text color="#000000">
											{formatDate(imovelDetails?.expected_delivery_date)}
										</Text>
									</Flex>
								</Flex>
							</SimpleGrid>
						</Flex>
						<Flex flexDir={"column"} gap="5">
							<Text color={"#171923"}>{t("opportunitieDetails.description")}</Text>
						</Flex>

						<Flex mt="4rem" flexDir={"column"}>
							<Text
								mb="2rem"
								fontWeight={"600"}
								fontSize="2xl"
								color={"#171923"}
							>
								{t("opportunities.estimatedTimeline")}
							</Text>
							<Flex maxWidth="70rem">
								<Flex flexDir={"row"}>
									{imovelDetails?.estimated_timeline?.map((data, index) => (
										<>
											<TimelineComponent
												key={index}
												titleWidth={"12rem"}
												data={data}
											/>
										</>
									))}
								</Flex>
							</Flex>
						</Flex>
					</Flex>

					<Flex flexDirection="column" position="relative">
						<Flex h="100%" flexDirection="column" gap="1.5rem">
							{ended ? (
								<Flex
									bgColor="#E2E8F0"
									py="0.25rem"
									px="1rem"
									borderRadius={"4.875rem"}
									fontSize={"sm"}
									color="#171923"
									gap="0.25rem"
									justifyContent="center"
								>
									<Text fontWeight="400">
										{t("opportunitieDetails.closedIn")}
									</Text>
									<Text fontWeight="400">{dateEndend}</Text>
								</Flex>
							) : (
								<Flex
									flexDirection="column"
									padding="1.5rem"
									gap="0.25rem"
									w="23.125rem"
									background="#4BA3B7"
									borderRadius="0.75rem"
									fontFamily="Poppins"
									color="#FFFFFF"
									h="max-content"
								>
									{/* TODO */}
									<Countdown
										date={imovelDetails?.sale_end_at}
										renderer={renderer}
									/>
									<Text
										fontWeight="500"
										fontSize="1.25rem"
										lineHeight="2rem"
										id="timer"
									>
										{t("opportunitieDetails.closeSales")}
									</Text>
								</Flex>
							)}
							{/* TODO */}
							<PriceCard
								id={imovelDetails?._id}
								compliantToken={imovelDetails?.compliant_address}
								isWhitelisted={isWhitelisted}
								tokensSold={tokenSold}
								price={unitPrice}
								ended={!isOpen}
								supply={availableTokens}
								oportunitiesAddress={imovelDetails?.sale_address}
								investor_pf={usersId?.investor_pf}
								investor_pj={usersId?.investor_pj}
							/>{" "}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				mt="4.375rem"
				px="5rem"
				bgColor={"#E4F2F3"}
				py="2rem"
				justifyContent="center"
			>
				<Flex flexDir={"column"} w="70rem">
					<Text mb="2rem" fontWeight={"600"} fontSize="2xl" color={"#171923"}>
						Em breve você poderá acompanhar:
					</Text>
					<Flex gap="2.1875rem">
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Home.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="8.5rem">
							{t("opportunitieDetails.floorPlans")}
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Edit-Square.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="100%">
							{t("opportunitieDetails.audits")}
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Document.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="100%">
							{t("opportunitieDetails.invoices")}
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Folder.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="75%">
							{t("opportunitieDetails.extraDoc")}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				py="4rem"
				px="5rem"
				flexDir={"column"}
				justifyContent="center"
				alignItems="center"
			>
				<Flex mb={"2rem"} w="100%" maxWidth="70rem">
					<Text fontSize={"1.5rem"} fontWeight={"600"} color={"#171923"}>
						Localização
					</Text>
				</Flex>
				<Flex maxWidth="70rem">
					<Maps localization={imovelDetails?.address} />
				</Flex>
				<Flex
					mt="2rem"
					w="100%"
					justifyContent="space-between"
					maxWidth="70rem"
					gap="3rem"
				>
					<Flex flexDir={"column"} gap="1rem" w="34.875rem">
						<Text fontWeight={"600"} color={"#171923"}>
							{imovelDetails?.address?.street},{" "}
							{imovelDetails?.address?.neighborhood},{" "}
							{imovelDetails?.address?.state}
						</Text>
						<Text fontSize={"sm"} color={"#171923"}>
							{t("opportunitieDetails.neighbor_description")}
						</Text>
					</Flex>
					<Flex>
						<Carousel
							extra_images={imovelDetails?.pictures_neighbor as any[]}
							widthValue="30rem"
							heightValue="15rem"
						/>
					</Flex>
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
