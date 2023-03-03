import { Flex, Image, Img } from "@chakra-ui/react";
import { HamburguerMenu } from "./HamburguerMenu";
import { HeaderLinks } from "./HeaderLinks";

export const Header: React.FC = () => {
  return (
    <Flex
      w="100%"
      h={"4.75rem"}
      flexDir="row"
      alignItems={"center"}
      justifyContent="space-around"
      bgColor={"#FFFFFF"}
      gap="24rem"
    >
      <Flex>
        <Img src={"images/livnlogo.png"} w="5" h="7" />
      </Flex>
      <Flex>
        <HeaderLinks />
      </Flex>
      <Flex>
        <HamburguerMenu />
      </Flex>
    </Flex>
  );
};
