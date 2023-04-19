import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Flex, Img, Text, SimpleGrid } from "@chakra-ui/react";
import { IOpportunitiesCard } from "./dto";
import { useRouter } from "next/router";
import { FiMapPin } from "react-icons/fi";
import { fetchOpportunity } from "../../../services/fetchOpportunity";
import { useQuery as query } from "react-query";
import { formatDate } from "../../../utils/formatDate";
import { fetchOpportunitiesByCompany } from "../../../services/fetchOpportunitiesByCompany";

interface IOpportunitiesCompaniesCard {
	enterpriseId?: any;
	enterpriseData?: any;
	isPortfolio?: boolean;
}

export const OpportunitiesCard: FunctionComponent<
	IOpportunitiesCompaniesCard
> = ({ enterpriseId, enterpriseData, isPortfolio }) => {
	const currentTime = new Date().getTime();
	const router = useRouter();
	//TODO: move this request to a lower component level

	const { data: cardsInfo } = query(
		["oportunity", router.query],
		() =>
			enterpriseId
				? fetchOpportunitiesByCompany(router.query)
				: fetchOpportunity(router.query),
		{
			refetchOnWindowFocus: false,
			refetchInterval: false,
		}
	);
	return (
		<>
			{(isPortfolio ? enterpriseData : cardsInfo?.data)?.map(
				(cards: IOpportunitiesCard) => (
					<Flex
						key={cards._id}
						w="18.125rem"
						h="24.5625rem"
						background="#FFFFFF"
						boxShadow="0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.05)"
						borderRadius="0.75rem"
						flexDirection="column"
						_hover={{
							cursor: "pointer",
							boxShadow:
								"0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
						}}
						transition="150ms"
						onClick={() =>
							router.push({
								pathname: `/oportunidades/${cards._id}`,
								query: { id: cards._id },
							})
						}
					>
						<Flex
							w="18.125rem"
							h="12.75rem"
							borderRadius="0.75rem"
							justifyContent="end"
						>
							<Img
								src={`/api/file/${cards.pictures_enterprise[0]}`}
								borderRadius="0.75rem"
								// filter={
								// 	cards.token_minted === cards.token_supply ||
								// 	currentTime > cards?.sale_end_at * 1000
								// 		? "blur(3px)"
								// 		: "none"
								// }
							/>
							<Flex position="absolute" pt="0.625rem" pr="0.75rem">
								<Flex
									justifyContent="center"
									alignItems="center"
									w="max-content"
									h="1.25rem"
									background="rgba(0, 0, 0, 0.36)"
									borderRadius="2.6875rem"
									px="0.5rem"
									py="0.125rem"
								>
									{cards.token_minted === cards.token_supply ||
									currentTime > cards?.sale_end_at * 1000 ? (
										<Text
											fontFamily="Poppins"
											fontWeight="500"
											fontSize="0.75rem"
											lineHeight="1rem"
											color="#FFFFFF"
										>
											Encerrado
										</Text>
									) : (
										<Text
											fontFamily="Poppins"
											fontWeight="500"
											fontSize="0.75rem"
											lineHeight="1rem"
											color="#FFFFFF"
										>
											Disponivel
										</Text>
									)}
								</Flex>
							</Flex>
						</Flex>
						<Flex mt="1rem" px="1rem" flexDirection="column" pb="0.9375rem">
							<Flex gap="0.3125rem" flexDirection="column">
								<Flex gap="0.5rem" alignItems="center" filter={"none"}>
									{!cards.isPortfolio && (
										<Img
											w={4}
											h={4}
											src={`/api/file/${cards.enterprise_logo}`}
										/>
									)}
									<Text
										fontFamily="Poppins"
										fontWeight="500"
										fontSize="1rem"
										lineHeight="1.5rem"
										color="#171923"
									>
										{cards.name}
									</Text>
								</Flex>
								<Flex gap="0.5rem">
									<FiMapPin color="#718096" />
									<Text
										fontFamily="Poppins"
										fontSize="0.75rem"
										lineHeight="1rem"
										alignItems="center"
										color="#718096"
									>
										{`${cards.address.neighborhood}, ${cards.address.state}`}
									</Text>
								</Flex>
								<Flex alignItems="center" color="#2D3748">
									<Text
										fontFamily="Poppins"
										fontSize="0.75rem"
										lineHeight="1rem"
										color="#2D3748"
									>
										{cards.enterprise_type}
									</Text>
								</Flex>
							</Flex>
							{cards.isPortfolio ? (
								<Button
									justifyContent="center"
									mt="1rem"
									alignItems="center"
									w="16.125rem"
									h="1.5rem"
									border="0.0625rem solid #007D99"
									borderRadius="0.375rem"
									fontFamily="Poppins"
									fontWeight="500"
									fontSize="0.75rem"
									lineHeight="1rem"
									color="#007D99"
									_hover={{ bgColor: "#EDF2F7" }}
									opacity={"1"}
									cursor={"pointer"}
								>
									Atualizar andamento da obra
								</Button>
							) : (
								<Flex flexDirection="column" gap="1rem" mt="1.5rem">
									<Flex
										alignItems="center"
										justifyContent="space-between"
										w="100%"
										filter={"none"}
									>
										<Flex flexDirection="column" alignItems="left">
											<Text
												fontSize="0.75rem"
												lineHeight="1rem"
												color="#718096"
											>
												Investimento Mín.
											</Text>
											<Flex gap="0.25rem" fontFamily="Poppins">
												<Text
													fontSize="0.75rem"
													lineHeight="1rem"
													color="#718096"
												>
													R$
												</Text>
												<Text
													mt="0.0625rem"
													fontSize="1rem"
													lineHeight="1.5rem"
													color="#171923"
												>
													{cards.min_investment}
												</Text>
											</Flex>
										</Flex>
										<Flex
											flexDirection="column"
											alignItems="left"
											fontFamily="Poppins"
										>
											<Text
												fontSize="0.75rem"
												lineHeight="1rem"
												color="#718096"
											>
												Prev. Conclusão
											</Text>
											<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
												{formatDate(cards.expected_delivery_date)}
											</Text>
										</Flex>
									</Flex>
									{!cards.blocked ? (
										<Flex
											justifyContent="center"
											alignItems="center"
											w="100%"
											background="#E4F2F3"
											borderRadius="2.6875rem"
											py="0.125rem"
										>
											<Text
												fontFamily="Poppins"
												fontWeight="500"
												fontSize="0.75rem"
												lineHeight="1rem"
												color="#00576B"
											>
												{`Rentabilidade Esperada: ${cards.profitability}% a.a (máx)`}
											</Text>
										</Flex>
									) : (
										<Button
											justifyContent="center"
											alignItems="center"
											w="16.125rem"
											h="1.5rem"
											border="0.0625rem solid #007D99"
											borderRadius="0.375rem"
											fontFamily="Poppins"
											fontWeight="500"
											fontSize="0.75rem"
											lineHeight="1rem"
											color="#007D99"
											bgColor="#ffffff"
											_hover={{ bgColor: "#EDF2F7" }}
										>
											{cards.finished
												? "Solicitar Acesso"
												: "Solicitar Acesso a essa Oferta"}
										</Button>
									)}
								</Flex>
							)}
						</Flex>
					</Flex>
				)
			)}
		</>
	);
};

export const OpportunitiesCards: FunctionComponent<any> = ({
	enterpriseId,
	enterpriseData,
	isPortfolio,
}) => {
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing="1.5rem"
			w="fit-content"
			rowGap="2rem"
		>
			<OpportunitiesCard
				enterpriseId={enterpriseId}
				enterpriseData={enterpriseData}
				isPortfolio={isPortfolio}
			/>
		</SimpleGrid>
	);
};
