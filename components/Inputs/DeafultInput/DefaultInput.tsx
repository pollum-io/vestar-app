import React, { FunctionComponent } from "react";
import { Flex, Text, Input } from "@chakra-ui/react";
import { useRegister } from "../../../hooks/useRegister";
import { IDefaultInput } from "./dto";

const DefaultInput: FunctionComponent<IDefaultInput> = ({
  title,
  inputSize,
  placeholder,
  type,
}) => {
  return (
    <Flex flexDirection="column" fontFamily="Poppins" gap="0.5rem">
      <Text
        fontStyle="normal"
        fontWeight="500"
        fontSize="0.875rem"
        lineHeight="1.25rem"
        color="#2D3748"
      >
        {title}
      </Text>
      <Input
        placeholder={placeholder}
        _placeholder={{ color: "rgba(0, 0, 0, 0.36)", fontFamily: "Poppins" }}
        border="0.0938rem solid #E2E8F0"
        _hover={{}}
        fontStyle="normal"
        fontWeight="400"
        w={inputSize || ""}
        fontSize="0.875rem"
        lineHeight="1.25rem"
        borderRadius="0.375rem"
        h="2rem"
        pl="0.7rem"
        color="#2D3748"
        type={type || "text"}
      />
    </Flex>
  );
};

export const DefaultInputs: FunctionComponent = () => {
  const { isPhysical } = useRegister();

  return (
    <Flex flexDirection="column" gap="1.5rem">
      <DefaultInput
        title={isPhysical ? "Nome Completo" : "Razão Social"}
        inputSize="20rem"
        placeholder={isPhysical ? "Sem abreviações" : "Insira aqui"}
      />
      <DefaultInput
        title={isPhysical ? "Data de Nascimento" : "CNPJ"}
        inputSize={isPhysical ? "9.875rem" : "11rem"}
        placeholder={isPhysical ? "dd/mm/aaaa" : "00.000.000/0000-00"}
        type="date"
      />
      <DefaultInput
        title={isPhysical ? "CPF" : "UF"}
        inputSize={isPhysical ? "9.875rem" : "20rem"}
        placeholder={isPhysical ? "000.000.000-00" : "Insira aqui"}
      />
      <DefaultInput
        title="Quem convidou você para a LIVN?"
        inputSize="20rem"
        placeholder="Insira aqui"
      />
    </Flex>
  );
};
