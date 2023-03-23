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

export const HamburguerMenu: React.FC = () => {
	return (
		<Menu>
			<MenuButton>
				<Flex
					h="max"
					px="2"
					py="1"
					flexDir={"row"}
					alignItems={"center"}
					gap="3"
					border="0.0625rem solid #E2E8F0"
					rounded={"1rem"}
				>
					<Text fontSize={"sm"} fontFamily="Poppins" color={"#4A5568"}>
						Olá, Fulano
					</Text>
					<Icon color="#4A5568 " as={FiMenu} />
				</Flex>
			</MenuButton>
			<MenuList
				bgColor="#FFFFFF"
				border="0.0625rem solid #E2E8F0"
				borderRadius="1rem"
				w="12.625rem"
				pb="0.8rem"
				pt="0.8rem"
				filter="drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06))"
			>
				<MenuItem
					fontFamily="Poppins"
					fontSize="0.875rem"
					lineHeight="1.25rem"
					color="#4A5568"
					h="1.8rem"
					pl="0.9375rem"
					_focus={{}}
					_hover={{ bgColor: "#F7FAFC" }}
				>
					Editar perfil
				</MenuItem>
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
							h="1.8rem"
						>
							<Flex justifyContent="space-between" alignItems="center" w="100%">
								<Text
									fontFamily="Poppins"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									color="#4A5568"
								>
									Idioma
								</Text>

								<AccordionIcon color="#666c77" />
							</Flex>
						</AccordionButton>

						<AccordionPanel p="0" pb="0.375rem" pt="0.375rem" fontWeight="400">
							<Flex flexDirection="column" gap="0.25rem">
								<Flex
									justifyContent="space-between"
									_hover={{ bgColor: "#F7FAFC", cursor: "pointer" }}
									pr="1.22rem"
									pl="1.625rem"
									py="0.2rem"
								>
									<Text
										fontFamily="Poppins"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#4A5568"
									>
										Português
									</Text>
									<BsCheck color="#1789A3" size={18} />
								</Flex>
								<Flex
									justifyContent="space-between"
									_hover={{ bgColor: "#F7FAFC", cursor: "pointer" }}
									pr="1.25rem"
									pl="1.625rem"
									py="0.2rem"
								>
									<Text
										fontFamily="Poppins"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#4A5568"
									>
										Inglês
									</Text>
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
					h="1.8rem"
					pl="0.9375rem"
					_focus={{}}
					_hover={{ bgColor: "#F7FAFC" }}
				>
					Sair
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
