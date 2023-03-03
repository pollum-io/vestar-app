import React, { FunctionComponent, useState } from "react";
import {
  Button,
  Checkbox,
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Link,
  Text,
} from "@chakra-ui/react";
import { DefaultTemplate } from "../DefaultTemplate";
import { PaymentMethods, DefaultInput } from "../../components";
import { RiCheckFill } from "react-icons/ri";

export const InvestContainer: FunctionComponent = () => {
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [counter, setCounter] = useState<any>(1);

  return (
    <DefaultTemplate>
      <Flex flexDirection="column" bgColor="#ffffff">
        <Flex
          w="100%"
          gap="5%"
          px="5.5%"
          mt="6.25rem"
          justifyContent="space-between"
          mb="9.9375rem"
        >
          <Flex flexDirection="column" gap="4.25rem" w="70%">
            <Flex flexDirection="column" gap="1rem">
              <Flex flexDirection="column" gap="1.5rem">
                <Text
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="1.5rem"
                  lineHeight="2rem"
                  color="#171923"
                >
                  Resumo do investimento
                </Text>
                <Flex
                  fontFamily="Poppins"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  alignItems="center"
                  color="#171923"
                  justifyContent="space-between"
                  maxWidth="41.875rem"
                  pr="1rem"
                >
                  <Text>Imóvel</Text>
                  <Flex justifyContent="space-between" w="49%" pr="3.1rem">
                    <Text>Cota</Text>
                    <Text>Quantidade</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                maxWidth="41.875rem"
                w="100%"
                h="4.25rem"
                bgColor="#FFFFFF"
                boxShadow="0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.05)"
                borderRadius="0.75rem"
                justifyContent="space-between"
                pr="1rem"
              >
                <Flex gap="0.9375rem">
                  <Flex
                    w="5.6875rem"
                    h="100%"
                    borderRadius="0.75rem 0rem 0rem 0.75rem"
                  >
                    <Img
                      src="images/backgrounds/investBackground.png"
                      borderRadius="0.75rem 0rem 0rem 0.75rem"
                    />
                  </Flex>
                  <Flex
                    h="100%"
                    justifyContent="center"
                    fontFamily="Poppins"
                    flexDirection="column"
                  >
                    <Text
                      fontWeight="500"
                      fontSize="1rem"
                      lineHeight="1.5rem"
                      color="#171923"
                    >
                      Crypto Plaza 502
                    </Text>
                    <Text
                      fontWeight="400"
                      fontSize="0.75rem"
                      lineHeight="1rem"
                      color="#2D3748"
                    >
                      Residencial
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justifyContent="space-between"
                  gap="0.5rem"
                  alignItems="center"
                  w="49%"
                >
                  <Flex
                    flexDirection="column"
                    gap="0.1875rem"
                    fontFamily="Poppins"
                  >
                    <Text
                      fontWeight="500"
                      fontSize="1rem"
                      lineHeight="1.5rem"
                      color="#007D99"
                    >
                      cota_name
                    </Text>
                    <Text
                      fontWeight="400"
                      fontSize="0.75rem"
                      lineHeight="1rem"
                      color="#2D3748"
                    >
                      R$ 150
                    </Text>
                  </Flex>
                  <Flex flexDirection="column" gap="0.1875rem">
                    <InputGroup borderRadius="0.375rem">
                      <InputLeftAddon
                        as={Button}
                        justifyContent="center"
                        alignItems="center"
                        isDisabled={counter === 1}
                        w="2.5rem"
                        color="#171923"
                        _disabled={{
                          color: "#808080",
                          border: "0.0625rem solid #E2E8F0",
                        }}
                        _hover={
                          counter === 1
                            ? { opacity: "0.3" }
                            : { bgColor: "#f4f7fa" }
                        }
                        border="0.0625rem solid #E2E8F0"
                        onClick={() => setCounter(counter - 1)}
                        h="2rem"
                        fontSize="0.875rem"
                        bgColor="#ffffff"
                      >
                        -
                      </InputLeftAddon>
                      <Input
                        type="number"
                        placeholder={counter}
                        _placeholder={{ color: "#171923" }}
                        fontFamily="Poppins"
                        fontSize="0.875rem"
                        lineHeight="1.25rem"
                        textAlign="center"
                        color="#171923"
                        w="3.5rem"
                        border="0.0625rem solid #E2E8F0"
                        _hover={{}}
                        _focus={{ boxShadow: "none", borderColor: "#E2E8F0" }}
                        h="2rem"
                      />
                      <InputRightAddon
                        as={Button}
                        justifyContent="center"
                        alignItems="center"
                        w="2.5rem"
                        isDisabled={counter === 5}
                        border="0.0625rem solid #E2E8F0"
                        borderLeft="0.0625rem solid #E2E8F0"
                        color="#171923"
                        _disabled={{
                          color: "#808080",
                          border: "0.0625rem solid #E2E8F0",
                        }}
                        _hover={
                          counter === 5
                            ? { opacity: "0.3" }
                            : { bgColor: "#f4f7fa" }
                        }
                        onClick={() => setCounter(counter + 1)}
                        h="2rem"
                        fontSize="0.875rem"
                        bgColor="#ffffff"
                      >
                        +
                      </InputRightAddon>
                    </InputGroup>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDirection="column" gap="1.5rem">
              <Text
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="600"
                fontSize="1.5rem"
                lineHeight="2rem"
                color="#171923"
              >
                Selecione a forma de pagamento
              </Text>
              <PaymentMethods />
            </Flex>
          </Flex>
          <Flex w="30%" justifyContent="end">
            <Flex
              padding="1.5rem"
              w="23.125rem"
              fontFamily="Poppins"
              h="max-content"
              bg="#007D99"
              boxShadow="0rem 1.25rem 1.5625rem rgba(31, 41, 55, 0.1), 0rem 0.625rem 0.625rem rgba(31, 41, 55, 0.04)"
              borderRadius="0.75rem"
              gap="1rem"
              flexDirection="column"
              color="#FFFFFF"
            >
              <Text fontWeight="500" fontSize="1.25rem" lineHeight="2rem">
                Confirmar dados
              </Text>
              <Flex
                justifyContent="space-between"
                fontSize="1rem"
                lineHeight="1.5rem"
                fontWeight="400"
              >
                <Text>cota_name</Text>
                <Text>R$150</Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                fontSize="1rem"
                lineHeight="1.5rem"
                fontWeight="500"
              >
                <Text>Total</Text>
                <Text>R$150</Text>
              </Flex>
              <Flex w="100%" bgColor="#4BA3B7" h="0.0625rem" />

              <DefaultInput
                color="#FFFFFF"
                title="Sua assinatura digital"
                placeholder="Insira aqui"
                bgColor="#1789A3"
                placeholderColor="rgba(255, 255, 255, 0.48)"
                border="0.0625rem solid #4BA3B7"
                inputColor="#ffffff"
              />
              <Flex gap="0.5rem" alignItems="center">
                <Checkbox
                  defaultChecked={false}
                  variant="white"
                  spacing="0.75rem"
                  icon={
                    <RiCheckFill
                      size={18}
                      color={isTerms ? "#007D99" : "#1789A3"}
                    />
                  }
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  onChange={() => setIsTerms(!isTerms)}
                  w="max-content"
                />
                <Text>
                  Declaro que li e aceito os{" "}
                  <Link
                    textDecoration="underline"
                    _hover={{ fontWeight: "500" }}
                  >
                    Termos de Compra
                  </Link>
                  .
                </Text>
              </Flex>
              <Flex mt="1rem">
                <Button
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  isDisabled={!isTerms}
                  h="2.5rem"
                  bgColor="#FFFFFF"
                  borderRadius="0.5rem"
                  fontFamily="Poppins"
                  fontWeight="500"
                  fontSize="1rem"
                  lineHeight="1.5rem"
                  color="#007088"
                  _hover={
                    !isTerms ? { opacity: "0.3" } : { bgColor: "#EDF2F7" }
                  }
                >
                  Confirmar Investimento
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </DefaultTemplate>
  );
};
