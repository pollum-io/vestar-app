import React, { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/react";

export const Header: FunctionComponent = () => {
  const paths = [
    {
      name: "Opportunities",
      path: "/opportunities",
    },
    {
      name: "",
      path: "/opportunities",
    },
    {
      name: "Opportunities",
      path: "/opportunities",
    },
    {
      name: "Opportunities",
      path: "/opportunities",
    },
  ];

  return (
    <Flex flexDirection="column" justifyContent="space-between" h="100%">
      <Flex
        w="100vw"
        h="4.75rem"
        borderBottom="1px solid #E2E8F0"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.05)"
      ></Flex>
      <Flex
        w="100vw"
        bgColor="#1789A3"
        h="15.0625rem"
        borderTopRadius="0.75rem"
      ></Flex>
    </Flex>
  );
};
