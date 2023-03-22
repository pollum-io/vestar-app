import { Button, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useMemo, useState } from "react";
import { useRegister } from "../../hooks";
import { useRouter } from "next/router";
import { useOpportunities } from "../../hooks/useOpportunities";
interface IPriceCard {
	id: any;
	price: number;
	minted: number;
	supply: number;
	address: string;
	oportunitiesAddress: string;
	investor_id?: string;
	enterprise_id?: string;
}

export const PriceCard: React.FC<IPriceCard> = props => {
	const {
		id,
		price,
		minted,
		supply,
		address,
		oportunitiesAddress,
		investor_id,
		enterprise_id,
	} = props;
	const [isInvestidor, setIsInvestidor] = useState(investor_id ? true : false);
	const { ended, hasToken } = useOpportunities();
	const { push } = useRouter();
	const [cotas, setCotas] = useState<number>(0);

	const avalible = useMemo(() => {
		if (supply > minted) {
			return supply - minted;
		} else {
			return minted - supply;
		}
	}, [minted, supply]);

	const formatter = new Intl.NumberFormat("pt-br", {
		style: "currency",
		currency: "BRL",
	});

	return (
		<Flex
			w="23.125rem"
			h={"max"}
			bgColor={"#007D99"}
			p="1.5rem"
			flexDir={"column"}
			borderRadius="0.75rem"
			position={"sticky"}
			top={"10%"}
			boxShadow="0px 20px 25px rgba(31, 41, 55, 0.1), 0px 10px 10px rgba(31, 41, 55, 0.04);"
			color="#ffffff"
		>
			<Text fontSize={"xl"} fontWeight="500">
				Nome da Cota
			</Text>
			{isInvestidor ? (
				<Flex flexDirection="column">
					<Flex
						my="1rem"
						bgColor={"#1789A3"}
						py="0.5rem"
						px="1rem"
						borderRadius="0.5rem"
						justifyContent={"space-between"}
						alignItems="center"
						display={ended ? "none" : "flex"}
					>
						<Flex flexDir={"column"}>
							<Text fontSize={"xs"} fontWeight="500">
								Selecione a Quantidade
							</Text>
							<Text fontSize={"sm"} fontWeight="400">
								{cotas} cota
							</Text>
						</Flex>

						<Flex gap="0.3125rem">
							<Img
								_hover={{
									cursor: "pointer",
									opacity: 0.5,
									transition: "all 0.4s",
								}}
								src={"/icons/PlusIcon.png"}
								onClick={() => setCotas(cotas === avalible ? cotas : cotas + 1)}
							/>
							<Img
								_hover={{
									cursor: "pointer",
									opacity: 0.5,
									transition: "all 0.4s",
								}}
								src={"/icons/MinusIcon.png"}
								onClick={() => setCotas(cotas === 0 ? 0 : cotas - 1)}
							/>
						</Flex>
					</Flex>
					<Flex
						flexDirection={"column"}
						pb="1rem"
						mb="1rem"
						mt={ended ? "1rem" : "none"}
						borderBottom="1px solid #4BA3B7"
					>
						<Flex justifyContent={"space-between"} w="100%">
							<Text fontWeight={ended ? "400" : "500"}>
								{ended
									? hasToken
										? "Você investiu em 12 tokens desta oportunidade. Acompanhe seus rendimentos no portfólio."
										: "Você não comprou cotas desta oportunidade. "
									: "Total"}
							</Text>
							<Text fontWeight={"500"} display={ended ? "none" : "flex"}>
								{formatter.format(cotas * price)}
							</Text>
						</Flex>

						<Flex flexDir={"column"} alignItems="center" mt="1rem">
							<Button
								fontWeight={"500"}
								fontSize={"md"}
								bgColor="#FFFFFF"
								color="#007088"
								w="100%"
								px="0.625rem"
								py="1rem"
								mb={ended ? "none" : "1rem"}
								isDisabled={ended && !hasToken}
								_hover={
									ended && !hasToken
										? { opacity: "0.3" }
										: { bgColor: "#F7FAFC" }
								}
								onClick={() =>
									push({
										pathname: "/investir",
										query: { id, cotas, oportunitiesAddress },
									})
								}
							>
								{ended
									? hasToken
										? "Ver tokens adquiridos"
										: "Vendas encerradas"
									: "Quero investir"}
							</Button>
							<Text
								fontWeight={"400"}
								fontSize={"xs"}
								display={ended ? "none" : "flex"}
							>
								Você ainda não será cobrado.
							</Text>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Flex
					fontFamily="Poppins"
					fontStyle="normal"
					fontWeight="500"
					fontSize="1rem"
					lineHeight="1.5rem"
					alignItems="center"
					color="#FFFFFF"
					w="100%"
					mt="1rem"
					flexDirection="column"
				>
					<Flex justifyContent="space-between" w="100%">
						<Text>Preço unitário</Text>
						<Text>{price}</Text>
					</Flex>
					<Flex w="100%" border="1px solid #4BA3B7" my="1rem" />
				</Flex>
			)}
			<Flex flexDir={"column"} gap="0.5rem">
				<Flex justifyContent={"space-between"}>
					<Text fontSize={"md"} fontWeight="400">
						Endereço da cota
					</Text>
					<Flex alignItems={"center"} gap="0.5rem">
						<Text fontSize={"md"} fontWeight="400">
							{`${address.slice(0, 5)}...${address.slice(38)}`}
						</Text>
						<Icon
							color={"#4BA3B7"}
							w={4}
							h={4}
							as={FiCopy}
							_hover={{ cursor: "pointer" }}
						/>
					</Flex>
				</Flex>
				<Flex
					justifyContent={"space-between"}
					display={isInvestidor ? "flex" : "none"}
				>
					<Text fontSize={"md"} fontWeight="400">
						Preço unitário
					</Text>
					<Text fontSize={"md"} fontWeight="400">
						R${price}
					</Text>
				</Flex>
				<Flex justifyContent={"space-between"}>
					<Text fontSize={"md"} fontWeight="400">
						Cotas emitidas
					</Text>
					<Text fontSize={"md"} fontWeight="400">
						{minted}
					</Text>
				</Flex>
				<Flex justifyContent={"space-between"}>
					<Text fontSize={"md"} fontWeight="400">
						Cotas disponíveis
					</Text>
					<Text fontSize={"md"} fontWeight="400">
						{avalible}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
