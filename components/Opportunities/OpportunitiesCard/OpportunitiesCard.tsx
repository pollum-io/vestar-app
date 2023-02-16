import React, { FunctionComponent } from "react";
import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { IOpportunitiesCard } from "./dto";
import { FiMapPin } from "react-icons/fi";

export const OpportunitiesCard: FunctionComponent<IOpportunitiesCard> = ({
  blocked,
  time,
  image,
  name,
  location,
  type,
  minimunInvest,
  estimateFinish,
  rentability,
  finished,
}) => {
  return (
    <Flex
      w="18.125rem"
      h="max-content"
      background="#FFFFFF"
      boxShadow="0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.05)"
      borderRadius="0.75rem"
      flexDirection="column"
    >
      <Flex
        w="18.125rem"
        h="12.75rem"
        borderRadius="0.75rem"
        justifyContent="end"
      >
        <Img
          src="images/opportunitieBackground.png"
          borderRadius="0.75rem"
          filter={blocked ? "blur(0.25rem)" : "none"}
        />
        <Flex position="absolute" pt="0.625rem" pr="0.75rem">
          <Flex
            justifyContent="center"
            alignItems="center"
            w="max-content"
            h="1.25rem"
            background="rgba(0, 0, 0, 0.36)"
            borderRadius="2.6875rem"
            px="0.5rem"
            py="0.125rem"
            blur="1.25rem"
          >
            <Text
              fontFamily="Poppins"
              fontWeight="500"
              fontSize="0.75rem"
              lineHeight="1rem"
              color="#FFFFFF"
            >
              {time}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="1rem" px="1rem" flexDirection="column" pb="0.9375rem">
        <Flex gap="0.3125rem" flexDirection="column">
          <Flex
            gap="0.5rem"
            alignItems="center"
            filter={blocked ? "blur(0.25rem)" : "none"}
          >
            <Flex
              w="1rem"
              h="1rem"
              background="#00576B"
              borderRadius="full"
              alignItems="center"
            >
              <Text
                fontFamily="Inte"
                fontWeight="500"
                fontSize="0.375rem"
                lineHeight="0.4375rem"
                color="#FFFFFF"
                textAlign="center"
              >
                SA
              </Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontWeight="500"
              fontSize="1rem"
              lineHeight="1.5rem"
              color="#171923"
            >
              {name}
            </Text>
          </Flex>
          <Flex gap="0.5rem">
            <FiMapPin color="#718096" />
            <Text
              fontFamily="Poppins"
              fontSize="0.75rem"
              lineHeight="1rem"
              alignItems="center"
              color="#718096"
            >
              {location}
            </Text>
          </Flex>
          <Flex alignItems="center" color="#2D3748">
            <Text
              fontFamily="Poppins"
              fontSize="0.75rem"
              lineHeight="1rem"
              color="#2D3748"
            >
              {type}
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="1rem" mt="1.5rem">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            filter={blocked ? "blur(0.25rem)" : "none"}
          >
            <Flex flexDirection="column" alignItems="left">
              <Text fontSize="0.75rem" lineHeight="1rem" color="#718096">
                Investimento Mín.
              </Text>
              <Flex gap="0.25rem" fontFamily="Poppins">
                <Text fontSize="0.75rem" lineHeight="1rem" color="#718096">
                  R$
                </Text>
                <Text
                  mt="0.0625rem"
                  fontSize="1rem"
                  lineHeight="1.5rem"
                  color="#171923"
                >
                  {minimunInvest}
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" alignItems="left" fontFamily="Poppins">
              <Text fontSize="0.75rem" lineHeight="1rem" color="#718096">
                Prev. Conclusão
              </Text>
              <Text fontSize="1rem" lineHeight="1.5rem" color="#171923">
                {estimateFinish}
              </Text>
            </Flex>
          </Flex>
          {!blocked ? (
            <Flex
              justifyContent="center"
              alignItems="center"
              w="100%"
              background="#E4F2F3"
              borderRadius="2.6875rem"
              py="0.125rem"
            >
              <Text
                fontFamily="Poppins"
                fontWeight="500"
                fontSize="0.75rem"
                lineHeight="1rem"
                color="#00576B"
              >
                Rentabilidade Esperada: {rentability}
              </Text>
            </Flex>
          ) : (
            <Button
              justifyContent="center"
              alignItems="center"
              w="16.125rem"
              h="1.5rem"
              border="0.0625rem solid #007D99"
              borderRadius="0.375rem"
              fontFamily="Poppins"
              fontWeight="500"
              fontSize="0.75rem"
              lineHeight="1rem"
              color="#007D99"
              _hover={{ bgColor: "#EDF2F7" }}
            >
              {finished ? "Solicitar Acesso" : "Solicitar Acesso a essa Oferta"}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export const OpportunitiesCards: FunctionComponent = () => {
  return (
    <Flex
      gap="1.5rem"
      flexWrap="wrap"
      rowGap="2rem"
      w="100%"
      justifyContent="center"
    >
      <OpportunitiesCard
        blocked={false}
        time="Encerrado"
        name="Nome do Empreendimento"
        location="Campeche, Florianópolis"
        type="Comercial"
        minimunInvest="150"
        estimateFinish="Out 2025"
        rentability="12% a.a (máx)"
        finished={false}
      />
      <OpportunitiesCard
        blocked={true}
        time="19 horas e 43 minutos restantes"
        name="Nome do Empreendimento"
        location="Campeche, Florianópolis"
        type="Comercial"
        minimunInvest="150"
        estimateFinish="Out 2025"
        rentability="12% a.a (máx)"
        finished={false}
      />
      <OpportunitiesCard
        blocked={true}
        time="Encerrado"
        name="Nome do Empreendimento"
        location="Campeche, Florianópolis"
        type="Comercial"
        minimunInvest="150"
        estimateFinish="Out 2025"
        rentability="12% a.a (máx)"
        finished={true}
      />
      <OpportunitiesCard
        blocked={true}
        time="Encerrado"
        name="Nome do Empreendimento"
        location="Campeche, Florianópolis"
        type="Comercial"
        minimunInvest="150"
        estimateFinish="Out 2025"
        rentability="12% a.a (máx)"
        finished={true}
      />
      <OpportunitiesCard
        blocked={true}
        time="Encerrado"
        name="Nome do Empreendimento"
        location="Campeche, Florianópolis"
        type="Comercial"
        minimunInvest="150"
        estimateFinish="Out 2025"
        rentability="12% a.a (máx)"
        finished={true}
      />
      <OpportunitiesCard
        blocked={true}
        time="Encerrado"
        name="Nome do Empreendimento"
        location="Campeche, Florianópolis"
        type="Comercial"
        minimunInvest="150"
        estimateFinish="Out 2025"
        rentability="12% a.a (máx)"
        finished={true}
      />
    </Flex>
  );
};
