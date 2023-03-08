import { FunctionComponent, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { Button, Flex, Img, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
import { Collections } from "./Collections";
import { PriceCard } from "./PriceCard";
import { Carousel } from "./Carousel";
import { TbInfoSquare } from "react-icons/tb";
import { Maps } from "../Map/Maps";
import { IOpportunitiesCard } from "../Opportunities/OpportunitiesCard/dto";
import { fetchImovelDetail } from "../../services/imovelDetail";
import { useQuery } from "react-query";
import home from "./icons/Home.png"
import square from "./icons/Edit Square.png"
import document from "./icons/Document.png"
import folder from "./icons/Folder.png"
import { formatDate } from "../../utils/formatDate";

export const ImovelDetail: FunctionComponent = () => {

	const router = useRouter();
	const imovelId = router.query.id
	const [imovelDetails, setImovelDetails] = useState<IOpportunitiesCard>();

	useEffect(() => {
		if (imovelId) {
			fetchImovelDetail(imovelId as string).then(res => setImovelDetails(res.data))
		}
	}, [imovelId])

	return (
		<Flex flexDir={"column"}>
			<Flex px="5rem" flexDir={"column"}>
				<Collections images={imovelDetails?.pictures_enterprise as any[]} />
				<Flex flexDir={"column"}>
					<Flex gap="1" pb="0.75rem">
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
					</Flex>
					<Flex gap="0.625rem" pb="1.5rem">
						<Icon w={6} h={6} color={"#718096"} as={FiMapPin} />
						<Text color={"#718096"}>{`${imovelDetails?.address.street}, ${imovelDetails?.address.neighborhood}`}
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
									<Text color="#000000">{formatDate(imovelDetails?.init_date)}</Text>
								</Flex>
							</Flex>
							<Flex flexDir={"column"} gap="0.25rem">
								<Text fontSize={"sm"} fontWeight="400" color="#718096">
									Prev. Conclusão
								</Text>
								<Flex gap="0.25rem">
									<Text color="#000000">{formatDate(imovelDetails?.expected_delivery_date)}</Text>
								</Flex>
							</Flex>
							<Flex flexDir={"column"} gap="0.25rem">
								<Text fontSize={"sm"} fontWeight="400" color="#718096">
									Rentabilidade Esperada
								</Text>
								<Flex gap="0.25rem">
									<Text color="#000000">{imovelDetails?.profitability}% ao ano</Text>
									<Icon as={TbInfoSquare} color={"#A0AEC0"} w={5} h={5} />
								</Flex>
							</Flex>
						</Flex>
						{/* TODO: Falta saber os valores */}
						<Flex gap="5.25rem">
							<Flex flexDir={"column"} gap="0.25rem">
								<Text fontSize={"sm"} fontWeight="400" color="#718096">
									Preço Inicial m²
								</Text>
								<Flex gap="0.25rem">
									<Text fontSize={"xs"} color="#718096">
										R$
									</Text>
									<Text color="#000000">12.800,00$</Text>
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
									<Text color="#000000">16.800,00$</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex flexDir={"column"} gap="5" w="45%">
						<Text color={"#171923"}>
							{imovelDetails?.description}
						</Text>
					</Flex>
					<PriceCard axisY="34rem" />
					<Flex mt="4rem" flexDir={"column"}>
						<Text mb="2rem" fontWeight={"600"} fontSize="2xl" color={"#171923"}>
							O que este empreendimento oferece
						</Text>
						<Flex gap="8rem">
							<Flex flexDir={"column"} maxH={"10rem"} flexWrap={"wrap"} color={"#171923"}>
								{imovelDetails?.general_info.map((infos: string) =>
									// eslint-disable-next-line react/jsx-key
									<Text pr="3">&bull; {infos}</Text>
								)}
							</Flex>
						</Flex>
						<Text
							mt="2.375rem"
							fontSize={"sm"}
							fontWeight={"500"}
							color={"#007D99"}
						>
							{/* TODO: Falta esse link */}
							Ver 37 comodidades
						</Text>
					</Flex>
					<PriceCard axisY="72rem" />
				</Flex>
			</Flex>
			<Flex
				mt="4.375rem"
				px="5rem"
				bgColor={"#E4F2F3"}
				py="2rem"
				flexDir={"column"}
			>
				<Text mb="2rem" fontWeight={"600"} fontSize="2xl" color={"#171923"}>
					Em breve você poderá acompanhar:
				</Text>
				<Flex gap="2.1875rem">
					<Flex alignItems={"center"} gap="0.9rem">
						<Img src={home.src} />
						<Text fontWeight={"400"} color={"#171923"} w="8.5rem">
							Todas as plantas da obra
						</Text>
					</Flex>
					<Flex alignItems={"center"} gap="0.9rem">
						<Img src={square.src} />
						<Text fontWeight={"400"} color={"#171923"} w="100%">
							Auditorias
						</Text>
					</Flex>
					<Flex alignItems={"center"} gap="0.9rem">
						<Img src={document.src} />
						<Text fontWeight={"400"} color={"#171923"} w="100%">
							Notas Fiscais
						</Text>
					</Flex>
					<Flex alignItems={"center"} gap="0.9rem">
						<Img src={folder.src} />
						<Text fontWeight={"400"} color={"#171923"} w="75%">
							Documentos Extras
						</Text>
					</Flex>
				</Flex>
				<Flex mt="2rem">
					<Text color={"#171923"}>Atualmente esta obra está em estágio de</Text>
				</Flex>
			</Flex>
			<Flex py="4rem" px="5rem" flexDir={"column"}>
				<Flex mb={"2rem"}>
					<Text fontSize={"1.5rem"} fontWeight={"600"} color={"#171923"}>
						Localização
					</Text>
				</Flex>
				<Flex>
					<Maps localization={imovelDetails?.address} />
				</Flex>
				<Flex w="100%" mt="2rem" justifyContent={"space-between"}>
					<Flex w="50%" flexDir={"column"} gap="1rem">
						<Text fontWeight={"600"} color={"#171923"}>
							{imovelDetails?.address.street}, {imovelDetails?.address.neighborhood}, {imovelDetails?.address.state}
						</Text>
						<Text fontSize={"sm"} color={"#171923"}>
							{imovelDetails?.neighbor_description}
						</Text>
					</Flex>
					<Flex w="40%" justifyContent={"flex-end"}>
						<Carousel images={imovelDetails?.pictures_neighbor as any[]} widthValue="70%" heightValue="18rem" />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
