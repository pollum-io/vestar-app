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
			<Modal blockScrollOnMount size="full" isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bgColor={"transparent"}>
					<ModalCloseButton />
					<ModalBody>
						<Carousel images={images} widthValue="98%" heightValue="95vh" />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
