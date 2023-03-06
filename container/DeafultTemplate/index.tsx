import React, { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IDefaultTemplate } from "./dto";
import { Header } from "../../components";

export const DefaultTemplate: FunctionComponent<IDefaultTemplate> = ({
  children,
  pageHeight,
  pageWidth,
  alignValue,
}) => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Header />
      </Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
};
