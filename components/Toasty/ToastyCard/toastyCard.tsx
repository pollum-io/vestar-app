import React, { useMemo, useEffect } from "react";
import { Flex, Text, useColorMode, Link } from "@chakra-ui/react";
import { IoIosInformationCircle } from "react-icons/io";
import { AiFillExclamationCircle } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { MdOutlineClose } from "react-icons/md";

const cards: { [k: string]: [string, IconType, number] } = {
	success: ["#38A169", RiCheckboxCircleFill, 19],
	error: ["#E53E3E", AiFillExclamationCircle, 18],
	warning: ["yellow", AiFillExclamationCircle, 18],
	info: ["#2B6CB0", IoIosInformationCircle, 20],
};

const ToastyCard: React.FC<IToastyCardProps> = ({
	bg,
	text,
	state,
	onClose,
}) => {
	const toastData = useMemo(() => {
		const card = cards[state.status ?? "info"];

		const color = card[0];
		const Icon = card[1];

		return {
			color,
			icon: <Icon color={color} size={card[2]} />,
		};
	}, [state.status]);

	let currentExplorerURL: string;

	switch (state.chainId) {
		case 57:
			currentExplorerURL = `https://explorer.syscoin.org/tx/${state.txHash}`;
			break;
		case 5700:
			currentExplorerURL = `https://tanenbaum.io/tx/${state.txHash}`;
			break;
		case 2814:
			currentExplorerURL = `https://explorer.testnet.rollux.com/tx/${state.txHash}`;
			break;
		default:
			currentExplorerURL = `https://explorer.syscoin.org/tx/${state.txHash}`;
	}

	const { colorMode } = useColorMode();

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
			borderLeftColor={toastData.color}
			justifyContent="space-between"
			boxShadow={
				colorMode === "light"
					? "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
					: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
			}
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
				<Flex pt="0.1rem">{toastData.icon}</Flex>

				<Flex
					flexDirection="column"
					ml="0.8rem"
					py="0"
					position="relative"
					alignItems="flex-top"
					w="100%"
					pr="2"
				>
					<Text font-weight="bold"> {`${state?.title}`}</Text>
					<Text fontSize="1rem" font-weight="normal">
						{state.description}
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
			{state.txHash && (
				<Flex px="9" pt="1">
					<Link
						color="RED"
						href={currentExplorerURL}
						fontSize="sm"
						fontWeight={500}
						isExternal
					></Link>
				</Flex>
			)}
		</Flex>
	);
};

export default ToastyCard;
