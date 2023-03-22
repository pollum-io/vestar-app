import { Flex, Img, Text, SimpleGrid } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { ICompanieMembers } from "./dto";

export const CompanieMember: FunctionComponent<ICompanieMembers> = ({
	image,
	name,
	occupation,
}) => {
	return (
		<Flex flexDirection="column" gap="0.5rem" alignItems="center">
			<Flex w="4rem" h="4rem">
				<Img src="images/CompanieMemberImage.png" />
			</Flex>
			<Flex
				fontFamily="Poppins"
				fontSize="0.875rem"
				lineHeight="1.25rem"
				alignItems="center"
				color="#171923"
				gap="0.25rem"
				flexDirection="column"
			>
				<Text>{name}</Text>
				<Text fontWeight="400">{occupation}</Text>
			</Flex>
		</Flex>
	);
};

export const CompanieMembers: FunctionComponent = () => {
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
			spacing="6.625rem"
			w="fit-content"
			rowGap="2.75rem"
			mt="2rem"
		>
			<CompanieMember name="Celso Filho" occupation="Sócio Fundador" />
			<CompanieMember name="Antônio da Silva" occupation="Vice Presidente" />
			<CompanieMember name="Antônio M. Neto" occupation="Diretor Geral" />
			<CompanieMember name="João C. Marques" occupation="Diretor Financeiro" />
			<CompanieMember
				name="Henrique B. de Souza"
				occupation="Gerente de Vendas"
			/>
		</SimpleGrid>
	);
};
