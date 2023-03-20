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
		<Flex
			id="body-table-container"
			alignItems={"center"}
			borderRadius="0.75rem"
			opacity={isFinished ? "0.5" : "1"}
			w="100%"
			justifyContent="space-between"
			border="1px solid #EDF2F7"
			_hover={{
				cursor: "pointer",
				boxShadow:
					"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
				border: "1px solid transparent",
			}}
			transition="150ms"
		>
			<Flex alignItems={"center"} w="18rem" gap="1rem">
				{isFinished ? (
					<Flex
						w="6rem"
						h="4.25rem"
						borderRadius="0.75rem 0rem 0rem 0.75rem"
						alignItems="center"
						justifyContent="center"
					>
						<Img src="images/ImagePort.png" w="100%" h="100%" />
						<Flex
							bgColor={"rgba(0, 0, 0, 0.36)"}
							color={"#FFFFFF"}
							px="1.5"
							py="0.1rem"
							borderRadius="15rem"
							fontSize={"xs"}
							fontWeight={"500"}
							position={"absolute"}
						>
							Encerrado
						</Flex>
					</Flex>
				) : (
					<Flex w="6rem" h="4.25rem" borderRadius="0.75rem 0rem 0rem 0.75rem">
						<Img src="images/ImagePort.png" w="100%" h="100%" />
					</Flex>
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
			<Flex w="70%" alignItems="center" justifyContent="space-between">
				<Flex>
					{isInvest ? (
						<Flex flexDir={"column"} w="7rem">
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
						<Flex w="7rem">
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
				<Flex>
					{isInvest ? (
						<Flex flexDir={"column"} w="7rem">
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								R$ 450
							</Text>
							<Text fontSize={"xs"} fontWeight="400" color={"#171923"}>
								0,5 % do portfólio
							</Text>
						</Flex>
					) : (
						<Text fontSize={"md"} fontWeight="400" color={"#171923"} w="7rem">
							R$ 450
						</Text>
					)}
				</Flex>
				<Flex display={isInvest ? "none" : "flex"} w="7rem">
					<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
						150
					</Text>
				</Flex>
				<Flex w={isInvest ? "7rem" : "9rem"}>
					<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
						{isInvest ? "2025" : "47"}
					</Text>
				</Flex>
				{isInvest && (
					<>
						<Flex w="7rem">
							<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
								R$ 0,00
							</Text>
						</Flex>
						<Flex w="7rem">
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
