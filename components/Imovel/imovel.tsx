import { FunctionComponent, useCallback, useState } from "react";
import { Flex, Img, Text, Icon } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import { Collections } from "./Collections";
import { PriceCard } from "./PriceCard";
import { Carousel } from "./Carousel";
import { TbInfoSquare } from "react-icons/tb";
import { Maps } from "../Map/Maps";
import { formatDate } from "../../utils/formatDate";
import { useEffect } from "react";
import { useRegister } from "../../hooks";
import { IOpportunitiesCard } from "../../dtos/Oportunities";
import { useOpportunities } from "../../hooks/useOpportunities";
import moment from "moment-timezone";
import Countdown from "react-countdown";
import { CountdownRenderProps } from "react-countdown/dist/Countdown";
import { useTransactions } from "../../hooks/useTransactions";
import { useWallet } from "../../hooks/useWallet";
interface IImovelProps {
	imovelDetails: IOpportunitiesCard;
}

export const ImovelDetail: FunctionComponent<IImovelProps> = ({
	imovelDetails,
}) => {
	const { hasToken } = useOpportunities();
	const [dateEndend, setDateEnded] = useState<any>();
	const [ended, setEnded] = useState<any>();
	const [cota, setCota] = useState<number>();
	const { account } = useWallet();
	const { shares } = useTransactions();

	const renderer = ({
		days,
		hours,
		minutes,
		completed,
		props: { date },
	}: CountdownRenderProps) => {
		const dateFormated = moment(date).format("DD/MM/YYYY");

		if (completed) {
			setEnded(true);
			setDateEnded(dateFormated);
			return;
		} else {
			setEnded(false);
			return (
				<Text fontWeight="500" fontSize="1.25rem" lineHeight="2rem" id="timer">
					{days} dias {hours} horas {minutes} min
				</Text>
			);
		}
	};

	useEffect(
		() => {
			const getCotas = async () => {
				if (imovelDetails.token_address && account) {
					const valorDeCotas = await shares(
						imovelDetails.token_address,
						account
					);
					setCota(Number(valorDeCotas));
				}
			};
			getCotas();
		},
		// eslint-disable-next-line
		[imovelDetails.token_address, account]
	);
	return (
		<Flex flexDir={"column"}>
			<Flex px="5rem" flexDir={"column"} alignItems="center">
				<Collections images={imovelDetails?.pictures_enterprise as any[]} />
				<Flex gap="2.75rem" maxWidth="70rem">
					<Flex flexDir={"column"}>
						<Flex gap="0.5rem" pb="0.5rem">
							<Img src="images/backgrounds/avatar.png" />
							<Text fontWeight={"400"} color="#171923">
								Nome da Empresa Responsável
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="1.5rem" pb="1rem">
							<Text fontSize="4xl" fontWeight={"600"} color="#171923">
								{imovelDetails?.name}
							</Text>
							<Text
								fontSize={"sm"}
								fontWeight="400"
								color="#171923"
								bgColor="#F0E8FF"
								py="0.25rem"
								px="1rem"
								borderRadius={"4.875rem"}
							>
								{imovelDetails?.enterprise_type}
							</Text>
							{/* TODO: FALTA */}
							<Flex
								bgColor="#F0E8FF"
								py="0.25rem"
								px="1rem"
								borderRadius={"4.875rem"}
								fontSize={"sm"}
								color="#171923"
								gap="0.25rem"
								display={!hasToken ? "flex" : "none"}
								w="max"
							>
								<Text w="max" fontWeight="400">
									Você possui
								</Text>
								<Text w="max" fontWeight="600">
									{cota} cotas
								</Text>
							</Flex>
						</Flex>
						<Flex gap="0.625rem" pb="1.5rem">
							<Icon w="1.25rem" h="1.5rem" color={"#718096"} as={FiMapPin} />
							<Text color={"#718096"}>
								{`${imovelDetails?.address?.street}, ${imovelDetails?.address?.neighborhood}`}
							</Text>
						</Flex>
						<Flex flexDir={"column"} pb="3rem">
							<Flex gap="4.25rem" pb="2rem">
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Investimento Mín.
									</Text>
									<Flex gap="0.25rem">
										<Text fontSize={"xs"} color="#718096">
											R$
										</Text>
										<Text color="#000000">{`${imovelDetails?.min_investment}$`}</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Início da Obra
									</Text>
									<Flex gap="0.25rem">
										<Text color="#000000">
											{formatDate(imovelDetails?.init_date)}
										</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Prev. Conclusão
									</Text>
									<Flex gap="0.25rem">
										<Text color="#000000">
											{formatDate(imovelDetails?.expected_delivery_date)}
										</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Rentabilidade Esperada
									</Text>
									<Flex gap="0.25rem" alignItems="center">
										<Text color="#000000">
											{imovelDetails?.profitability}% ao ano
										</Text>
										<Icon as={TbInfoSquare} color={"#A0AEC0"} w={5} h={5} />
									</Flex>
								</Flex>
							</Flex>
							{/* TODO: FALTA */}
							<Flex gap="5.25rem">
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Preço Inicial m²
									</Text>
									<Flex gap="0.25rem">
										<Text fontSize={"xs"} color="#718096">
											R$
										</Text>
										<Text color="#000000">12.800,00</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Preço Final m²
									</Text>
									<Flex gap="0.25rem">
										<Text fontSize={"xs"} color="#718096">
											R$
										</Text>
										<Text color="#000000">16.800,00</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						<Flex flexDir={"column"} gap="5" w="100%">
							<Text color={"#171923"}>{imovelDetails?.description}</Text>
						</Flex>
						<Flex mt="4rem" flexDir={"column"}>
							<Text
								mb="2rem"
								fontWeight={"600"}
								fontSize="2xl"
								color={"#171923"}
							>
								O que este empreendimento oferece
							</Text>
							<Flex gap="8rem">
								<Flex
									flexDir={"column"}
									maxH={"10rem"}
									flexWrap={"wrap"}
									color={"#171923"}
								>
									{imovelDetails?.general_info?.map((infos: string, idx) => (
										<Text key={idx} pr="3">
											&bull; {infos}
										</Text>
									))}
								</Flex>
							</Flex>
							<Text
								mt="2.375rem"
								fontSize={"sm"}
								fontWeight={"500"}
								color={"#007D99"}
								_hover={{ cursor: "pointer" }}
								w="max-content"
							>
								Ver 37 comodidades
							</Text>
						</Flex>
					</Flex>

					<Flex flexDirection="column" position="relative">
						<Flex h="100%" flexDirection="column" gap="1.5rem">
							{ended ? (
								<Flex
									bgColor="#E2E8F0"
									py="0.25rem"
									px="1rem"
									borderRadius={"4.875rem"}
									fontSize={"sm"}
									color="#171923"
									gap="0.25rem"
									justifyContent="center"
								>
									<Text fontWeight="400">Encerrado em {dateEndend}</Text>
								</Flex>
							) : (
								<Flex
									flexDirection="column"
									padding="1.5rem"
									gap="0.25rem"
									w="23.125rem"
									background="#4BA3B7"
									borderRadius="0.75rem"
									fontFamily="Poppins"
									color="#FFFFFF"
									h="max-content"
								>
									<Countdown
										date={new Date(+imovelDetails?.sale_end_at * 1000)}
										renderer={renderer}
									/>
									<Text
										fontWeight="500"
										fontSize="1.25rem"
										lineHeight="2rem"
										id="timer"
									>
										para encerrar as vendas
									</Text>
									<Text
										fontWeight="400"
										fontSize="0.875rem"
										lineHeight="1.25rem"
									>
										Preço unitário no próximo lote: R${" "}
										{imovelDetails.token_price * 2}
									</Text>
								</Flex>
							)}
							<PriceCard
								id={imovelDetails?._id}
								address={imovelDetails?.token_address}
								minted={imovelDetails?.token_minted}
								price={imovelDetails?.token_price}
								supply={imovelDetails?.token_supply}
								oportunitiesAddress={imovelDetails?.token_address}
							/>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				mt="4.375rem"
				px="5rem"
				bgColor={"#E4F2F3"}
				py="2rem"
				justifyContent="center"
			>
				<Flex flexDir={"column"} w="70rem">
					<Text mb="2rem" fontWeight={"600"} fontSize="2xl" color={"#171923"}>
						Em breve você poderá acompanhar:
					</Text>
					<Flex gap="2.1875rem">
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Home.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="8.5rem">
								Todas as plantas da obra
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Edit-Square.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="100%">
								Auditorias
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Document.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="100%">
								Notas Fiscais
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"/images/icons/Folder.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="75%">
								Documentos Extras
							</Text>
						</Flex>
					</Flex>
					<Flex mt="2rem">
						<Text color={"#171923"}>
							Atualmente esta obra está em estágio de
						</Text>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				py="4rem"
				px="5rem"
				flexDir={"column"}
				justifyContent="center"
				alignItems="center"
			>
				<Flex mb={"2rem"} w="100%" maxWidth="70rem">
					<Text fontSize={"1.5rem"} fontWeight={"600"} color={"#171923"}>
						Localização
					</Text>
				</Flex>
				<Flex maxWidth="70rem">
					<Maps localization={imovelDetails?.address} />
				</Flex>
				<Flex w="100%" mt="2rem" justifyContent={"space-between"}>
					<Flex w="50%" flexDir={"column"} gap="1rem">
						<Text fontWeight={"600"} color={"#171923"}>
							{imovelDetails?.address?.street},{" "}
							{imovelDetails?.address?.neighborhood},{" "}
							{imovelDetails?.address?.state}
						</Text>
						<Text fontSize={"sm"} color={"#171923"}>
							{imovelDetails?.neighbor_description}
						</Text>
					</Flex>
					<Flex w="40%" mx="8" justifyContent={"flex-end"}>
						<Carousel
							extra_images={imovelDetails?.pictures_neighbor as any[]}
							widthValue="70rem"
							heightValue="18rem"
						/>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
