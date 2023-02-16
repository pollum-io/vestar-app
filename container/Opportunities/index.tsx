import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { MenuInputs } from "../../components";
import { OpportunitiesCards } from "../../components";

export const OpportunitiesContainer: FunctionComponent = () => {
  return (
    <DefaultTemplate>
      <Flex flexDirection="column" bgColor="#ffffff">
        <Flex w="100%">
          <Img w="100%" h="21.3125rem" src="images/opportunitiesBanner.png" />
        </Flex>
        <Flex
          px="1.5rem"
          justifyContent="space-between"
          mt="2.9375rem"
          alignItems="center"
        >
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="0.875rem"
            lineHeight="1.25rem"
            color="#2D3748"
          >
            Ordenar por
          </Text>
          <MenuInputs />
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="0.875rem"
            lineHeight="1.25rem"
            color="#2D3748"
          >
            147 resultados
          </Text>
        </Flex>
        <Flex
          mt="2.9375rem"
          px="1.5rem"
          w="100%"
          justifyContent="center"
          mb="11.0625rem"
          alignItems="center"
        >
          <OpportunitiesCards />
        </Flex>
      </Flex>
    </DefaultTemplate>
  );
};
