import { Flex, Img, Text } from "@chakra-ui/react";
import { DefaultTemplate } from "../DefaultTemplate";
import {
	CompanieDetails,
	CompanieContact,
	OpportunitiesCards,
} from "../../components";
import { CompanieMembers } from "../../components";
import { useTranslation } from "react-i18next";

export const CompanieContainer = () => {
	const { t } = useTranslation();
	return (
		<DefaultTemplate>
			<Flex flexDirection="column" mt="6.25rem" mb="4.5rem">
				<Flex justifyContent="center" gap="2.75rem" px="5rem">
					<CompanieDetails
						logo="images/companiesCardLogo.png"
						name="Capital city"
						id="CNPJ: 00.000.000/0001-00"
						location="Campeche, Florianópolis - Santa Catarina"
					/>
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

				<Flex
					w="49.9375rem"
					h="6rem"
					bgColor="#FFFFFF"
					border="0.0625rem solid #E5E7EB"
					borderRadius="0rem 0.75rem 0.75rem 0rem"
					fontFamily="Poppins"
					pr="3.625rem"
					alignItems="center"
					justifyContent="end"
					gap="3.5rem"
					mt="4.25rem"
				>
					<Flex flexDirection="column" gap="0.25rem">
						<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
							{t("companieDetails.livnProp")}
						</Text>
						<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
							150
						</Text>
					</Flex>
					<Flex flexDirection="column" gap="0.25rem">
						<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
							{t("companieDetails.delivered")}
						</Text>
						<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
							3256
						</Text>
					</Flex>
					<Flex flexDirection="column" gap="0.25rem">
						<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
							{t("companieDetails.inProgress")}
						</Text>
						<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
							987
						</Text>
					</Flex>
					<Flex flexDirection="column" gap="0.25rem">
						<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
							{t("companieDetails.vgv")}
						</Text>
						<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
							Lorem ipsum
						</Text>
					</Flex>
				</Flex>
				<Flex
					gap="5.75rem"
					justifyContent="center"
					alignItems="end"
					mt="8.5rem"
					px="5rem"
				>
					<Flex
						flexDirection="column"
						fontFamily="Poppins"
						fontWeight="600"
						fontSize="1.5rem"
						lineHeight="2rem"
						color="#171923"
					>
						<Text>{t("companieDetails.whoBuilds")}</Text>

						<CompanieMembers />
						<Flex mt="8.5rem" flexDirection="column" gap="2rem">
							<Text>{t("companieDetails.learnAbout")}</Text>
							<Flex gap="2.75rem">
								<Flex
									boxShadow="0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
									borderRadius="0.75rem"
									_hover={{ cursor: "pointer" }}
								>
									<Img src="images/backgrounds/JusBrasil.png" />
								</Flex>
								<Flex
									boxShadow="0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
									borderRadius="0.75rem"
									_hover={{ cursor: "pointer" }}
								>
									<Img src="images/backgrounds/ReclameAqui.png" />
								</Flex>
							</Flex>
						</Flex>
					</Flex>

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
				<Flex mt="8.5rem" alignItems="center" flexDirection="column" gap="2rem">
					<Flex px="5rem" w="100%" justifyContent="center">
						<Text
							fontFamily="Poppins"
							fontWeight="600"
							fontSize="1.5rem"
							lineHeight="2rem"
							color="#171923"
							w="70rem"
						>
							{t("companieDetails.opportunities")}
						</Text>
					</Flex>
					<Flex px="1.5rem">
						<OpportunitiesCards />
					</Flex>
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
