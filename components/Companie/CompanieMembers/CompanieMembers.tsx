import { Flex, Img, Text, SimpleGrid } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import { componentsApi } from "../../../services/api";
import { fetchImages } from "../../../services/fetchImages";
import { ICompaniesTeam } from "../../Companies/CompaniesCard/dto";
import { ICompanieMembers } from "./dto";

export const CompanieMember: FunctionComponent<ICompanieMembers> = ({
	image,
	name,
	occupation,
}) => {
	return (
		<Flex flexDirection="column" gap="0.5rem" alignItems="center">
			<Flex w="4rem" h="4rem">
				<Img src={`/api/file/${image}`} />
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

export const CompanieMembers: FunctionComponent<any> = ({
	image,
	name,
	occupation,
}) => {
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
			spacing={["unset", "unset", "unset", "4rem", "6.625rem"]}
			w="fit-content"
			rowGap="2.75rem"
			mt="2rem"
		>
			<CompanieMember image={image} name={name} occupation={occupation} />
		</SimpleGrid>
	);
};
