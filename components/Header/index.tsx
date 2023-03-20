import { Flex, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HamburguerMenu } from "./HamburguerMenu";
import { HeaderLinks } from "./HeaderLinks";

export const Header: React.FC = () => {
	const { push } = useRouter();
	return (
		<Flex
			w="100%"
			h={"4.75rem"}
			flexDir="row"
			alignItems={"center"}
			justifyContent="space-around"
			bgColor={"#FFFFFF"}
			borderBottom="0.0625rem solid #E2E8F0"
			boxShadow="0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.05)"
		>
			<Flex
				onClick={() => push("/oportunidades")}
				_hover={{ cursor: "pointer" }}
			>
				<Img src={"/images/livnlogo.png"} w="5" h="7" alt="Livn logo" />
			</Flex>
			<Flex>
				<HeaderLinks />
			</Flex>
			<Flex
				gap="0.75rem"
				fontFamily="Poppins"
				fontWeight="500"
				fontSize="0.875rem"
				lineHeight="1.25rem"
				alignItems="center"
			>
				<HamburguerMenu />
			</Flex>
		</Flex>
	);
};
