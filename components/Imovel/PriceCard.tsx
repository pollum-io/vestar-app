import { Flex, Icon, Text } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";

interface IPriceCard {
  axisY: string;
}

export const PriceCard: React.FC<IPriceCard> = props => {
  const { axisY } = props;

  return (
    <Flex
      w="23.125rem"
      h="21.5rem"
      bgColor={"#007D99"}
      p="1.5rem"
      flexDir={"column"}
      borderRadius="0.75rem"
      position={"absolute"}
      right="20"
      top={axisY}
      boxShadow="0px 20px 25px rgba(31, 41, 55, 0.1), 0px 10px 10px rgba(31, 41, 55, 0.04);"
    >
      <Text fontSize={"xl"} fontWeight="500">
        Nome da Cota
      </Text>
      <Flex
        flexDir={"column"}
        my="1rem"
        bgColor={"#1789A3"}
        py="0.5rem"
        px="1rem"
        borderRadius="0.5rem"
      >
        <Text fontSize={"xs"} fontWeight="500">
          Selecione a Quantidade
        </Text>
        <Text fontSize={"sm"} fontWeight="400">
          1 cota
        </Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        pb="1rem"
        mb="1rem"
        borderBottom="1px solid #4BA3B7"
      >
        <Text fontWeight={"500"}>Total</Text>
        <Text fontWeight={"500"}>R$150</Text>
      </Flex>
      <Flex flexDir={"column"} gap="0.5rem">
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            Endereço da cota
          </Text>
          <Flex alignItems={"center"} gap="0.5rem">
            <Text fontSize={"md"} fontWeight="400">
              0xe42c...e306
            </Text>
            <Icon color={"#4BA3B7"} w={4} h={4} as={FiCopy} />
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            Preço unitário
          </Text>
          <Text fontSize={"md"} fontWeight="400">
            R$150
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            Cotas emitidas
          </Text>
          <Text fontSize={"md"} fontWeight="400">
            237
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            Cotas disponíveis
          </Text>
          <Text fontSize={"md"} fontWeight="400">
            13
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
