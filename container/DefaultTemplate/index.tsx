import { Login } from "../../components";
import { NextPage } from "next";
import { Header } from "../../components/Header";
import { Flex } from "@chakra-ui/react";
import { FunctionComponent, ReactNode } from "react";

interface BaseLayoutProps {
  children?: ReactNode;
}

export const DefaultTemplate: FunctionComponent<BaseLayoutProps> = ({
  children,
}) => {
  return (
    <Flex>
      <Header />
      {children}
    </Flex>
  );
};
