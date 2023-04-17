import { FunctionComponent, useState } from "react";
import {
	Collapse,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Slide,
	Text,
} from "@chakra-ui/react";
import { DefaultTemplate } from "../../container";
import { BiSearch } from "react-icons/bi";
import { CompaniesCard } from "../../components";
import { useTranslation } from "react-i18next";

interface ICompanies {
	data: any;
}

export const CompaniesContainer: FunctionComponent<ICompanies> = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const { t } = useTranslation();
	const filteredImoveis = data.filter((imovel: any) =>
		imovel.enterprise_name.toLowerCase().includes(searchTerm.toLowerCase())
	);

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
									_focus={{
										boxShadow: "none",
										border: "0.0625rem solid #CBD5E0",
									}}
									value={searchTerm}
									onChange={e => setSearchTerm(e.target.value)}
								/>
							</InputGroup>
						</Flex>
						<Text
							lineHeight="1.25rem"
							fontSize="0.875rem"
							alignItems="center"
							color="#718096"
						>
							{data?.length} {t("header.companies")}
						</Text>
					</Flex>
					<Flex flexDirection={"column"} gap="1.5rem" w="100%">
						{filteredImoveis.map((imoveis: any) => (
							// eslint-disable-next-line react/jsx-key
							<CompaniesCard
								key={imoveis._id}
								_id={imoveis._id}
								enterprise_name={imoveis.enterprise_name}
								enterprise_info={imoveis.enterprise_info}
								enterprise_logo={imoveis.enterprise_logo}
								opportunities_available={imoveis.opportunities_available}
								opportunities_closed={imoveis.opportunities_closed}
								enterprise_banner={imoveis.enterprise_banner}
							/>
						))}
					</Flex>
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
