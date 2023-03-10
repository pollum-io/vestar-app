import { Flex, Image, useDisclosure } from "@chakra-ui/react";
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
		<Flex w="100%" h="100%" gap="0.5rem" pb="1.5rem" pt="2rem" onClick={onOpen}>
			<CollectionsModal images={cardImage} isOpen={isOpen} onClose={onClose} />
			<Flex>
				<Image w="34.75rem" h="25rem" src={cardImage?.[0]} alt="" />
			</Flex>
			<Flex flexDirection={'column'} gap="0.5rem">
				<Flex w={"100%"} gap="0.5rem">
					<Image w="19rem" h="12.25rem" src={cardImage?.[1]} alt="" />
					<Image w="19rem" h="12.25rem" src={cardImage?.[2]} alt="" />
				</Flex>
				<Flex w={"100%"} gap="0.5rem">
					<Image w="19rem" h="12.25rem" src={cardImage?.[3]} alt="" />
					<Image w="19rem" h="12.25rem" src={cardImage?.[4]} alt="" />
				</Flex>
			</Flex>
		</Flex>
	);
};
