import {
	ModalOverlay,
	Button,
	ModalContent,
	ModalCloseButton,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Modal,
	Img,
} from "@chakra-ui/react";
import { Carousel } from "./Carousel";

interface ICollectionsModal {
	isOpen: boolean;
	onClose: () => void;
	images: any;
}

export const CollectionsModal: React.FC<ICollectionsModal> = props => {
	const { isOpen, onClose, images } = props;
	return (
		<>
			<Modal blockScrollOnMount size="4xl" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent mt="15rem" mr="10rem" bgColor={"transparent"} boxShadow="none">
					<ModalCloseButton right={"-3.5rem"} top={"-2rem"} bgColor={"#ffffff1a"} position={"absolute"} />

					<ModalBody>

						<Carousel modal_images={images} widthValue="58rem" heightValue="30rem" />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
