import React, { FunctionComponent } from "react";
import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { ICompaniesCard } from "./dto";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchEnterprise } from "../../../services/fetchEnterprise";

const CompaniesCard: FunctionComponent<ICompaniesCard> = ({
	_id,
	enterprise_name,
	enterprise_info,
}) => {
	const { push } = useRouter();
	return (
		<Flex
			w="100%"
			flexDirection="column"
			bgColor="#FFFFFF"
			boxShadow="0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1), 0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.06)"
			borderRadius="0.75rem"
		>
			<Flex
				w="100%"
				background="linear-gradient(102.22deg, #ECECEC 65.27%, #FFFFFF 89.66%)"
				borderRadius="0.75rem"
				h="9.3125rem"
			>

			</Flex>
			<Flex
				gap="1.5rem"
				pr="1rem"
				pl="0.5rem"
				py="0.875rem"
				w="100%"
				borderBottomRadius="0.75rem"
			>
				<Flex w="6rem" position="relative">

				</Flex>
				<Flex gap="0.375rem" flexDirection="column">
					<Text
						fontFamily="Poppins"
						fontWeight="600"
						fontSize="1.5rem"
						lineHeight="2rem"
						color="#171923"
						textTransform="uppercase"
					>
						{enterprise_name}
					</Text>
					<Flex justifyContent="space-between" alignItems="center" gap="4rem">
						<Flex gap="2.8125rem">
							<Flex gap="0.5rem" alignItems="baseline" fontFamily="Poppins">
								<Text fontSize="0.75rem" lineHeight="1rem" color="#718096">
									Oportunidades Disponíveis
								</Text>
								<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
									1
								</Text>
							</Flex>
							<Flex gap="0.5rem" alignItems="baseline">
								<Text fontSize="0.75rem" lineHeight="1rem" color="#718096">
									Encerradas
								</Text>
								<Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
									2
								</Text>
							</Flex>
						</Flex>

						<Button
							w="10.125rem"
							h="1.5rem"
							border="0.0625rem solid #007D99"
							borderRadius="0.375rem"
							bgColor="#ffffff"
							fontFamily="Poppins"
							fontWeight="500"
							fontSize="0.75rem"
							lineHeight="1rem"
							color="#007D99"
							_hover={{ bgColor: "#EDF2F7" }}
							onClick={() => push({ pathname: `/empresas/${_id}`, query: { _id } })}
						>
							Saiba mais
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export const CompaniesCards: FunctionComponent = () => {

	const { data } = useQuery("companies", fetchEnterprise, {
		refetchOnWindowFocus: false,
		refetchInterval: false,
	})

	return (
		<Flex flexDirection="column" gap="1.5rem" w="100%">
			{data?.data?.map((infos: ICompaniesCard) =>
				<CompaniesCard key={infos._id} _id={infos._id} enterprise_name={infos.enterprise_name} enterprise_info={infos.enterprise_info} />
			)}
		</Flex>
	);
};
