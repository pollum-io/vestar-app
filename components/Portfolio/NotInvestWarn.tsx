import { Button, Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

export const NotInvestWarn: FunctionComponent = () => {
	return (
		<Flex
			flexDirection={"column"}
			justifyContent="center"
			alignItems="center"
			w="100%"
			mb="11.25rem"
			mt="6.1875rem"
		>
			<Text mb="1rem" color="#171923" fontSize={"2xl"} fontWeight={600}>
				Você ainda não fez nenhum investimento.
			</Text>
			<Text
				mb="2rem"
				color="#171923"
				fontWeight={500}
				w="39.3125rem"
				fontSize="1rem"
				alignItems="center"
				textAlign="center"
			>
				Assim que realizar a compra de cotas, você poderá ver todos os dados,
				gráficos e resumos de investimentos com filtros inteligentes nesta
				página.{" "}
			</Text>
			<Button
				fontWeight={500}
				bgColor={"#1789A3"}
				px="55px"
				_hover={{ opacity: 0.9 }}
				color="#ffffff"
			>
				Ir para a página de Oportunidades
			</Button>
		</Flex>
	);
};
