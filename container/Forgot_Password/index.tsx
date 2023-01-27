import {
  Flex,
  Text,
  Button,
  Img,
  Input,
  Collapse,
  PinInput,
  PinInputField,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Forgot_PasswordContainer = () => {
  const [isCode, setIsCode] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);
  const [validCode, setValidCode] = useState<boolean>(false);
  const [showFirst, setShowFirst] = useState<boolean>(false);
  const [showSecond, setShowSecond] = useState<boolean>(false);
  const { push } = useRouter();

  return (
    <Flex
      bgColor="#ffffff"
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        w="20rem"
        justifyContent="center"
        fontFamily="Poppins"
      >
        <Flex flexDirection="column" gap="0.625rem">
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
            Redefinir senha
          </Text>
        </Flex>
        <Flex flexDirection="column" mt="1rem" gap="1.5rem">
          <Text
            fontStyle="normal"
            fontWeight="400"
            fontSize="12px"
            lineHeight="150%"
            color="#2D3748"
            display={isChange ? "none" : "flex"}
          >
            {isCode
              ? "Digite o código de 4 dígitos que você recebeu em seu e-mail."
              : "Digite seu e-mail para o processo de verificação, enviaremos um código para o endereço informado."}
          </Text>
          <Flex flexDirection="column" gap="0.5rem">
            <Text
              flexDirection="column"
              fontStyle="normal"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              color="#2D3748"
              display={isCode && !isChange ? "none" : "flex"}
            >
              {isChange ? "Nova senha" : "E-mail"}
            </Text>
            {isCode && !isChange ? (
              <HStack justifyContent="space-between">
                <PinInput
                  type="number"
                  onChange={e => setValidCode(e.length === 4)}
                >
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    _hover={{}}
                    color="#2D3748"
                  />
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    alignSelf="stretch"
                    _hover={{}}
                    color="#2D3748"
                  />
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    _hover={{}}
                    color="#2D3748"
                  />
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    _hover={{}}
                    color="#2D3748"
                  />
                </PinInput>
              </HStack>
            ) : (
              <InputGroup size="md">
                <Input
                  placeholder={isChange ? "Senha" : "exemplo@exemplo.com"}
                  _placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
                  border="0.0938rem solid #E2E8F0"
                  type={isChange ? (showFirst ? "text" : "password") : "text"}
                  _hover={{}}
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  borderRadius="0.375rem"
                  h="2rem"
                  pl="0.7rem"
                  color="#2D3748"
                />
                <InputRightElement
                  display={isChange ? "flex" : "none"}
                  onClick={() => setShowFirst(!showFirst)}
                  alignItems="center"
                  _hover={{ cursor: "pointer" }}
                  pb="0.55rem"
                >
                  {showFirst ? (
                    <AiOutlineEye size={25} color="#2D3748" />
                  ) : (
                    <AiOutlineEyeInvisible size={25} color="#2D3748" />
                  )}
                </InputRightElement>
              </InputGroup>
            )}
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="400"
              fontSize="0.75rem"
              lineHeight="1rem"
              color="rgba(0, 0, 0, 0.36)"
              display={isChange ? "flex" : "none"}
            >
              Deve conter no mínimo X caracteres incluindo números e letras
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            gap="0.5rem"
            display={isChange ? "flex" : "none"}
          >
            <Text
              flexDirection="column"
              fontStyle="normal"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              color="#2D3748"
            >
              Confirmar nova senha
            </Text>
            {isCode && !isChange ? (
              <HStack justifyContent="space-between">
                <PinInput
                  type="number"
                  onChange={e => setValidCode(e.length === 4)}
                >
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    _hover={{}}
                    color="#2D3748"
                  />
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    alignSelf="stretch"
                    _hover={{}}
                    color="#2D3748"
                  />
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    _hover={{}}
                    color="#2D3748"
                  />
                  <PinInputField
                    border="1px solid #E2E8F0"
                    borderRadius="0.375rem"
                    w="4.25rem"
                    h="2rem"
                    _hover={{}}
                    color="#2D3748"
                  />
                </PinInput>
              </HStack>
            ) : (
              <InputGroup size="md">
                <Input
                  placeholder={isChange ? "Senha" : "exemplo@exemplo.com"}
                  _placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
                  border="0.0938rem solid #E2E8F0"
                  type={isChange ? (showSecond ? "text" : "password") : "text"}
                  _hover={{}}
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  borderRadius="0.375rem"
                  h="2rem"
                  pl="0.7rem"
                  color="#2D3748"
                />
                <InputRightElement
                  display={isChange ? "flex" : "none"}
                  onClick={() => setShowSecond(!showSecond)}
                  alignItems="center"
                  _hover={{ cursor: "pointer" }}
                  pb="0.55rem"
                >
                  {showSecond ? (
                    <AiOutlineEye size={25} color="#2D3748" />
                  ) : (
                    <AiOutlineEyeInvisible size={25} color="#2D3748" />
                  )}
                </InputRightElement>
              </InputGroup>
            )}
          </Flex>
        </Flex>

        <Flex mt="2rem">
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
            _hover={
              validCode || !isCode
                ? {
                    cursor: "pointer",
                    bgColor: "#007D99",
                    boxShadow:
                      "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
                  }
                : { opacity: "0.3" }
            }
            onClick={
              validCode ? () => setIsChange(true) : () => setIsCode(!isCode)
            }
            disabled={isCode ? !validCode : false}
          >
            {isCode ? (!isChange ? "Verificar" : "Confirmar") : "Enviar código"}
          </Button>
        </Flex>
        <Collapse in={!isChange}>
          <Flex flexDirection="column" mt="2rem">
            <Flex bgColor="#E2E8F0" h="0.0625rem" w="100%" />
            <Flex
              justifyContent="center"
              alignItems="center"
              mt="1.5rem"
              gap="1rem"
            >
              <Text
                fontStyle="normal"
                fontWeight="normal"
                fontSize="12px"
                lineHeight="150%"
                color="#2D3748"
                display={!isCode ? "none" : "flex"}
              >
                Não recebeu o código?
              </Text>
              <Text
                fontStyle="normal"
                fontWeight="500"
                fontSize="0.75rem"
                lineHeight="1rem"
                color="#007D99"
                _hover={{ cursor: "pointer" }}
                onClick={!isCode ? () => push("/") : () => console.log()}
              >
                {!isCode ? "Voltar ao Login" : "Reenviar Código"}
              </Text>
            </Flex>
          </Flex>
        </Collapse>
      </Flex>
    </Flex>
  );
};
