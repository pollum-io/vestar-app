import { Button, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { useTranslation } from "react-i18next";
interface IPriceCard {
  axisY: string;
}

export const PriceCard: React.FC<IPriceCard> = props => {
  const { axisY } = props;
  const [isInvestidor, setIsInvestidor] = useState(false);
  const { t } = useTranslation();

  return (
    <Flex
      w="23.125rem"
      h={"max"}
      bgColor={"#007D99"}
      p="1.5rem"
      flexDir={"column"}
      borderRadius="0.75rem"
      position={"absolute"}
      right="20"
      top={axisY}
      boxShadow="0px 20px 25px rgba(31, 41, 55, 0.1), 0px 10px 10px rgba(31, 41, 55, 0.04);"
    >
      <Text fontSize={"xl"} fontWeight="500">
        Nome da Cota
      </Text>
      <Flex
        my="1rem"
        bgColor={"#1789A3"}
        py="0.5rem"
        px="1rem"
        borderRadius="0.5rem"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Flex flexDir={"column"}>
          <Text fontSize={"xs"} fontWeight="500">
            {t("opportunitieDetails.select")}
          </Text>
          <Text fontSize={"sm"} fontWeight="400">
            1 {t("opportunitieDetails.quota")}
          </Text>
        </Flex>
        {isInvestidor && (
          <Flex>
            <Img _hover={{ cursor: "pointer" }} src={"icons/PlusIcon.png"} />
            <Img _hover={{ cursor: "pointer" }} src={"icons/MinusIcon.png"} />
          </Flex>
        )}
      </Flex>
      <Flex
        flexDirection={"column"}
        pb="1rem"
        mb="1rem"
        borderBottom="1px solid #4BA3B7"
      >
        <Flex justifyContent={"space-between"} w="100%">
          <Text fontWeight={"500"}>{t("opportunitieDetails.total")}</Text>
          <Text fontWeight={"500"}>{t("opportunities.card.sign")}150</Text>
        </Flex>
        {isInvestidor && (
          <Flex flexDir={"column"} alignItems="center" mt="1rem">
            <Button
              fontWeight={"500"}
              fontSize={"md"}
              bgColor="#FFFFFF"
              color="#007088"
              w="100%"
              px="10px"
              py="16px"
              mb={"1rem"}
            >
              {t("opportunitieDetails.total")}
            </Button>
            <Text fontWeight={"400"} fontSize={"xs"}>
              {t("opportunitieDetails.wontBe")}
            </Text>
          </Flex>
        )}
      </Flex>
      <Flex flexDir={"column"} gap="0.5rem">
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            {t("opportunitieDetails.quotaAddress")}
          </Text>
          <Flex alignItems={"center"} gap="0.5rem">
            <Text fontSize={"md"} fontWeight="400">
              0xe42c...e306
            </Text>
            <Icon color={"#4BA3B7"} w={4} h={4} as={FiCopy} />
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            {t("opportunitieDetails.unit")}
          </Text>
          <Text fontSize={"md"} fontWeight="400">
            {t("opportunities.card.sign")}150
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            {t("opportunitieDetails.shares")}
          </Text>
          <Text fontSize={"md"} fontWeight="400">
            237
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"md"} fontWeight="400">
            {t("opportunitieDetails.available")}
          </Text>
          <Text fontSize={"md"} fontWeight="400">
            13
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
