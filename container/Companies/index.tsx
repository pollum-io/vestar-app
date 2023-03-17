import { FunctionComponent } from "react";
import {
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import { DefaultTemplate } from "../../container";
import { BiSearch } from "react-icons/bi";
import { CompaniesCards } from "../../components";
import { useTranslation } from "react-i18next";

export const CompaniesContainer: FunctionComponent = () => {
	const { t } = useTranslation();

	return (
		<DefaultTemplate>
			<Flex
				flexDirection="column"
				bgColor="#ffffff"
				pt="6.25rem"
				pb="8.5rem"
				alignItems="center"
			>
				<Flex flexDirection="column" w="44.125rem" gap="2.75rem">
					<Flex flexDirection="column" gap="0.25rem" fontFamily="Poppins">
						<Flex justifyContent="space-between" alignItems="center" w="100%">
							<Text
								fontFamily="Poppins"
								fontWeight="600"
								fontSize="1.875rem"
								lineHeight="2.25rem"
								color="#171923"
							>
								{t("companies.partners")}
							</Text>
							<InputGroup w="max-content">
								<InputLeftElement
									pointerEvents="none"
									alignItems="center"
									justifyContent="center"
									h="2rem"
								>
									<BiSearch color="#A0AEC0" size={20} />
								</InputLeftElement>
								<Input
									w="14.5625rem"
									border="0.0625rem solid #CBD5E0"
									borderRadius="4.1875rem"
									placeholder="Procurar empresa"
									color="#171923"
									_placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
									fontFamily="Poppins"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									h="2rem"
									_hover={{}}
								/>
							</InputGroup>
						</Flex>
						<Text
							lineHeight="1.25rem"
							fontSize="0.875rem"
							alignItems="center"
							color="#718096"
						>
							274 {t("companies.companie")}
						</Text>
					</Flex>
					<Flex>
						<CompaniesCards />
					</Flex>
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
