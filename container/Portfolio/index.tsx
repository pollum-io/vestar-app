import { Flex, Img, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FunctionComponent, useState } from "react";
import { OpportunitiesCard } from "../../components";
import { ImovelList } from "../../components/Portfolio/ImovelList";
import { MenuChart } from "../../components/Portfolio/MenuChart";
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
	const [isInvestor, setIsInvestor] = useState(true);

	return (
		<DefaultTemplate>
			<Flex
				bgColor={"#1789A3"}
				alignItems="center"
				borderBottomRadius="0.75rem"
				px="5rem"
				pt="6.8125rem"
				pb="1.5rem"
			>
				<Flex flexDir={"column"} color="white">
					<Text fontWeight={"600"} fontSize="3xl">
						Olá, Pred!
					</Text>
					<Text fontSize={"sm"} fontWeight="400">
						Esse é o portfólio da Nome da Empresa de 28/nov/22
					</Text>
				</Flex>
			</Flex>
			<Flex>
				<YourDetailtCard />
			</Flex>
			<Flex px="5rem" mt="6.1875rem" flexDir={"column"} pb="8.5rem">
				<Text color="#171923" fontWeight={"600"} fontSize="2xl" mb="1.5rem">
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
									<MenuChart title="Investimentos" defaultSelection="Todos" />
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
			<Flex flexDir={"column"} pl="5rem" pr="3.5rem" mb="6.5625rem">
				<Flex
					mb={isInvestor ? "0" : "2rem"}
					justifyContent={isInvestor ? "normal" : "space-between"}
					alignItems="start"
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
					<Flex>
						<MenuChart defaultSelection="Todos os imóveis" />
					</Flex>
					{!isInvestor && (
						<Flex alignItems="center" gap="10">
							<Flex alignItems={"center"} gap="3">
								<Text fontWeight={"500"} fontSize="sm" color="#718096">
									Mês
								</Text>
								<Text
									px="3"
									py="2"
									borderRadius="0.9375rem"
									bgColor={"#B1D8DF"}
									color={"#00262D"}
									fontWeight={"500"}
									fontSize="sm"
								>
									Ano
								</Text>
								<Text fontWeight={"500"} fontSize="sm" color="#718096">
									Máximo
								</Text>
							</Flex>
							<Flex>
								<RadioGroup onChange={setValue} value={value}>
									<Stack direction="row" color={"#171923"}>
										<Radio
											colorScheme="cyan"
											value="1"
											fontWeight={"500"}
											fontSize="sm"
										>
											Unidades
										</Radio>
										<Radio value="2" fontWeight={"500"} fontSize="sm">
											Porcentagens
										</Radio>
									</Stack>
								</RadioGroup>
							</Flex>
						</Flex>
					)}
				</Flex>
				{isInvestor ? (
					<Flex alignItems={"center"} w="77rem" h="15rem">
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
					<Flex w="77rem" h="25rem">
						<BarCharts />
					</Flex>
				)}
			</Flex>
			<Flex flexDir={"column"} pl="5rem" pr="3.5rem" mb="7.5rem">
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
					<ImovelList isInvest={true} isFinished={false} />
				</Flex>
			</Flex>
			<Flex flexDir={"column"} mb="7.5rem">
				<Text
					pl="5rem"
					pr="3.5rem"
					mb="2rem"
					fontSize={"2xl"}
					fontWeight={"600"}
					color={"#171923"}
				>
					{isInvestor
						? "Onde você tem investido"
						: "Empreendimentos cadastrados"}
				</Text>
				<Flex
					px={isInvestor ? "5rem" : "1.5rem"}
					gap="1.5rem"
					flexWrap={"wrap"}
				>
					{isInvestor ? (
						<Img w="100%" src="images/Map.png" />
					) : (
						<>
							<OpportunitiesCard
								time="Encerrado"
								name="Nome do Empreendimento"
								location="Campeche, Florianópolis"
								type="Comercial"
								finished={false}
								isPortfolio={true}
							/>
							<OpportunitiesCard
								time="Disponivel"
								name="Nome do Empreendimento"
								location="Campeche, Florianópolis"
								type="Comercial"
								finished={false}
								isPortfolio={true}
							/>
							<OpportunitiesCard
								time="Disponivel"
								name="Nome do Empreendimento"
								location="Campeche, Florianópolis"
								type="Comercial"
								finished={false}
								isPortfolio={true}
							/>
							<OpportunitiesCard
								time="Disponivel"
								name="Nome do Empreendimento"
								location="Campeche, Florianópolis"
								type="Comercial"
								finished={false}
								isPortfolio={true}
							/>
							<OpportunitiesCard
								time="Disponivel"
								name="Nome do Empreendimento"
								location="Campeche, Florianópolis"
								type="Comercial"
								finished={false}
								isPortfolio={true}
							/>
							<OpportunitiesCard
								time="Disponivel"
								name="Nome do Empreendimento"
								location="Campeche, Florianópolis"
								type="Comercial"
								finished={false}
								isPortfolio={true}
							/>
						</>
					)}
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
