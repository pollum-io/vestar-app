import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const links = [
	{
		id: 1,
		name: "Oportunidades",
		url: "/oportunidades",
	},
	{
		id: 2,
		name: "Portfólio",
		url: "/portfolio",
	},
	{
		id: 3,
		name: "Empresas",
		url: "/empresas",
	},
];

export const HeaderLinks: React.FC = () => {
	const { pathname, push } = useRouter();
	return (
		<Flex gap="1">
			{links.map(item => (
				<Flex
					key={item.id}
					w="8rem"
					justifyContent="center"
					transition="0.14s"
					borderBottom={
						pathname === item.url
							? "2px solid #007D99"
							: "2px solid transparent"
					}
					mt="2"
					pb="2"
					color={pathname === item.url ? "#007D99" : "#4A5568"}
					_hover={{
						color: "#007D99",
						cursor: "pointer",
					}}
					onClick={() => push(item.url)}
				>
					<Text fontSize={"sm"} fontWeight="medium">
						{item.name}
					</Text>
				</Flex>
			))}
		</Flex>
	);
};
