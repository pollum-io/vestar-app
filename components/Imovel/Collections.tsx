import { Flex, Img, useDisclosure, SimpleGrid } from "@chakra-ui/react";
import { CollectionsModal } from "./CollectionsModal";

export const Collections: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex
			w="100%"
			h="100%"
			gap="0.5rem"
			pb="1.5rem"
			pt="2rem"
			bgColor="green"
			justifyContent="center"
		>
			<CollectionsModal isOpen={isOpen} onClose={onClose} />
			<Flex onClick={onOpen}>
				<Img
					width="34.75rem"
					height="25rem"
					src={"images/backgrounds/Image.png"}
					borderLeftRadius="0.75rem"
				/>
			</Flex>
			<SimpleGrid
				onClick={onOpen}
				columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
				gap="0.5rem"
				bgColor="blue"
			>
				<Img
					w="17.125rem"
					h="12.25rem"
					src={"images/backgrounds/Image-1.png"}
				/>
				<Img
					w="17.125rem"
					h="12.25rem"
					src={"images/backgrounds/Image-2.png"}
					borderTopRightRadius="0.75rem"
				/>
				<Img
					w="17.125rem"
					h="12.25rem"
					src={"images/backgrounds/Image-3.png"}
				/>
				<Img
					w="17.125rem"
					h="12.25rem"
					src={"images/backgrounds/Image-4.png"}
					borderBottomRightRadius="0.75rem"
				/>
			</SimpleGrid>
		</Flex>
	);
};
