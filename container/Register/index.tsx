import React, { FunctionComponent, useEffect } from "react";
import { RegisterSteps } from "../../components/Register/RegisterSteps";
import { Flex, Img, Text } from "@chakra-ui/react";
import { useRegister } from "../../hooks/useRegister";
import { RegisterContent } from "../../components/Register/RegisterContent";

export const RegisterContainer: FunctionComponent = () => {
  const { isPhysical } = useRegister();
  useEffect(() => {
    console.log(isPhysical);
  }, [isPhysical]);

  return (
    <Flex w="100vw" h="100vh" bgColor="#ffffff" justifyContent="center">
      <Flex w="100%" h="100%" flexDirection="column" gap="2.875rem">
        <Flex flexDirection="column" gap="2.75rem">
          <Flex
            w="100%"
            h="9.8125rem"
            bgColor="#1789A3"
            borderRadius="0px 0px 12px 12px"
            alignItems="flex-end"
            pl="8.0625rem"
            justifyContent="space-between"
          >
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="1.875rem"
              lineHeight="2.25rem"
              mb="2.6875rem"
              color="#ffffff"
            >
              Olá! Antes de seguir, precisamos de alguns dados
            </Text>
            <Img
              w="max-content"
              h="100%"
              src="images/backgrounds/LivnPattern.png"
            />
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <RegisterSteps />
          </Flex>
        </Flex>
        <Flex
          pl="27%"
          w="100%"
          h="100%"
          alignItems="flex-start"
          flexDirection="column"
        >
          <RegisterContent />
        </Flex>
      </Flex>
    </Flex>
  );
};
