import React, { FunctionComponent } from "react";
import { Flex, Text, Input } from "@chakra-ui/react";
import { useRegister } from "../../../hooks/useRegister";
import { IDefaultInput } from "./dto";
import { useTranslation } from "react-i18next";

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
        placeholder={placeholder as string}
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
  const { t } = useTranslation();

  return (
    <Flex flexDirection="column" gap="1.5rem">
      <DefaultInput
        title={
          isPhysical ? t("register.fullName") : t("register.corporateName")
        }
        inputSize="20rem"
        placeholder={isPhysical ? t("inputs.noAbb") : t("inputs.insertHere")}
      />
      <DefaultInput
        title={
          isPhysical ? t("register.birthDate") : t("register.nationalRegister")
        }
        inputSize={isPhysical ? "9.875rem" : "11rem"}
        placeholder={isPhysical ? t("inputs.date") : "00.000.000/0000-00"}
        type="date"
      />
      <DefaultInput
        title={isPhysical ? t("register.socialNumber") : t("register.federal")}
        inputSize={isPhysical ? "9.875rem" : "20rem"}
        placeholder={isPhysical ? "000.000.000-00" : t("inputs.insertHere")}
      />
      <DefaultInput
        title={t("register.whoInvited")}
        inputSize="20rem"
        placeholder={t("inputs.insertHere")}
      />
    </Flex>
  );
};
