import { Flex, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {
	ICompaniesDetails,
	ICompaniesTeam,
} from "../Companies/CompaniesCard/dto";
import { OpportunitiesCards } from "../Opportunities/OpportunitiesCard/OpportunitiesCard";
import { CompanieContact } from "./CompanieContact/CompanieContact";
import { CompanieDetails } from "./CompanieDetails/CompanieDetails";
import { CompanieMembers } from "./CompanieMembers/CompanieMembers";

interface ICompanie {
	companieDetail: ICompaniesDetails;
}

export const CompaniePage: FunctionComponent<ICompanie> = ({
	companieDetail,
}) => {
	return (
		<Flex flexDirection="column" gap="2rem" mt="6.25rem" mb="4.5rem">
			<Flex
				flexDirection="column"
				w="100%"
				px="5rem"
				justifyContent="center"
				alignItems="center"
			>
				<Flex w="100%" maxWidth="70rem">
					<Flex justifyContent="space-between" gap="2.75rem">
						<Flex flexDirection="column">
							<Flex>
								<CompanieDetails
									logo={`/api/file/${companieDetail?.enterprise_logo}`}
									banner={`/api/file/${companieDetail?.enterprise_banner}`}
									name={companieDetail?.enterprise_name}
									id={`CNPJ: ${companieDetail?.cnpj}`}
									location={`${companieDetail?.address?.street}, ${companieDetail?.address?.neighborhood} - ${companieDetail?.address?.state}`}
									description={companieDetail?.description}
								/>
							</Flex>
							<Flex h={["unset", "unset", "unset", "24rem", "10rem"]}>
								<Flex
									w={[
										"max-content",
										"max-content",
										"max-content",
										"max-content",
										"max-content",
									]}
									h="max-content"
									py="1.5rem"
									flexDirection={["unset", "unset", "unset", "column", "row"]}
									bgColor="#FFFFFF"
									border="0.0625rem solid #E5E7EB"
									borderRadius="0rem 0.75rem 0.75rem 0rem"
									fontFamily="Poppins"
									pr={["unset", "unset", "unset", "6rem", "3.625rem"]}
									alignItems={["unset", "unset", "unset", "unset", "center"]}
									justifyContent="end"
									gap={["unset", "unset", "unset", "1.5rem", "3.5rem"]}
									mt="4.25rem"
									left="0"
									borderLeft="none"
									pl="0"
								>
									<Flex flexDirection="column" gap="0.25rem">
										<Text
											fontSize="0.875rem"
											lineHeight="1.25rem"
											color="#007D99"
										>
											Empreendimentos LIVN
										</Text>
										<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
											{companieDetail?.enterprise_info?.enterprises_livn}
										</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text
											fontSize="0.875rem"
											lineHeight="1.25rem"
											color="#007D99"
										>
											Obras entregues
										</Text>
										<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
											{companieDetail?.enterprise_info?.delivered_enterprises}
										</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text
											fontSize="0.875rem"
											lineHeight="1.25rem"
											color="#007D99"
										>
											Em andamento
										</Text>
										<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
											{companieDetail?.enterprise_info?.in_progress}
										</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text
											fontSize="0.875rem"
											lineHeight="1.25rem"
											color="#007D99"
										>
											VGV Total
										</Text>
										<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
											{companieDetail?.enterprise_info?.total_vgv}
										</Text>
									</Flex>
								</Flex>
								<Flex
									w={[
										"max-content",
										"max-content",
										"max-content",
										"max-content",
										"50%",
									]}
									h="max-content"
									py="1.5rem"
									border="0.0625rem solid #E5E7EB"
									pr={["unset", "unset", "unset", "6rem", "3.625rem"]}
									left="0"
									position="absolute"
									borderRight="none"
									mt="4.25rem"
								>
									<Flex
										h={["unset", "unset", "unset", "16.5rem", "3rem"]}
										bgColor="transparent"
									/>
								</Flex>
							</Flex>
							<Flex gap="5.75rem" mt="8.5rem">
								<Flex
									flexDirection="column"
									fontFamily="Poppins"
									fontWeight="600"
									fontSize="1.5rem"
									lineHeight="2rem"
									color="#171923"
								>
									<Text>Quem constrói nossa história</Text>

									{companieDetail?.team?.map((team: ICompaniesTeam) => (
										// eslint-disable-next-line react/jsx-key
										<CompanieMembers
											name={team.name}
											position={team.position}
											image={team.image}
										/>
									))}
								</Flex>
							</Flex>
						</Flex>
						<Flex>
							<Flex h="100%">
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
						</Flex>
					</Flex>
				</Flex>
				<Flex
					mt="8.5rem"
					alignItems="center"
					flexDirection="column"
					gap="2rem"
					w="100%"
					maxWidth="70rem"
				>
					<Text
						fontFamily="Poppins"
						fontWeight="600"
						fontSize="1.5rem"
						lineHeight="2rem"
						color="#171923"
						w="100%"
					>
						Oportunidades
					</Text>
				</Flex>
			</Flex>
			<Flex px="1.5rem" w="100%" justifyContent="center">
				<OpportunitiesCards enterpriseId={companieDetail?._id} />
			</Flex>
		</Flex>
	);
};
