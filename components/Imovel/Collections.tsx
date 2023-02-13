import { Flex, Img, useDisclosure } from "@chakra-ui/react";
import { CollectionsModal } from "./CollectionsModal";

export const Collections: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w="100%" h="100%" gap="0.5rem" pb="1.5rem" pt="2rem">
      <CollectionsModal isOpen={isOpen} onClose={onClose} />
      <Flex onClick={onOpen}>
        <Img w="70rem" h="25rem" src={"images/backgrounds/Image.png"} />
      </Flex>
      <Flex onClick={onOpen} flexWrap={"wrap"} gap="0.5rem">
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-1.png"} />
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-2.png"} />
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-3.png"} />
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-4.png"} />
      </Flex>
    </Flex>
  );
};
