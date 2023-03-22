import { Flex, Img, Text } from "@chakra-ui/react";
import { DefaultTemplate } from "../DefaultTemplate";
import {
	CompanieDetails,
	CompanieContact,
	OpportunitiesCards,
} from "../../components";
import { CompanieMembers } from "../../components";

export const CompanieContainer = () => {
	return (
		<DefaultTemplate>
			<Flex flexDirection="column" gap="2rem" mt="6.25rem" mb="4.5rem">
				<Flex
					flexDirection="column"
					w="100%"
					px="5rem"
					justifyContent="center"
					alignItems="center"
				>
					<Flex w="100%" maxWidth="70rem">
						<Flex justifyContent="space-between" gap="2.75rem">
							<Flex flexDirection="column">
								<Flex>
									<CompanieDetails
										logo="images/companiesCardLogo.png"
										name="Capital city"
										id="CNPJ: 00.000.000/0001-00"
										location="Campeche, Florianópolis - Santa Catarina"
									/>
								</Flex>
								<Flex h={["unset", "unset", "unset", "24rem", "10rem"]}>
									<Flex
										w={[
											"max-content",
											"max-content",
											"max-content",
											"max-content",
											"49.9375rem",
										]}
										h="max-content"
										py="1.5rem"
										flexDirection={["unset", "unset", "unset", "column", "row"]}
										bgColor="#FFFFFF"
										border="0.0625rem solid #E5E7EB"
										borderRadius="0rem 0.75rem 0.75rem 0rem"
										fontFamily="Poppins"
										pr={["unset", "unset", "unset", "6rem", "3.625rem"]}
										alignItems={["unset", "unset", "unset", "unset", "center"]}
										justifyContent="end"
										gap={["unset", "unset", "unset", "1.5rem", "3.5rem"]}
										mt="4.25rem"
										position="absolute"
										left="0"
										pl={["unset", "unset", "unset", "5rem", "unset"]}
									>
										<Flex flexDirection="column" gap="0.25rem">
											<Text
												fontSize="0.875rem"
												lineHeight="1.25rem"
												color="#007D99"
											>
												Empreendimentos LIVN
											</Text>
											<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
												150
											</Text>
										</Flex>
										<Flex flexDirection="column" gap="0.25rem">
											<Text
												fontSize="0.875rem"
												lineHeight="1.25rem"
												color="#007D99"
											>
												Obras entregues
											</Text>
											<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
												3256
											</Text>
										</Flex>
										<Flex flexDirection="column" gap="0.25rem">
											<Text
												fontSize="0.875rem"
												lineHeight="1.25rem"
												color="#007D99"
											>
												Em andamento
											</Text>
											<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
												987
											</Text>
										</Flex>
										<Flex flexDirection="column" gap="0.25rem">
											<Text
												fontSize="0.875rem"
												lineHeight="1.25rem"
												color="#007D99"
											>
												VGV Total
											</Text>
											<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
												Lorem ipsum
											</Text>
										</Flex>
									</Flex>
								</Flex>
								<Flex gap="5.75rem" mt="8.5rem">
									<Flex
										flexDirection="column"
										fontFamily="Poppins"
										fontWeight="600"
										fontSize="1.5rem"
										lineHeight="2rem"
										color="#171923"
									>
										<Text>Quem constrói nossa história</Text>

										<CompanieMembers />
										<Flex mt="8.5rem" flexDirection="column" gap="2rem">
											<Text>Saiba mais sobre a empresa</Text>
											<Flex gap="2.75rem">
												<Flex
													boxShadow="0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
													borderRadius="0.75rem"
													_hover={{
														cursor: "pointer",
														boxShadow:
															"0rem 0.345rem 0.675rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)",
													}}
													transition="150ms"
												>
													<Img src="images/backgrounds/JusBrasil.png" />
												</Flex>
												<Flex
													boxShadow="0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
													borderRadius="0.75rem"
													_hover={{
														cursor: "pointer",
														boxShadow:
															"0rem 0.345rem 0.675rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)",
													}}
													transition="150ms"
												>
													<Img src="images/backgrounds/ReclameAqui.png" />
												</Flex>
											</Flex>
										</Flex>
									</Flex>
								</Flex>
							</Flex>
							<Flex>
								<Flex h="100%">
									<CompanieContact
										website="www.capitalcity.com.br"
										whats="(48) 3333 - 3333"
										phone="(48) 3333 - 3333"
										email="contato@capitalcity.com.br"
										instagram="@capitalcityoficial"
										twitter="@capital.city"
										telegram="@capitalcity"
										facebook="@capital_city"
									/>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex
						mt="8.5rem"
						alignItems="center"
						flexDirection="column"
						gap="2rem"
						w="100%"
						maxWidth="70rem"
					>
						<Text
							fontFamily="Poppins"
							fontWeight="600"
							fontSize="1.5rem"
							lineHeight="2rem"
							color="#171923"
							w="100%"
						>
							Oportunidades
						</Text>
					</Flex>
				</Flex>
				<Flex px="1.5rem" w="100%" justifyContent="center">
					<OpportunitiesCards />
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
