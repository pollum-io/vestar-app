import React, { useMemo, useEffect } from "react";
import { Flex, Text, useColorMode, Link } from "@chakra-ui/react";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillExclamationCircle } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { MdOutlineClose } from "react-icons/md";
import { IToastyCardProps } from "./dto";

const cards: { [k: string]: [string, IconType, number] } = {
	success: ["#38A169", RiCheckboxCircleFill, 19],
	error: ["blue", AiFillExclamationCircle, 18],
	warning: ["yellow", AiFillExclamationCircle, 18],
	info: ["#2B6CB0", IoIosInformationCircle, 20],
};

export const ToastyCard: React.FC<IToastyCardProps> = ({
	bg,
	text,
	state,
	onClose,
}) => {
	return (
		<Flex
			h="max-content"
			w={["18.75rem", "22.25rem", "22.25rem", "22.25rem", "22.30rem"]}
			mt="2.125rem"
			mr={["unset", "1.5rem", "2.5rem", "2.5rem"]}
			py="0.7rem"
			px="0.5rem"
			bg={bg}
			borderRadius="0.2rem"
			borderLeftWidth="0.25rem"
			borderLeftColor="green"
			justifyContent="space-between"
			boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
			flexDir="column"
		>
			<Flex
				color={text}
				flexDirection="row"
				zIndex="docked"
				px="0.3rem"
				w="100%"
				position="relative"
			>
				<Flex pt="0.1rem">
					<AiFillExclamationCircle />
				</Flex>

				<Flex
					flexDirection="column"
					ml="0.8rem"
					py="0"
					position="relative"
					alignItems="flex-top"
					w="100%"
					pr="2"
				>
					<Text font-weight="bold">lucas</Text>
					<Text fontSize="1rem" font-weight="normal">
						lucas
					</Text>
				</Flex>
				<Flex
					_hover={{ cursor: "pointer" }}
					onClick={onClose}
					position="absolute"
					right="0"
					top="0"
					pt="0.1rem"
				>
					<MdOutlineClose size={16} color={text} />
				</Flex>
			</Flex>
		</Flex>
	);
};
