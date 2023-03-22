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
import { useRouter } from "next/router";
import { logout } from "../../services/logout";
import { useUser } from "../../hooks/useUser";

export const HamburguerMenu: React.FC = () => {
	const { push } = useRouter();
	const { userInfos, username } = useUser();
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
						Olá, {username}
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
			>
				<MenuItem
					fontFamily="Poppins"
					fontSize="0.875rem"
					lineHeight="1.25rem"
					pr="1.1875rem"
					color="#4A5568"
					pl="0.9375rem"
					_focus={{}}
					_hover={{ bgColor: "#F7FAFC", opacity: 0.8 }}
					onClick={() => {
						userInfos === undefined
							? logout(push)
							: push({ pathname: `/usuario/${userInfos}`, query: userInfos });
					}}
				>
					Editar perfil
				</MenuItem>
				<Accordion allowMultiple>
					<AccordionItem border="none">
						<AccordionButton
							background="none"
							_hover={{ bgColor: "#FFF", opacity: 0.8 }}
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
									Idioma
								</Text>

								<AccordionIcon color="#666c77" />
							</Flex>
						</AccordionButton>

						<AccordionPanel p="0" pb="0.4rem" fontWeight="400">
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
					pr="1.1875rem"
					color="#4A5568"
					pl="0.9375rem"
					_focus={{}}
					_hover={{ bgColor: "#F7FAFC", opacity: 0.8 }}
					onClick={() => logout(push)}
				>
					Sair
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
