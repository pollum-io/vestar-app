import { Flex, Image, Img, Text } from "@chakra-ui/react";
import { FooterLinks } from "./FooterLinks";

export const Footer: React.FC = () => {
  return (
    <Flex bgColor="#ffffff">
      <Flex
        w="100vw"
        h="15.0625rem"
        borderTopRadius="2xl"
        bgColor={"#1789A3"}
        px="4rem"
        py="3rem"
        gap="10rem"
      >
        <Flex flexDir={"column"}>
          <Img src={"images/livnlogotext.png"} />
          <Text fontSize={"sm"} fontWeight="400">
            Viva investindo
          </Text>
        </Flex>
        <Flex>
          <FooterLinks />
        </Flex>
      </Flex>
    </Flex>
  );
};
