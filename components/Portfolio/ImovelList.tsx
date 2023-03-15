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
				id="body-table-container"
				alignItems={"center"}
				boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
				borderRadius="0.75rem"
				opacity={isFinished ? "0.5" : "1"}
			>
				<Flex alignItems={"center"} gap="4" w="18rem">
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
				<Flex w="100%" alignItems="center" justifyContent="space-between">
					<Flex flex="1" w="5rem">
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
		</Flex>
	);
};
