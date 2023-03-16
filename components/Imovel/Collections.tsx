import { Flex, Image, useDisclosure, SimpleGrid, Img } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchOpportunitiesImages } from "../../services/opportunitiesImages";
import { CollectionsModal } from "./CollectionsModal";
interface ICollections {
	images: any[];
}

export const Collections: React.FC<ICollections> = props => {
	const { images } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [cardImage, setCardImage] = useState<string[]>([])

	useEffect(() => {
		if (images) {
			images.map((picture: string) => {
				fetchOpportunitiesImages(picture).then(res => {
					setCardImage(prevState => [...prevState, res])

				})
			})
		}
	}, [images])

	return (
		<Flex w="100%" h="100%" gap="0.5rem" pb="1.5rem" pt="2rem" onClick={onOpen} justifyContent="center">
			<CollectionsModal images={cardImage} isOpen={isOpen} onClose={onClose} />
			<Flex onClick={onOpen}>
				<Img
					width="34.75rem"
					height="25rem"
					src={cardImage?.[0]}
					borderLeftRadius="0.75rem"
					_hover={{ cursor: "pointer", filter: "brightness(90%)" }}
					transition="200ms"
				/>
			</Flex>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 2 }} gap="0.5rem">
				<Img
					w="17.125rem"
					h="12.25rem"
					src={cardImage?.[1]}
					onClick={onOpen}
					_hover={{ cursor: "pointer", filter: "brightness(90%)" }}
					transition="200ms"
				/>
				<Img
					w="17.125rem"
					h="12.25rem"
					src={cardImage?.[2]}
					borderTopRightRadius="0.75rem"
					onClick={onOpen}
					_hover={{ cursor: "pointer", filter: "brightness(90%)" }}
					transition="200ms"
				/>
				<Img
					w="17.125rem"
					h="12.25rem"
					src={cardImage?.[3]}
					onClick={onOpen}
					_hover={{ cursor: "pointer", filter: "brightness(90%)" }}
					transition="200ms"
				/>
				<Img
					w="17.125rem"
					h="12.25rem"
					src={cardImage?.[4]}
					borderBottomRightRadius="0.75rem"
					onClick={onOpen}
					_hover={{ cursor: "pointer", filter: "brightness(90%)" }}
					transition="200ms"
				/>
			</SimpleGrid>
		</Flex>
	);
};
