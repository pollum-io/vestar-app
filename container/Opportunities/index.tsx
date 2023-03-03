import { Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { MenuInputs } from "../../components";
import { OpportunitiesCards } from "../../components";

export const OpportunitiesContainer: FunctionComponent = () => {
  return (
    <DefaultTemplate>
      <Flex
        flexDirection="column"
        bgColor="#ffffff"
        mb="11.0625rem"
        justifyContent="center"
      >
        <Flex w="100%">
          <Img w="100%" h="21.3125rem" src="images/opportunitiesBanner.png" />
        </Flex>
        <Flex
          px="1.5rem"
          mt="2.9375rem"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            alignItems={[
              "unset",
              "unset",
              "unset",
              "start",
              "center",
              "center",
            ]}
            flexWrap="wrap"
            gap="1.5rem"
            flexDirection={["unset", "unset", "unset", "column", "row", "row"]}
            fontFamily="Poppins"
          >
            <Text fontSize="0.875rem" lineHeight="1.25rem" color="#2D3748">
              Ordenar por
            </Text>

            <Flex
              alignItems={[
                "unset",
                "unset",
                "unset",
                "start",
                "center",
                "center",
              ]}
              flexWrap="wrap"
              gap="1.9375rem"
              flexDirection={[
                "unset",
                "unset",
                "unset",
                "column",
                "row",
                "row",
              ]}
            >
              <MenuInputs />
              <Text fontSize="0.875rem" lineHeight="1.25rem" color="#2D3748">
                147 resultados
              </Text>
            </Flex>
          </Flex>
          <Flex mt="2.9375rem" w="100%" justifyContent="center">
            <OpportunitiesCards />
          </Flex>
        </Flex>
      </Flex>
    </DefaultTemplate>
  );
};
