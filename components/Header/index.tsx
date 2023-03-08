import { Button, Flex, Img } from "@chakra-ui/react";
import { HamburguerMenu } from "./HamburguerMenu";
import { HeaderLinks } from "./HeaderLinks";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
	const { i18n } = useTranslation();
	const { language } = i18n;
	return (
		<Flex
			w="100%"
			h={"4.75rem"}
			flexDir="row"
			alignItems={"center"}
			justifyContent="space-around"
			bgColor={"#FFFFFF"}
		>
			<Button
				bgColor="red"
				onClick={() => {
					i18n.changeLanguage("en");
					console.log(language);
				}}
			>
				en
			</Button>
			<Button
				bgColor="red"
				onClick={() => {
					i18n.changeLanguage("pt-br");
					console.log(language);
				}}
			>
				pt
			</Button>
			<Flex>
				<Img src={"images/livnlogo.png"} w="5" h="7" />
			</Flex>
			<Flex>
				<HeaderLinks />
			</Flex>
			<Flex>
				<HamburguerMenu />
			</Flex>
		</Flex>
	);
};
