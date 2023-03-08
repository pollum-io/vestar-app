import { FunctionComponent, useEffect, useState } from "react"
import { Flex, Img, Text } from "@chakra-ui/react";
import { CompanieDetails } from "./CompanieDetails/CompanieDetails";
import { CompanieContact } from "./CompanieContact/CompanieContact";
import { CompanieMembers } from "./CompanieMembers/CompanieMembers";
import { OpportunitiesCards } from "../Opportunities/OpportunitiesCard/OpportunitiesCard";
import { useRouter } from "next/router";
import { fetchEnterpriseById } from "../../services/fetchEnterpriseById";
import { ICompaniesDetails, ICompaniesInfo, ICompaniesTeam } from "../Companies/CompaniesCard/dto";

export const CompaniePage: FunctionComponent = () => {

	const router = useRouter();
	const companieId = router.query.id
	const [companieDetail, setCompanieDetail] = useState<ICompaniesDetails>();

	useEffect(() => {
		if (companieId) {
			fetchEnterpriseById(companieId as string).then(res => setCompanieDetail(res.data))
		}
	}, [companieId])

	console.log(companieDetail, 'imovelDetails');

	return (
		<Flex flexDirection="column" mt="6.25rem" mb="4.5rem">
			<Flex justifyContent="center" gap="2.75rem" px="5rem">
				<CompanieDetails
					logo="images/companiesCardLogo.png"
					name={companieDetail?.enterprise_name}
					id={`CNPJ: ${companieDetail?.cnpj}`}
					location={`${companieDetail?.address.street}, ${companieDetail?.address.neighborhood} - ${companieDetail?.address.state}`}
					description={companieDetail?.description}
				/>
				<CompanieContact
					website={companieDetail?.site_url}
					whats={companieDetail?.contact_number}
					phone={companieDetail?.contact_number}
					email={companieDetail?.email}
					instagram={companieDetail?.social_media.instagram}
					twitter={companieDetail?.social_media.twitter}
					facebook={companieDetail?.social_media.facebook}
					telegram={companieDetail?.social_media.telegram}
				/>
			</Flex>

			<Flex
				w="49.9375rem"
				h="6rem"
				bgColor="#FFFFFF"
				border="0.0625rem solid #E5E7EB"
				borderRadius="0rem 0.75rem 0.75rem 0rem"
				fontFamily="Poppins"
				pr="3.625rem"
				alignItems="center"
				justifyContent="end"
				gap="3.5rem"
				mt="4.25rem"
			>
				<Flex flexDirection="column" gap="0.25rem">
					<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
						Empreendimentos LIVN
					</Text>
					<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
						{companieDetail?.enterprise_info?.enterprises_livn}
					</Text>
				</Flex>
				<Flex flexDirection="column" gap="0.25rem">
					<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
						Obras entregues
					</Text>
					<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
						{companieDetail?.enterprise_info?.delivered_enterprises}
					</Text>
				</Flex>
				<Flex flexDirection="column" gap="0.25rem">
					<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
						Em andamento
					</Text>
					<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
						{companieDetail?.enterprise_info?.in_progress}
					</Text>
				</Flex>
				<Flex flexDirection="column" gap="0.25rem">
					<Text fontSize="0.875rem" lineHeight="1.25rem" color="#007D99">
						VGV Total
					</Text>
					<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
						{companieDetail?.enterprise_info?.total_vgv}
					</Text>
				</Flex>
			</Flex>
			<Flex
				gap="5.75rem"
				justifyContent="center"
				alignItems="end"
				mt="2.5rem"
				px="5rem"
			>
				<Flex
					flexDirection="column"
					fontFamily="Poppins"
					fontWeight="600"
					fontSize="1.5rem"
					lineHeight="2rem"
					color="#171923"
				>
					<Text>Quem constrói nossa história</Text>
					{companieDetail?.team?.map((team: ICompaniesTeam) =>
						// eslint-disable-next-line react/jsx-key
						<CompanieMembers name={team.name} position={team.position} image={team.image} />
					)}
					{/* <Flex mt="8.5rem" flexDirection="column" gap="2rem">
						<Text>Saiba mais sobre a empresa</Text>
						<Flex gap="2.75rem">
							<Flex
								boxShadow="0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
								borderRadius="0.75rem"
								_hover={{ cursor: "pointer" }}
							>
								<Img src="images/backgrounds/JusBrasil.png" />
							</Flex>
							<Flex
								boxShadow="0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1), 0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)"
								borderRadius="0.75rem"
								_hover={{ cursor: "pointer" }}
							>
								<Img src="images/backgrounds/ReclameAqui.png" />
							</Flex>
						</Flex>
					</Flex> */}
				</Flex>
				<CompanieContact
					website={companieDetail?.site_url}
					whats={companieDetail?.contact_number}
					phone={companieDetail?.contact_number}
					email={companieDetail?.email}
					instagram={companieDetail?.social_media.instagram}
					twitter={companieDetail?.social_media.twitter}
					facebook={companieDetail?.social_media.facebook}
					telegram={companieDetail?.social_media.telegram}
				/>
			</Flex>
			<Flex mt="8.5rem" alignItems="center" flexDirection="column" gap="2rem">
				<Flex px="5rem" w="100%" justifyContent="center">
					<Text
						fontFamily="Poppins"
						fontWeight="600"
						fontSize="1.5rem"
						lineHeight="2rem"
						color="#171923"
						w="70rem"
					>
						Oportunidades
					</Text>
				</Flex>
				<Flex px="1.5rem">
					<OpportunitiesCards />
				</Flex>
			</Flex>
		</Flex>
	)
}
