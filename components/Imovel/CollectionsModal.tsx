import {
	ModalOverlay,
	ModalContent,
	ModalBody,
	Modal,
	Flex,
	Text,
} from "@chakra-ui/react";
import { Carousel } from "./Carousel";
import { GrFormClose } from "react-icons/gr";

export interface ICollectionsModal {
	isOpen: boolean;
	onClose: () => void;
}

const images = [
	{ id: 0, image: "images/backgrounds/Image.png" },
	{ id: 1, image: "images/backgrounds/Image-1.png" },
	{ id: 2, image: "images/backgrounds/Image-2.png" },
	{ id: 3, image: "images/backgrounds/Image-3.png" },
	{ id: 4, image: "images/backgrounds/Image-4.png" },
];

export const CollectionsModal: React.FC<ICollectionsModal> = props => {
	const { isOpen, onClose } = props;

	return (
		<>
			<Modal blockScrollOnMount size="full" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bgColor={"#ffffff"} h="100%">
					<ModalBody>
						<Flex
							justifyContent="center"
							alignItems="center"
							h="100%"
							flexDirection="column"
							gap="1.125rem"
						>
							<Flex
								gap="1rem"
								color="#171923"
								w="95%"
								maxWidth="70rem"
								justifyContent="end"
								alignItems="center"
							>
								<Text fontFamily="Poppins" fontSize="1rem" lineHeight="1.5rem">
									Fechar
								</Text>
								<Flex _hover={{ cursor: "pointer" }}>
									<GrFormClose size={22} onClick={onClose} />
								</Flex>
							</Flex>
							<Carousel
								images={images}
								widthValue="55.8125rem"
								heightValue="37.5rem"
							/>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
