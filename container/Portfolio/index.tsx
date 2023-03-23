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
import { FunctionComponent, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { OpportunitiesCard } from "../../components";
import { ImovelList } from "../../components/Portfolio/ImovelList";
import { MenuChart } from "../../components/Portfolio/MenuChart";
import { NotInvestWarn } from "../../components/Portfolio/NotInvestWarn";
import { YourDetailtCard } from "../../components/Portfolio/YourDetailCard";
import { DefaultTemplate } from "../DefaultTemplate";

const BarCharts = dynamic(() => import("../../components/Portfolio/BarChart"), {
	ssr: false,
});

const Example = dynamic(() => import("../../components/Portfolio/Chart"), {
	ssr: false,
});

const PieChartPortfolio = dynamic(
	() => import("../../components/Portfolio/PieChart"),
	{
		ssr: false,
	}
);

export const PortfolioContainer: FunctionComponent = () => {
	const [value, setValue] = useState("1");
	const [isInvestor, setIsInvestor] = useState(false);
	const [hasInvest, setHasInvest] = useState(true);
	const [quotaTimeFilter, setQuotaTimeFilter] = useState("year");
	const [quotaFilter, setQuotaFilter] = useState("percentage");

	return (
		<DefaultTemplate>
			<Flex w="100%">
				<Flex
					bgColor={"#1789A3"}
					alignItems="center"
					borderBottomRadius="0.75rem"
					pr="5.5rem"
					pl="5rem"
					pt="6.8125rem"
					pb="1.5rem"
					w="100%"
					justifyContent="center"
				>
					<Flex w="100%" justifyContent="space-between" maxWidth="70rem">
						<Flex flexDir={"column"} color="white" mr="3rem">
							<Text fontWeight={"600"} fontSize="3xl">
								Olá, Pred!
							</Text>
							<Text fontSize={"sm"} fontWeight="400">
								Esse é o portfólio da Nome da Empresa de 28/nov/22
							</Text>
						</Flex>
						<Flex position="relative" w="34rem" h="5.25rem">
							<YourDetailtCard />
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
								Resumo de Vendas
							</Text>
							<Flex
								borderRadius={"0.75rem"}
								bgImage="linear-gradient(135deg, #A593E7 0%, #D7A6F0 100%, #D9A6F1 100%);"
								w="100%"
								h="25rem"
								pl="2"
								pr="4"
								py="1.75rem"
								flexDirection={"column"}
								boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
							>
								<Flex justifyContent={"space-between"} alignItems="baseline">
									<Flex>
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
									{isInvestor ? (
										<Flex gap="0.5rem">
											<Text
												bgColor={"#FFFFFF"}
												color={"#865DF0"}
												fontSize="sm"
												fontWeight={"500"}
												px="3"
												py="2"
												borderRadius={"0.75rem"}
											>
												CDI
											</Text>
											<Text
												bgColor={"#F687B3"}
												color={"#ffffff"}
												fontSize="sm"
												fontWeight={"500"}
												px="3"
												py="2"
												borderRadius={"0.75rem"}
											>
												IPCA
											</Text>
											<Text
												bgColor={"#007D99"}
												color={"#ffffff"}
												fontSize="sm"
												fontWeight={"500"}
												px="3"
												py="2"
												borderRadius={"0.75rem"}
											>
												IBOVE
											</Text>
											<Text
												bgColor={"#6E40E7"}
												color={"#ffffff"}
												fontSize="sm"
												fontWeight={"500"}
												px="3"
												py="2"
												borderRadius={"0.75rem"}
											>
												IFIX
											</Text>
										</Flex>
									) : (
										<Flex alignItems="center" gap="4">
											<Text fontWeight={"500"} fontSize="sm" color="#FFFFFF">
												Mês
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
												Ano
											</Text>
											<Text fontWeight={"500"} fontSize="sm" color="#FFFFFF">
												Máximo
											</Text>
										</Flex>
									)}
								</Flex>
								<Example />
							</Flex>
						</Flex>
						<Flex flexDir={"column"} mb="6.5625rem">
							<Flex
								mb={isInvestor ? "0" : "2rem"}
								justifyContent={isInvestor ? "normal" : "space-between"}
								alignItems="start"
								w="100%"
							>
								<Flex>
									<Text
										mr={isInvestor ? "4.5rem" : "unset"}
										fontSize={"2xl"}
										fontWeight={"600"}
										color={"#171923"}
									>
										{isInvestor
											? "Distribuição total de investimentos"
											: "Cotas mais vendidas"}
									</Text>
								</Flex>
								<Flex display={isInvestor ? "flex" : "none"}>
									<MenuChart defaultSelection="Todos os imóveis" />
								</Flex>
								{!isInvestor && (
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
								)}
							</Flex>
							{isInvestor ? (
								<Flex alignItems={"center"} w="100%" h="15rem">
									<PieChartPortfolio />
									<Flex pl="5rem" gap="3.25rem">
										<Flex flexDir={"column"}>
											<Text fontWeight={"500"} fontSize="md" color="#171923">
												15%
											</Text>
											<Text fontWeight={"400"} fontSize="xs" color="#2D3748">
												Residencial
											</Text>
										</Flex>
										<Flex flexDir={"column"}>
											<Text fontWeight={"500"} fontSize="md" color="#171923">
												28%
											</Text>
											<Text fontWeight={"400"} fontSize="xs" color="#2D3748">
												Comercial
											</Text>
										</Flex>
										<Flex flexDir={"column"}>
											<Text fontWeight={"500"} fontSize="md" color="#171923">
												13%
											</Text>
											<Text fontWeight={"400"} fontSize="xs" color="#2D3748">
												Escritorios
											</Text>
										</Flex>
										<Flex flexDir={"column"}>
											<Text fontWeight={"500"} fontSize="md" color="#171923">
												44%
											</Text>
											<Text fontWeight={"400"} fontSize="xs" color="#2D3748">
												Tipo 4
											</Text>
										</Flex>
									</Flex>
								</Flex>
							) : (
								<Flex w="100%" h="25rem">
									<BarCharts />
								</Flex>
							)}
						</Flex>
						<Flex flexDir={"column"} mb="7.5rem">
							<Flex justifyContent={"space-between"} mb="2.1875rem">
								<Text fontSize={"2xl"} fontWeight={"600"} color={"#171923"}>
									{isInvestor ? "Seus investimentos" : "Cotas"}
								</Text>
								<Flex alignItems={"center"} gap="0.75rem">
									<MenuChart
										title="Empreendimentos"
										titleColor="#171923"
										defaultSelection="Todos"
									/>
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
												<Text>Imóvel</Text>
											</Flex>
											<Flex
												justifyContent="space-between"
												w="70%"
												alignItems="end"
											>
												<Text w="7rem">Cota</Text>
												<Text w="7rem">Total investido</Text>
												<Flex gap="0.375rem" alignItems="center" w="7rem">
													<Text>Vencimento</Text>
													<Img src="icons/InfoSquare.png" />
												</Flex>
												<Flex gap="0.375rem" alignItems="center" w="7rem">
													<Text w="6.375rem">Rentabilidade Esperada</Text>
													<Img src="icons/InfoSquare.png" />
												</Flex>
												<Flex gap="0.375rem" alignItems="center" w="7rem">
													<Text w="6.375rem">Valor Atual de Mercado</Text>
													<Img src="icons/InfoSquare.png" />
												</Flex>
											</Flex>
										</Flex>
									) : (
										<Flex w="100%" justifyContent="space-between">
											<Flex w="18rem" alignItems="end">
												<Text>Imóvel</Text>
											</Flex>
											<Flex
												w="70%"
												justifyContent="space-between"
												alignItems="end"
											>
												<Text w="7rem">Cota</Text>
												<Text w="7rem">Arrecadação</Text>
												<Text w="7rem">Cotas Emitidas</Text>
												<Text w="9rem">Cotas Disponiveis</Text>
											</Flex>
										</Flex>
									)}
								</Flex>
								<Flex flexDirection="column" gap="0.75rem">
									<ImovelList isInvest={false} isFinished={true} />
									<ImovelList isInvest={false} isFinished={false} />
								</Flex>
							</Flex>
						</Flex>
						<Flex flexDir={"column"} mb="2rem" w="100%">
							<Text fontSize={"2xl"} fontWeight={"600"} color={"#171923"}>
								{isInvestor
									? "Onde você tem investido"
									: "Empreendimentos cadastrados"}
							</Text>
							<Flex gap="1.5rem">
								{isInvestor && <Img w="100%" src="images/Map.png" />}
							</Flex>
						</Flex>
					</Flex>
					{!isInvestor && (
						<SimpleGrid
							columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
							spacing="1.5rem"
							w="fit-content"
							rowGap="2rem"
							mb="6.8125rem"
						>
							<OpportunitiesCard />
						</SimpleGrid>
					)}
				</Flex>
			) : (
				<NotInvestWarn />
			)}
		</DefaultTemplate>
	);
};
