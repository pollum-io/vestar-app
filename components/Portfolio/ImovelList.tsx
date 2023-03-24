import { Flex, Img, Text } from "@chakra-ui/react";
import moment from "moment";
import { FunctionComponent, useEffect, useState } from "react";
import { fetchOpportunitiesImages } from "../../services/opportunitiesImages";
interface IImovelList {
	isFinished: boolean;
	isInvest: boolean;
	investmentData?: any;
}

export const ImovelList: FunctionComponent<IImovelList> = ({
	isFinished,
	isInvest,
	investmentData,
}) => {
	const [resultWithImages, setResultWithImages] = useState<any>([]);

	const result = investmentData.reduce((acc: any, investment: any) => {
		const existingInvestment = acc.find(
			(item: any) => item.investment_address === investment.investment_address
		);
		if (existingInvestment) {
			existingInvestment.amount += investment.amount;
			existingInvestment.shares += investment.shares;
		} else {
			acc.push({ ...investment });
		}
		return acc;
	}, []);

	const totalAmount = result.reduce((accumulator: any, investment: any) => {
		return accumulator + investment.amount;
	}, 0);

	useEffect(() => {
		const getImage = async () => {
			const newResultWithImages = await Promise.all(
				result.map(async (item: any) => {
					const image = item.pictures_enterprise[0];
					const imageUrl = await fetchOpportunitiesImages(image);
					return { ...item, pictures_enterprise: imageUrl };
				})
			);
			setResultWithImages(newResultWithImages);
		};

		getImage();
	}, []);

	return (
		<>
			{resultWithImages?.map((investment: any) => (
				// eslint-disable-next-line react/jsx-key
				<Flex
					id="body-table-container"
					borderRadius="0.75rem"
					opacity={isFinished ? "0.5" : "1"}
					w="100%"
					border="1px solid #EDF2F7"
					_hover={{
						cursor: "pointer",
						boxShadow:
							"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
						border: "1px solid transparent",
					}}
					transition="150ms"
					flexDirection="column"
					justifyContent={"space-between"}
				>
					<Flex>
						<Flex alignItems={"center"} w="18rem" gap="1rem">
							{isFinished ? (
								<Flex
									w="6rem"
									h="4.25rem"
									borderRadius="0.75rem 0rem 0rem 0.75rem"
									alignItems="center"
									justifyContent="center"
								>
									<Img
										src={investment?.pictures_enterprise}
										w="100%"
										h="100%"
									/>
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
								<Flex
									w="6rem"
									h="4.25rem"
									borderRadius="0.75rem 0rem 0rem 0.75rem"
									alignItems="center"
									justifyContent="center"
								>
									<Img
										src={investment?.pictures_enterprise}
										w="100%"
										h="100%"
									/>
								</Flex>
							)}

							<Flex flexDir={"column"}>
								<Text fontSize={"md"} fontWeight={"500"} color={"#171923"}>
									{investment?.name}
								</Text>
								<Text fontSize={"xs"} fontWeight={"400"} color={"#2D3748"}>
									{investment?.enterprise_type}
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
											{`${investment?.investment_address?.slice(
												0,
												5
											)}...${investment?.investment_address?.slice(38)}`}
										</Text>
										<Text fontSize={"xs"} fontWeight="400" color={"#2D3748"}>
											{investment?.shares} cotas
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
											R$ {investment?.amount}
										</Text>
										<Text fontSize={"xs"} fontWeight="400" color={"#171923"}>
											{(investment?.amount / totalAmount) * 100} % do portfólio
										</Text>
									</Flex>
								) : (
									<Text
										fontSize={"md"}
										fontWeight="400"
										color={"#171923"}
										w="7rem"
									>
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
									{isInvest
										? investment.expected_delivery_date &&
										  moment(investment.expected_delivery_date).format("YYYY")
										: "47"}
								</Text>
							</Flex>
							{isInvest && (
								<>
									<Flex w="7rem">
										<Text fontSize={"md"} fontWeight="400" color={"#171923"}>
											R$ {investment?.profitability}
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
				</Flex>
			))}
		</>
	);
};
