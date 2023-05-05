import {
	Flex,
	Img,
	Radio,
	RadioGroup,
	Stack,
	Text,
	SimpleGrid,
	Checkbox,
	Button,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { OpportunitiesCard, OpportunitiesCards } from "../../components";
import { ImovelList } from "../../components/Portfolio/ImovelList";
import { MenuChart } from "../../components/Portfolio/MenuChart";
import { NotInvestWarn } from "../../components/Portfolio/NotInvestWarn";
import { YourDetailtCard } from "../../components/Portfolio/YourDetailCard";
import { DefaultTemplate } from "../DefaultTemplate";
import { Examaple } from "../../components/Portfolio/Chart";

import { useUser } from "../../hooks/useUser";
import moment from "moment";
import { Maps } from "../../components/Map/Maps";
import { useTranslation } from "react-i18next";

interface IPortfolio {
	portfolioData: any;
	enterpriseData?: any;
	enterpriseInvestment?: any;
	user?: any;
}

const BarCharts = dynamic(
	async () => {
		const mod = await import("../../components/Portfolio/BarChart");
		return mod.BarCharts;
	},
	{
		ssr: false,
	}
);

const PieChartPortfolio = dynamic(
	async () => {
		const mod = await import("../../components/Portfolio/PieChart");
		return mod.PieChartPortfolio;
	},
	{
		ssr: false,
	}
);

export const PortfolioContainer: FunctionComponent<IPortfolio> = ({
	portfolioData,
	enterpriseData,
	enterpriseInvestment,
	user,
}) => {
	const [value, setValue] = useState("1");
	const [yoursInvestments, setYoursInvestments] = useState<any>();
	const [hasInvest, setHasInvest] = useState<boolean>(true);
	const [quotaTimeFilter, setQuotaTimeFilter] = useState("year");
	const [quotaFilter, setQuotaFilter] = useState("percentage");
	const [imvestmentFilter, setInvestmentFilter] = useState("processed");
	const { username, isInvestor, userInfos, setIsInvestor } = useUser();
	const formattedDate = moment().format("DD/MMM/YY");
	const { t } = useTranslation();

	const calcularPorcentagensDeTipos = (objetos: any) => {
		const contagemDeTipos: any = {};
		objetos?.forEach((objeto: any) => {
			const tipo = objeto.enterprise_type;
			if (!contagemDeTipos[tipo]) {
				contagemDeTipos[tipo] = 0;
			}
			contagemDeTipos[tipo]++;
		});

		const totalDeObjetos = objetos?.length;

		const porcentagensDeTipos: any = {};
		Object.entries(contagemDeTipos).forEach(([tipo, contagem]: any) => {
			const porcentagem = (contagem / totalDeObjetos) * 100;
			porcentagensDeTipos[tipo] = porcentagem.toFixed(2);
		});
		setYoursInvestments(porcentagensDeTipos);
		return porcentagensDeTipos;
	};

	useMemo(() => {
		calcularPorcentagensDeTipos(portfolioData);
		setIsInvestor(user?.investor_id ? true : false);
	}, [portfolioData]);

	return (
		<DefaultTemplate>
			<Flex w="100%">
				<Flex
					bgColor={"#1789A3"}
					alignItems="center"
					borderBottomRadius="0.75rem"
					px="5rem"
					pt="6.8125rem"
					pb="1.5rem"
					w="100%"
					justifyContent="center"
				>
					<Flex w="100%" justifyContent="space-between" maxWidth="70rem">
						<Flex flexDir={"column"} color="white" justifyContent="center">
							<Text fontWeight={"600"} fontSize="3xl">
								{t("portfolio.hello", {
									Name: username,
								})}
							</Text>
							{hasInvest ? (
								<Text fontSize={"sm"} fontWeight="400">
									{t("portfolio.portfolioDateOf", {
										value: formattedDate,
									})}
								</Text>
							) : (
								<Text fontSize={"sm"} fontWeight="400">
									{t("portfolio.portfolioEmpty")}
								</Text>
							)}
						</Flex>
						<Flex
							position="relative"
							w="34rem"
							h="5.25rem"
							justifyContent="end"
						>
							<YourDetailtCard
								investor={portfolioData}
								enterprise={enterpriseData}
							/>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			{hasInvest ? (
				<Flex
					justifyContent="center"
					alignItems="center"
					px="5rem"
					flexDirection="column"
				>
					<Flex flexDirection="column" maxWidth="70rem" w="100%">
						<Flex mt="6.1875rem" flexDir={"column"} pb="8.5rem">
							<Text
								color="#171923"
								fontWeight={"600"}
								fontSize="2xl"
								mb="1.5rem"
							>
								{t("portfolio.prof")}
							</Text>
							<Flex
								borderRadius={"0.75rem"}
								bgImage="linear-gradient(135deg, #A593E7 0%, #D7A6F0 100%, #D9A6F1 100%);"
								w="100%"
								h="25rem"
								pl="1.5625rem"
								pr="2.1875rem"
								py="1.75rem"
								flexDirection={"column"}
								boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
							>
								<Flex justifyContent={"space-between"} alignItems="baseline">
									{/* <Flex mb="2.75rem">
										{isInvestor ? (
											<Flex>
												<MenuChart title="Periodo" defaultSelection="Maximo" />
												<MenuChart
													title="Investimentos"
													defaultSelection="Todos"
												/>
											</Flex>
										) : (
											<MenuChart title="Imóveis" defaultSelection="Todos" />
										)}
									</Flex>
									<Flex alignItems="center" gap="4">
										<Text fontWeight={"500"} fontSize="sm" color="#FFFFFF">
											{t("portfolio.month")}
										</Text>
										<Text
											px="3"
											py="2"
											borderRadius="0.9375rem"
											bgColor={"#FFFFFF"}
											color={"#865DF0"}
											fontWeight={"500"}
											fontSize="sm"
										>
											{t("portfolio.year")}
										</Text>
										<Text fontWeight={"500"} fontSize="sm" color="#FFFFFF">
											{t("portfolio.max")}
										</Text>
									</Flex> */}
								</Flex>
								<Examaple
									chartData={portfolioData}
									enterpriseInvestment={enterpriseInvestment?.investments}
								/>
							</Flex>
						</Flex>
						<Flex flexDir={"column"} mb="1.5625rem">
							<Flex
								mb={isInvestor ? "0" : "2rem"}
								justifyContent={isInvestor ? "normal" : "space-between"}
								alignItems="start"
								w="100%"
							>
								<Flex mb="2.5625rem">
									<Text
										mr={isInvestor ? "4.5rem" : "unset"}
										fontSize={"2xl"}
										fontWeight={"600"}
										color={"#171923"}
									>
										{isInvestor
											? t("portfolio.total")
											: t("portfolio.bestSelling")}
									</Text>
								</Flex>
								{/* <Flex display={isInvestor ? "flex" : "none"}>
									<MenuChart defaultSelection="Todos os imóveis" />
								</Flex> */}
								{/* {!isInvestor && (
									<Flex alignItems="center" gap="3.5rem">
										<Flex alignItems={"center"} gap="0.3125rem">
											<Button
												fontWeight={"500"}
												fontSize="sm"
												color={
													quotaTimeFilter === "month" ? "#00262D" : "#718096"
												}
												justifyContent="center"
												alignItems="center"
												padding="0.5rem 0.75rem"
												bgColor={
													quotaTimeFilter === "month"
														? "#B1D8DF"
														: "transparent"
												}
												_hover={{}}
												borderRadius="full"
												onClick={() => setQuotaTimeFilter("month")}
												_active={{}}
											>
												Mês
											</Button>
											<Button
												fontWeight={"500"}
												fontSize="sm"
												color={
													quotaTimeFilter === "year" ? "#00262D" : "#718096"
												}
												justifyContent="center"
												alignItems="center"
												padding="0.5rem 0.75rem"
												bgColor={
													quotaTimeFilter === "year" ? "#B1D8DF" : "transparent"
												}
												_hover={{}}
												borderRadius="full"
												onClick={() => setQuotaTimeFilter("year")}
												_active={{}}
											>
												Ano
											</Button>
											<Button
												fontWeight={"500"}
												fontSize="sm"
												color={
													quotaTimeFilter === "max" ? "#00262D" : "#718096"
												}
												justifyContent="center"
												alignItems="center"
												padding="0.5rem 0.75rem"
												bgColor={
													quotaTimeFilter === "max" ? "#B1D8DF" : "transparent"
												}
												_hover={{}}
												borderRadius="full"
												onClick={() => setQuotaTimeFilter("max")}
												_active={{}}
											>
												Máximo
											</Button>
										</Flex>
										<Flex>
											<Flex gap="1.5625rem" fontFamily="Poppins">
												<Flex gap="0.75rem">
													<Checkbox
														spacing="0.75rem"
														isChecked={quotaFilter === "unity" ? true : false}
														variant="circular"
														icon={<BsCircleFill color="#ffffff" size={7} />}
														borderColor="#E2E8F0"
														onChange={() => setQuotaFilter("unity")}
													/>
													<Text
														fontSize="0.875rem"
														lineHeight="1.25rem"
														color="#171923"
														fontWeight={quotaFilter === "unity" ? "500" : "400"}
													>
														Unidades
													</Text>
												</Flex>
												<Flex gap="0.75rem">
													<Checkbox
														spacing="0.75rem"
														isChecked={
															quotaFilter === "percentage" ? true : false
														}
														fontStyle="normal"
														icon={<BsCircleFill color="#ffffff" size={"50%"} />}
														variant="circular"
														borderColor="#E2E8F0"
														onChange={() => setQuotaFilter("percentage")}
													/>
													<Text
														fontSize="0.875rem"
														lineHeight="1.25rem"
														color="#171923"
														fontWeight={
															quotaFilter === "percentage" ? "500" : "400"
														}
													>
														Porcentagem
													</Text>
												</Flex>
											</Flex>
										</Flex>
									</Flex>
								)} */}
							</Flex>
							{isInvestor ? (
								<Flex alignItems={"center"} w="100%" h="15rem">
									<PieChartPortfolio data={portfolioData} />
									<Flex pl="5rem" gap="3.25rem">
										{yoursInvestments?.Residencial && (
											<Flex flexDir={"column"}>
												<Text fontWeight={"500"} fontSize="md" color="#171923">
													{yoursInvestments?.Residencial}%
												</Text>
												<Text fontWeight={"400"} fontSize="xs" color="#2D3748">
													{t("opportunities.card.residential")}
												</Text>
											</Flex>
										)}
										{yoursInvestments?.Comercial && (
											<Flex flexDir={"column"}>
												<Text fontWeight={"500"} fontSize="md" color="#171923">
													{yoursInvestments?.Comercial}%
												</Text>
												<Text fontWeight={"400"} fontSize="xs" color="#2D3748">
													{t("opportunities.card.commercial")}
												</Text>
											</Flex>
										)}
										{yoursInvestments?.Escritorio && (
											<Flex flexDir={"column"}>
												<Text fontWeight={"500"} fontSize="md" color="#171923">
													{yoursInvestments?.Escritorio}%
												</Text>
												<Text fontWeight={"400"} fontSize="xs" color="#2D3748">
													{t("opportunities.card.office")}
												</Text>
											</Flex>
										)}
									</Flex>
								</Flex>
							) : (
								<Flex w="100%" h="25rem">
									<BarCharts chartData={enterpriseData} />
								</Flex>
							)}
						</Flex>
						<Flex flexDir={"column"} mb="7.5rem">
							<Flex
								justifyContent={"space-between"}
								mb="2.1875rem"
								alignItems="center"
								gap="1rem"
							>
								<Text
									pt="5rem"
									fontSize={"2xl"}
									fontWeight={"600"}
									color={"#171923"}
								>
									{isInvestor
										? t("portfolio.yourInvestments")
										: t("opportunitieDetails.yourShares")}
								</Text>
								<Flex alignItems={"center"} justifyContent="center" gap="4rem">
									{/* <Flex
										gap="1.5625rem"
										fontFamily="Poppins"
										display={isInvestor ? "flex" : "none"}
									>
										<Flex gap="0.75rem">
											<Checkbox
												spacing="0.75rem"
												isChecked={
													imvestmentFilter === "processed" ? true : false
												}
												variant="circular"
												icon={<BsCircleFill color="#ffffff" size={7} />}
												borderColor="#E2E8F0"
												onChange={() => setInvestmentFilter("processed")}
											/>
											<Text
												fontSize="0.875rem"
												lineHeight="1.25rem"
												color="#171923"
												fontWeight={
													imvestmentFilter === "processed" ? "500" : "400"
												}
											>
												Processados
											</Text>
										</Flex>
										<Flex gap="0.75rem">
											<Checkbox
												spacing="0.75rem"
												isChecked={
													imvestmentFilter === "pendent" ? true : false
												}
												fontStyle="normal"
												icon={<BsCircleFill color="#ffffff" size={"50%"} />}
												variant="circular"
												borderColor="#E2E8F0"
												onChange={() => setInvestmentFilter("pendent")}
											/>
											<Text
												fontSize="0.875rem"
												lineHeight="1.25rem"
												color="#171923"
												fontWeight={
													imvestmentFilter === "pendent" ? "500" : "400"
												}
											>
												Pendentes
											</Text>
										</Flex>
									</Flex>
									<MenuChart
										title="Empreendimentos"
										titleColor="#171923"
										defaultSelection="Todos"
									/> */}
								</Flex>
							</Flex>
							<Flex w="100%" flexDir={"column"}>
								<Flex
									id="header-table-container"
									w="100%"
									color={"#171923"}
									fontSize={"sm"}
									fontWeight="400"
									mb="1rem"
								>
									{isInvestor ? (
										<Flex w="100%" justifyContent="space-between">
											<Flex w="18rem" alignItems="end">
												<Text>{t("wantToInvest.property")}</Text>
											</Flex>
											<Flex
												justifyContent="space-between"
												w="70%"
												alignItems="end"
											>
												<Text w="7rem">{t("wantToInvest.quota")}</Text>
												<Text w="7rem">{t("portfolio.totalInvested")}</Text>
												<Flex gap="0.375rem" alignItems="center" w="7rem">
													<Text>{t("portfolio.maturity")}</Text>
													<Img src="icons/InfoSquare.png" />
												</Flex>
												<Flex gap="0.375rem" alignItems="center" w="7rem">
													<Text w="6.375rem">
														{t("opportunitieDetails.expected")}
													</Text>
													<Img src="icons/InfoSquare.png" />
												</Flex>
											</Flex>
										</Flex>
									) : (
										<Flex w="100%" justifyContent="space-between">
											<Flex w="18rem" alignItems="end">
												<Text>{t("wantToInvest.property")}</Text>
											</Flex>
											<Flex
												w="70%"
												justifyContent="space-between"
												alignItems="end"
											>
												<Text w="7rem">{t("wantToInvest.quota")}</Text>
												<Text w="7rem">{t("portfolio.revenue")}</Text>
												<Text w="7rem">{t("opportunitieDetails.shares")}</Text>
												<Text w="9rem">
													{t("opportunitieDetails.available")}
												</Text>
											</Flex>
										</Flex>
									)}
								</Flex>
								<Flex flexDirection="column" gap="0.75rem">
									<ImovelList
										investmentData={portfolioData}
										enterpriseData={enterpriseData}
										isFinished={false}
									/>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							flexDir={"column"}
							w="100%"
							gap="1.75rem"
							pb={isInvestor ? "none" : "2rem"}
						>
							<Text fontSize={"2xl"} fontWeight={"600"} color={"#171923"}>
								{isInvestor ? t("portfolio.where") : "Imóveis cadastrados"}
							</Text>
							{isInvestor ? (
								<Flex gap="1.5rem" mb={"10rem"}>
									<Maps localizations={portfolioData} />
								</Flex>
							) : null}
						</Flex>
					</Flex>
					{!isInvestor && (
						<Flex mb="10rem">
							<OpportunitiesCards
								enterpriseId={userInfos}
								enterpriseData={enterpriseData}
								isPortfolio={true}
							/>
						</Flex>
					)}
				</Flex>
			) : (
				<NotInvestWarn />
			)}
		</DefaultTemplate>
	);
};
