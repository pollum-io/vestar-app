import { Flex, Text, ButtonProps, Img, Input, Button } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const Login: FunctionComponent<ButtonProps> = () => {
  const { push } = useRouter();
  const { t } = useTranslation();

  return (
    <Flex
      bgColor="#ffffff"
      width="100vw"
      height="100vh"
      justifyContent="space-between"
    >
      <Flex
        w="50%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        fontFamily="Poppins"
      >
        <Flex flexDirection="column" w="22rem" justifyContent="center">
          <Flex flexDirection="column" gap="2">
            <Img
              w="max-content"
              h="max-content"
              src="images/backgrounds/LivnLogo.png"
            />
            <Text
              color="#1789A3"
              fontSize="0.875rem"
              fontWeight="normal"
              lineHeight="150%"
              fontStyle="normal"
            >
              {t("login.liveInvesting")}
            </Text>
          </Flex>
          <Flex flexDirection="column" mt="1rem" gap="12px">
            <Text
              flexDirection="column"
              fontStyle="normal"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              color="#2D3748"
            >
              E-mail
            </Text>
            <Input
              placeholder="Hello"
              _placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
              border="0.0938rem solid #E2E8F0"
              _hover={{}}
              _focus={{}}
              fontStyle="normal"
              fontWeight="400"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              borderRadius="0.375rem"
              h="2rem"
              pl="0.7rem"
              color="#2D3748"
            />
          </Flex>
          <Flex flexDirection="column" mt="1.5rem" gap="0.75rem">
            <Flex justifyContent="space-between" alignItems="center">
              <Text
                flexDirection="column"
                fontStyle="normal"
                fontWeight="500"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                color="#2D3748"
              >
                {t("login.password")}
              </Text>
              <Text
                flexDirection="column"
                fontStyle="normal"
                fontWeight="500"
                fontSize="0.75rem"
                lineHeight="1rem"
                color="#007D99"
                _hover={{ cursor: "pointer" }}
                onClick={() => push("/forgot_password")}
              >
                {t("login.forgot")}
              </Text>
            </Flex>
            <Input
              placeholder="Hello"
              _placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
              border="0.0938rem solid #E2E8F0"
              _hover={{}}
              _focus={{}}
              fontStyle="normal"
              fontWeight="400"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              borderRadius="0.375rem"
              h="2rem"
              pl="0.7rem"
              color="#2D3748"
            />
          </Flex>
          <Flex mt="2.5rem">
            <Button
              fontStyle="normal"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              color="#FFFFFF"
              border="none"
              borderRadius="0.5rem"
              w="100%"
              h="2.2rem"
              bgColor="#1789A3"
              _hover={{
                cursor: "pointer",
                bgColor: "#007D99",
                boxShadow:
                  "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
              }}
            >
              Login
            </Button>
          </Flex>
          <Flex bgColor="#E2E8F0" h="0.0625rem" w="100%" mt="2rem" />
          <Flex
            justifyContent="center"
            alignItems="center"
            mt="1.5rem"
            gap="1rem"
          >
            <Text
              fontStyle="normal"
              fontWeight="normal"
              fontSize="0.75rem"
              lineHeight="150%"
              color="#2D3748"
            >
              {t("login.noAccount")}
            </Text>
            <Text
              fontStyle="normal"
              fontWeight="500"
              fontSize="0.75rem"
              lineHeight="1rem"
              color="#007D99"
              _hover={{ cursor: "pointer" }}
              onClick={() => push("/register")}
            >
              {t("login.register")}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex h="100%" w="max-content">
        <Img
          src="images/backgrounds/LoginBackground.png"
          h="100%"
          w="max-content"
        />
      </Flex>
    </Flex>
  );
};
