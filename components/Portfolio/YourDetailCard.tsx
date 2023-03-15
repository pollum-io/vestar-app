import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

export const YourDetailtCard: FunctionComponent = () => {
	const [isInvestidor, setIsInvestidor] = useState(false);
	const [hasInvest, setHasInvest] = useState(false);

	return (
		<Flex
			w="100%"
			minWidth="30rem"
			zIndex="9"
			boxShadow="0px 20px 25px rgba(31, 41, 55, 0.1)"
			position={"absolute"}
			bgColor="#FFFFFF"
			top="2rem"
			px="1.5rem"
			py="1.5rem"
			borderRadius={"0.75rem"}
			justifyContent="space-between"
			alignItems={"end"}
		>
			<Flex
				w={isInvestidor ? "20%" : "max"}
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 0.5 : 1}
			>
				<Flex alignItems="center" gap="3">
					<Text fontWeight={"500"} fontSize="sm" color="#007D99">
						{isInvestidor ? "Empreendimentos Cadastrados" : "Patrimônio Atual"}
					</Text>
					<Img
						display={isInvestidor ? "none" : "flex"}
						w="3"
						h="3"
						src={"images/icons/info-square.png"}
					/>
				</Flex>
				<Text fontSize={"xl"} fontWeight="600" color="#171923">
					{isInvestidor ? "42" : "R$ 237.097,68"}
				</Text>
			</Flex>
			<Flex
				w="max"
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 0.5 : 1}
			>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{isInvestidor ? "Arrecadação" : "Resultado"}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={isInvestidor ? "#171923" : "#38A169"}
					textAlign={"left"}
				>
					{isInvestidor ? "R$ 2.584.256" : "+ R$ 3.256"}
				</Text>
			</Flex>
			<Flex
				w="max"
				flexDir={"column"}
				alignItems="flex-start"
				opacity={hasInvest ? 0.5 : 1}
			>
				<Text fontWeight={"500"} fontSize="sm" color="#007D99">
					{isInvestidor ? "Contas Negociadas" : "Rentabilidade"}
				</Text>
				<Text
					fontSize={"xl"}
					fontWeight="600"
					color={isInvestidor ? "#171923" : "#38A169"}
				>
					{isInvestidor ? "37%" : "+ 13,5 %"}
				</Text>
			</Flex>
		</Flex>
	);
};
