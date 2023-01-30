import React, { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../../components";

export const OpportunitiesContainer: FunctionComponent = () => {
  return (
    <Flex bgColor="#ffffff" w="100vw" h="100vh">
      <Header>
        <Flex bgColor="blue" h="60rem"></Flex>
      </Header>
    </Flex>
  );
};
