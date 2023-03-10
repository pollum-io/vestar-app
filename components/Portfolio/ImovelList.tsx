import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IImovelList {
	isFinished: boolean;
	isInvest: boolean;
}

export const ImovelList: FunctionComponent<IImovelList> = ({
	isFinished,
	isInvest,
}) => {
	return (
		<Flex w="100%" id="table" flexDir={"column"}>
			<Flex
				id="header-table-container"
				w="100%"
				color={"#171923"}
				fontSize={"sm"}
				fontWeight="400"
				mb="1rem"
			>
				{isInvest ? (
					<Flex alignItems="end">
						<Text pr="24.5rem">Imóvel</Text>
						<Text pr="11.5rem">Cota</Text>
						<Text pr="7.5rem" w="6.375rem">
							Total investido
						</Text>
						<Text pr="8.5rem">Vencimento</Text>
						<Text pr="8.5rem">Investimento</Text>
						<Text mr="8rem" w="6.375rem">
							Rentabilidade Esperada
						</Text>
						<Text w="6.375rem">Valor Atual de Mercado</Text>
					</Flex>
				) : (
					<>
						<Text flex="2">Imóvel</Text>
						<Text flex="1">Cota</Text>
						<Text flex="1">Arrecadação</Text>
						<Text flex="1">Cotas Emitidas</Text>
						<Text flex="1">Cotas Disponiveis</Text>
					</>
				)}
			</Flex>
			<Flex
				id="body-table-container"
				alignItems={"center"}
				boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
				borderRadius="0.75rem"
				opacity={isFinished ? "0.5" : "1"}
			>
				<Flex alignItems={"center"} gap="4" flex="2">
					{isFinished ? (
						<Flex>
							<Flex
								bgColor={"rgba(0, 0, 0, 0.36);"}
								color={"#FFFFFF"}
								px="1.5"
								py="0.1rem"
								borderRadius="15rem"
								fontSize={"xs"}
								fontWeight={"500"}
								position={"absolute"}
								mt="5"
								ml="3"
							>
								Encerrado
							</Flex>
							<Img src="images/ImagePort.png" />
						</Flex>
					) : (
						<Img src="images/ImagePort.png" />
					)}

					<Flex flexDir={"column"}>
						<Text fontSize={"md"} fontWeight={"500"} color={"#171923"}>
							Crypto PLaza
						</Text>
						<Text fontSize={"xs"} fontWeight={"400"} color={"#2D3748"}>
							Residencial
						</Text>
					</Flex>
				</Flex>
				<Flex flex="1">
					{isInvest ? (
						<Flex flexDir={"column"}>
							<Text
								cursor={isFinished ? "default" : "pointer"}
								fontSize={"md"}
								fontWeight="500"
								color={"#007D99"}
							>
								cota_nome
							</Text>
							<Text fontSize={"xs"} fontWeight="400" color={"#2D3748"}>
								03 cotas
							</Text>
						</Flex>
					) : (
						<Flex>
							<Text
								cursor={isFinished ? "default" : "pointer"}
								fontSize={"md"}
								fontWeight="500"
								color={"#007D99"}
							>
								cota_nome
							</Text>
						</Flex>
					)}
				</Flex>
				<Flex flex="1">
					{isInvest ? (
						<Flex flexDir={"column"}>
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								R$ 450
							</Text>
							<Text fontSize={"xs"} fontWeight="400" color={"#171923"}>
								0,5 % do portfólio
							</Text>
						</Flex>
					) : (
						<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
							R$ 450
						</Text>
					)}
				</Flex>
				<Flex flex="1">
					<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
						150
					</Text>
				</Flex>
				<Flex flex="1">
					<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
						{isInvest ? "2025" : "47"}
					</Text>
				</Flex>
				{isInvest && (
					<>
						<Flex flex="1">
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								R$ 0,00
							</Text>
						</Flex>
						<Flex flex="1">
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								R$ 0,00
							</Text>
						</Flex>
					</>
				)}
			</Flex>
		</Flex>
	);
};
