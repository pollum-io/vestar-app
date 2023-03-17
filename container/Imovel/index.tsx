import { Flex, Img, Text, Icon } from "@chakra-ui/react";
import React, { FunctionComponent, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { Collections } from "../../components/Imovel/Collections";
import { DefaultTemplate } from "../DefaultTemplate";
import { PriceCard } from "../../components/Imovel/PriceCard";
import { Carousel } from "../../components/Imovel/Carousel";
import { Maps } from "../../components/Map/Maps";
import { useRegister } from "../../hooks";

const images = [
	{ id: 0, image: "images/car.png" },
	{ id: 1, image: "images/backgrounds/Image-2.png" },
	{ id: 2, image: "images/backgrounds/Image-3.png" },
];

//TODO: Componentizar
export const ImovelContainer: FunctionComponent = () => {
	const { ended, hasToken } = useRegister();

	return (
		<DefaultTemplate>
			<Flex px="5rem" flexDir={"column"} alignItems="center">
				<Collections />
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
								Crypto Plaza
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
								Residencial
							</Text>
							<Flex
								bgColor="#F0E8FF"
								py="0.25rem"
								px="1rem"
								borderRadius={"4.875rem"}
								fontSize={"sm"}
								color="#171923"
								gap="0.25rem"
								display={hasToken ? "flex" : "none"}
							>
								<Text fontWeight="400">Você possui</Text>
								<Text fontWeight="600">12 cotas</Text>
							</Flex>
						</Flex>
						<Flex gap="0.625rem" pb="1.5rem">
							<Icon w="1.25rem" h="1.5rem" color={"#718096"} as={FiMapPin} />
							<Text color={"#718096"}>Jurerê, Florianópolis</Text>
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
										<Text color="#000000">150</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Início da Obra
									</Text>
									<Flex gap="0.25rem">
										<Text color="#000000">Jan 2022</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Prev. Conclusão
									</Text>
									<Flex gap="0.25rem">
										<Text color="#000000">Out 2025</Text>
									</Flex>
								</Flex>
								<Flex flexDir={"column"} gap="0.25rem">
									<Text fontSize={"sm"} fontWeight="400" color="#718096">
										Rentabilidade Esperada
									</Text>
									<Flex gap="0.25rem" alignItems="center">
										<Text color="#000000">12% ao ano</Text>
										<Img
											src={"icons/InfoSquare.png"}
											w="1rem"
											h="1rem"
											mb="0.15rem"
											_hover={{ cursor: "pointer" }}
										/>
									</Flex>
								</Flex>
							</Flex>
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
						<Flex flexDir={"column"} gap="5">
							<Text color={"#171923"}>
								Esteempreendimento é uma obra de lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Ut odio porta sed posuere purus
								donec vitae posuere fringilla. Sit nibh id senectus sed eget
								nisl, mollis leo justo. Blandit tristique purus tortor rhoncus.
								Dolor tristique nulla dignissim tellus cursus ac fermentum sit
								nisi. Viverra odio diam non porttitor commodo nullam iaculis in
								pretium. In elementum eu varius eu massa senectus faucibus
								lacinia blandit. Semper quam posuere commodo dui sed urna,
								senectus nunc.
							</Text>
							<Text color={"#171923"}>
								Elementum odio euismod fermentum urna euismod blandit risus
								viverra. Ligula elementum erat nullam faucibus neque viverra.
								Lacinia eget consectetur pharetra fermentum pellentesque aenean
								elementum pretium. Quis euismod arcu fermentum ac suscipit sed
								neque sodales amet. Donec massa sit enim urna tristique
								adipiscing. Enim id ultrices elit venenatis. Ut egestas
								venenatis lacus vel diam feugiat lobortis tortor et. Volutpat
								massa sagittis, quis vestibulum nunc, eget ullamcorper. Aliquet
								vitae pulvinar risus hac in a. Elementum turpis dis ultrices
								enim. Fringilla in phasellus arcu placerat tristique eget
								lacinia. Aliquam sed hac platea sit ornare nam pellentesque.
								Nunc lacus sapien senectus faucibus felis.
							</Text>
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
								<Flex flexDir={"column"} color={"#171923"}>
									<Text>&bull; Salão de festas</Text>
									<Text>&bull; Wifi</Text>
									<Text>&bull; Lavanderia e espaço clean</Text>
									<Text>&bull; Oficina compartilhada</Text>
									<Text>&bull; Quadra poliesportiva</Text>
									<Text>&bull; Piscina</Text>
								</Flex>
								<Flex flexDir={"column"} color={"#171923"}>
									<Text>&bull; Academia</Text>
									<Text>&bull; Espaço pet</Text>
									<Text>&bull; Câmeras de segurança</Text>
									<Text>&bull; Bicicletario</Text>
									<Text>&bull; Area comercial integrado</Text>
									<Text>&bull; Coworking</Text>
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
									<Text fontWeight="400">Encerrado em 06/03/2023</Text>
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
									<Text fontWeight="500" fontSize="1.25rem" lineHeight="2rem">
										6 dias 17 h e 36min para encerrar as vendas
									</Text>
									<Text
										fontWeight="400"
										fontSize="0.875rem"
										lineHeight="1.25rem"
									>
										Preço unitário no próximo lote: R$ 180
									</Text>
								</Flex>
							)}
							<PriceCard axisY="43rem" />
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
							<Img src={"images/icons/Home.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="8.5rem">
								Todas as plantas da obra
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"images/icons/Edit Square.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="100%">
								Auditorias
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"images/icons/Document.png"} />
							<Text fontWeight={"400"} color={"#171923"} w="100%">
								Notas Fiscais
							</Text>
						</Flex>
						<Flex alignItems={"center"} gap="0.9rem">
							<Img src={"images/icons/Folder.png"} />
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
					<Maps />
				</Flex>
				<Flex mt="2rem" gap="7.75rem" justifyContent="center">
					<Flex flexDir={"column"} gap="1rem" w="34.875rem">
						<Text fontWeight={"600"} color={"#171923"}>
							Jurerê, Florianópolis, Santa Catarina
						</Text>
						<Text fontSize={"sm"} color={"#171923"}>
							Situado ao norte da Ilha de Santa Catarina, entre os bairros
							Daniela, Jurerê Tradicional e Canasvieiras, o bairro de Jurerê
							Internacional é considerado o bairro mais sofisticado de
							Florianópolis. Fruto de um projeto urbanístico com foco na
							sustentabilidade, nele tudo foi planejado cuidadosamente para que
							resultasse em um lugar único na Ilha.
						</Text>
						<Text fontSize={"sm"} color={"#171923"}>
							O que se pode encontrar em Jurerê Internacional são ruas largas e
							arborizadas, mansões milionárias, áreas específicas para comércio
							e serviços, amplos estacionamentos, segurança e saneamento
							exclusivos e, sobretudo, organização e natureza.
						</Text>
					</Flex>
					<Flex>
						<Carousel
							images={images}
							widthValue="27.3144rem"
							heightValue="15.5rem"
						/>
					</Flex>
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
