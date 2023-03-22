import { BsCheck } from "react-icons/bs";
import {
	Flex,
	IconButton,
	Img,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Icon,
	Text,
	Button,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { SlArrowUp } from "react-icons/sl";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const HamburguerMenu: React.FC = () => {
	const { t, i18n } = useTranslation();
	const { language } = i18n;
	useEffect(() => {
		console.log(language);
	});
	return (
		<Menu>
			<MenuButton>
				<Flex
					h="max"
					px="0.75rem"
					py="1"
					flexDir={"row"}
					alignItems={"center"}
					gap="3"
					border="0.0625rem solid #E2E8F0"
					rounded={"1rem"}
				>
					<Text fontSize={"sm"} fontFamily="Poppins" color={"#4A5568"}>
						{t("header.hello")}
					</Text>
					<Icon color="black" as={FiMenu} />
				</Flex>
			</MenuButton>
			<MenuList
				bgColor="#FFFFFF"
				border="0.0625rem solid #E2E8F0"
				borderRadius="1rem"
				w="12.625rem"
				pb="0.8rem"
			>
				<Accordion allowMultiple>
					<AccordionItem border="none">
						<AccordionButton
							background="none"
							_hover={{
								background: "none !important",
							}}
							_focus={{
								background: "none !important",
							}}
							w="100%"
							pr="1.1875rem"
							pl="1rem"
						>
							<Flex justifyContent="space-between" alignItems="center" w="100%">
								<Text
									fontFamily="Poppins"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									color="#4A5568"
								>
									{t("header.lang")}
								</Text>

								<AccordionIcon color="#666c77" />
							</Flex>
						</AccordionButton>

						<AccordionPanel p="0" fontWeight="400">
							<Flex flexDirection="column" gap="0.25rem">
								<Flex
									justifyContent="space-between"
									_hover={{ bgColor: "#F7FAFC", cursor: "pointer" }}
									pr="1.22rem"
									pl="1.625rem"
									py="0.2rem"
									onClick={() => {
										i18next.changeLanguage("pt-br");
									}}
									bgColor={language === "pt-br" ? "#F7FAFC" : "#ffffff"}
								>
									<Text
										fontFamily="Poppins"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#4A5568"
									>
										{t("header.pt")}
									</Text>
									<Flex display={language === "pt-br" ? "flex" : "none"}>
										<BsCheck color="#1789A3" size={18} />
									</Flex>
								</Flex>
								<Flex
									justifyContent="space-between"
									_hover={{ bgColor: "#F7FAFC", cursor: "pointer" }}
									pr="1.25rem"
									pl="1.625rem"
									py="0.2rem"
									onClick={() => {
										i18next.changeLanguage("en");
									}}
									bgColor={language === "en" ? "#F7FAFC" : "#ffffff"}
								>
									<Text
										fontFamily="Poppins"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#4A5568"
									>
										{t("header.en")}
									</Text>
									<Flex display={language === "en" ? "flex" : "none"}>
										<BsCheck color="#1789A3" size={18} />
									</Flex>
								</Flex>
							</Flex>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
				<MenuItem
					fontFamily="Poppins"
					fontSize="0.875rem"
					lineHeight="1.25rem"
					color="#4A5568"
					pl="0.9375rem"
					_focus={{}}
					_hover={{ bgColor: "#F7FAFC" }}
				>
					{t("header.logOut")}
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
