import React, { FunctionComponent, useState } from "react";
import { Flex, Checkbox, Button, Text } from "@chakra-ui/react";
import { useRegister } from "../../hooks/useRegister";
import { DefaultInputs } from "../Inputs/DeafultInput/DefaultInput";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

export const RegisterContent: FunctionComponent = () => {
  const {
    firstStep,
    secondStep,
    isPhysical,
    setFirstStep,
    setSecondStep,
    setIsPhysical,
  } = useRegister();

  const [canSend, setCanSend] = useState(false);

  return (
    <Flex>
      {firstStep ? (
        <Flex flexDirection="column" gap="1.625rem">
          <Flex gap="0.9375rem" fontFamily="Poppins">
            <Checkbox
              spacing="0.75rem"
              color={isPhysical ? "#2D3748" : "#718096"}
              fontStyle="normal"
              isChecked={isPhysical}
              fontWeight={isPhysical ? "500" : "400"}
              fontSize="0.875rem"
              lineHeight="1.25rem"
              borderColor="#E2E8F0"
              onChange={() => setIsPhysical(true)}
            >
              Sou Pessoa Física
            </Checkbox>
            <Checkbox
              spacing="0.75rem"
              color={!isPhysical ? "#2D3748" : "#718096"}
              isChecked={!isPhysical ? true : false}
              fontStyle="normal"
              fontWeight={!isPhysical ? "500" : "400"}
              fontSize="0.875rem"
              lineHeight="1.25rem"
              borderColor="#E2E8F0"
              onChange={() => setIsPhysical(false)}
            >
              Sou Pessoa Jurídica
            </Checkbox>
          </Flex>
          <Flex flexDirection="column" gap="2rem">
            <DefaultInputs />

            <Button
              mt="0.375rem"
              w="9.25rem"
              h="2rem"
              justifyContent="center"
              padding="0.2188rem 1.25rem"
              alignItems="center"
              gap="0.5rem"
              bgColor="#2D3748"
              _hover={{}}
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              borderRadius="0.5rem"
              onClick={() => {
                setSecondStep(true), setFirstStep(false);
              }}
            >
              Prosseguir {<BsArrowRightShort size={22} />}
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex flexDirection="column" gap="1.625rem">
          <Flex flexDirection="column" gap="0.5rem">
            <Flex>
              <Text
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="500"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                color="#2D3748"
              >
                Termos e Condições de Uso
              </Text>
            </Flex>
            <Flex
              borderRadius="0.375rem"
              border="0.0625rem solid #E2E8F0"
              w="47.4375rem"
              h="17.75rem"
              overflowX="hidden"
              overflowY="auto"
              padding="22px 22px 22px 22px"
            >
              <Text
                color="#171923"
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="400"
                fontSize="0.75rem"
                lineHeight="1rem"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur. Pellentesque vel
                malesuada accumsan mattis quis elit lectus vitae. Ut aliquam
                pellentesque nascetur proin eget bibendum penatibus senectus.
                Quis turpis arcu maecenas viverra. Posuere semper duis morbi
                lobortis amet a. Adipiscing cursus in lectus tortor ullamcorper
                eget. Vitae diam quam et euismod. Eget sed metus est pharetra
                euismod est faucibus. Pharetra faucibus posuere volutpat cursus
                velit viverra vitae fringilla. Arcu consectetur viverra non
                tempus. Consequat faucibus tortor bibendum nisl enim accumsan id
                nec quis. Malesuada cursus donec nulla vel condimentum ut augue.
                Auctor venenatis malesuada ultrices diam enim integer vitae
                tincidunt adipiscing. Sed enim neque pellentesque lacus nunc.
                Vitae pellentesque eu in scelerisque. Faucibus quam in maecenas
                phasellus id tempus senectus molestie eros. Dolor nunc vivamus
                neque convallis vestibulum pellentesque urna. Massa proin amet
                iaculis elementum quisque enim. Adipiscing molestie imperdiet
                pellentesque arcu ultrices facilisi dolor phasellus. Velit
                vulputate lacus mauris senectus porta malesuada nibh
                sollicitudin sagittis. Adipiscing cursus in lectus tortor
                ullamcorper eget. Vitae diam quam et euismod. Eget sed metus est
                pharetra euismod est faucibus. Pharetra faucibus posuere
                volutpat cursus velit viverra vitae fringilla. Arcu consectetur
                viverra non tempus. Consequat faucibus tortor bibendum nisl enim
                accumsan id nec quis. Malesuada cursus donec nulla vel
                condimentum ut augue. Auctor venenatis malesuada ultrices diam
                enim integer vitae tincidunt adipiscing. eros. Dolor nunc
                vivamus neque convallis vestibulum pellentesque urna. Massa
                proin amet iaculis elementum quisque enim. Adipiscing molestie
                imperdiet pellentesque arcu ultrices facilisi dolor phasellus.
                Velit vulputate lacus mauris senectus porta malesuada nibh
                sollicitudin sagittis. Adipiscing cursus in lectus tortor
                ullamcorper eget. Vitae diam quam et euismod. Eget sed metus est
                pharetra euismod est faucibus. Pharetra faucibus posuere
                volutpat cursus velit viverra vitae fringilla. Arcu consectetur
                viverra non tempus. Consequat faucibus tortor bibendum nisl enim
                accumsan id nec quis. Malesuada cursus donec nulla vel
                condimentum ut augue. Auctor venenatis malesuada ultrices diam
                enim integer vitae tincidunt adipiscing.
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column" fontFamily="Poppins" gap="2.125rem">
            <Flex>
              <Checkbox
                defaultChecked={false}
                spacing="0.75rem"
                color="#2D3748"
                fontStyle="normal"
                fontWeight="400"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                borderColor="#E2E8F0"
                onChange={() => {
                  setCanSend(!canSend), setSecondStep(false);
                }}
              >
                Declaro que li e aceito os termos acima.
              </Checkbox>
            </Flex>
            <Flex gap="1.5rem">
              <Button
                mt="0.375rem"
                w="9.25rem"
                h="2rem"
                justifyContent="center"
                padding="0.2188rem 1.25rem"
                alignItems="center"
                gap="0.5rem"
                bgColor="#2D3748"
                _hover={{}}
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="500"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                borderRadius="0.5rem"
                onClick={() => {
                  setFirstStep(true), setSecondStep(false);
                }}
              >
                <BsArrowLeftShort size={22} />
                Voltar
              </Button>
              <Button
                mt="0.375rem"
                w="9.25rem"
                h="2rem"
                disabled={!canSend ? true : false}
                justifyContent="center"
                padding="0.2188rem 1.25rem"
                alignItems="center"
                gap="0.5rem"
                bgColor="#2D3748"
                _hover={{}}
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="500"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                borderRadius="0.5rem"
              >
                Enviar Cadastro
              </Button>
              <Button onClick={() => console.log(canSend)}>ass</Button>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
