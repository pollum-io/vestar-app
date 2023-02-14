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
