import { Flex, Img } from "@chakra-ui/react";

export const Collections: React.FC = () => {
  return (
    <Flex w="100%" h="100%" gap="0.5rem" pb="1.5rem" pt="2rem">
      <Flex>
        <Img w="70rem" h="25rem" src={"images/backgrounds/Image.png"} />
      </Flex>
      <Flex flexWrap={"wrap"} gap="0.5rem">
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-1.png"} />
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-1.png"} />
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-1.png"} />
        <Img w="19rem" h="12.25rem" src={"images/backgrounds/Image-1.png"} />
      </Flex>
    </Flex>
  );
};
