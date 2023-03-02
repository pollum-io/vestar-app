import { Flex, Img, Text, Icon } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { TbInfoSquare } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { Collections } from "../../components/Imovel/Collections";
import { DefaultTemplate } from "../DefaultTemplate";
import { PriceCard } from "../../components/Imovel/PriceCard";
import { Carousel } from "../../components/Imovel/Carousel";
import { useTranslation } from "react-i18next";

//TODO: Componentizar
export const ImovelContainer: FunctionComponent = () => {
  const images = [
    { id: 0, image: "images/car.png" },
    { id: 1, image: "images/backgrounds/Image-2.png" },
    { id: 2, image: "images/backgrounds/Image-3.png" },
  ];

  const { t } = useTranslation();

  return (
    <DefaultTemplate>
      <Flex px="5rem" flexDir={"column"}>
        <Collections />
        <Flex flexDir={"column"}>
          <Flex gap="1" pb="0.75rem">
            <Img src="images/backgrounds/avatar.png" />
            <Text fontWeight={"400"} color="#171923">
              Nome da Empresa Responsável
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="1.5rem" pb="1rem">
            <Text fontSize="4xl" fontWeight={"600"} color="#171923">
              Crypto Plaza
            </Text>
            <Text
              fontSize={"sm"}
              fontWeight="400"
              color="#171923"
              bgColor="#F0E8FF"
              py="0.25rem"
              px="1rem"
              borderRadius={"4.875rem"}
            >
              Residencial
            </Text>
          </Flex>
          <Flex gap="0.625rem" pb="1.5rem">
            <Icon w={6} h={6} color={"#718096"} as={FiMapPin} />
            <Text color={"#718096"}>Jurerê, Florianópolis</Text>
          </Flex>
          <Flex flexDir={"column"} pb="3rem">
            <Flex gap="4.25rem" pb="2rem">
              <Flex flexDir={"column"} gap="0.25rem">
                <Text fontSize={"sm"} fontWeight="400" color="#718096">
                  {t("opportunities.card.minInvest")}
                </Text>
                <Flex gap="0.25rem">
                  <Text fontSize={"xs"} color="#718096">
                    {t("opportunities.card.sign")}
                  </Text>
                  <Text color="#000000">150</Text>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} gap="0.25rem">
                <Text fontSize={"sm"} fontWeight="400" color="#718096">
                  {t("opportunitieDetails.start")}
                </Text>
                <Flex gap="0.25rem">
                  <Text color="#000000">Jan 2022</Text>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} gap="0.25rem">
                <Text fontSize={"sm"} fontWeight="400" color="#718096">
                  {t("opportunities.card.estConc")}
                </Text>
                <Flex gap="0.25rem">
                  <Text color="#000000">Out 2025</Text>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} gap="0.25rem">
                <Text fontSize={"sm"} fontWeight="400" color="#718096">
                  {t("opportunities.card.expected")}
                </Text>
                <Flex gap="0.25rem">
                  <Text color="#000000">12% ao ano</Text>
                  <Icon as={TbInfoSquare} color={"#A0AEC0"} w={5} h={5} />
                </Flex>
              </Flex>
            </Flex>
            <Flex gap="5.25rem">
              <Flex flexDir={"column"} gap="0.25rem">
                <Text fontSize={"sm"} fontWeight="400" color="#718096">
                  {t("opportunitieDetails.initial")}
                </Text>
                <Flex gap="0.25rem">
                  <Text fontSize={"xs"} color="#718096">
                    {t("opportunities.card.sign")}
                  </Text>
                  <Text color="#000000">12.800,00</Text>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} gap="0.25rem">
                <Text fontSize={"sm"} fontWeight="400" color="#718096">
                  {t("opportunitieDetails.final")}
                </Text>
                <Flex gap="0.25rem">
                  <Text fontSize={"xs"} color="#718096">
                    {t("opportunities.card.sign")}
                  </Text>
                  <Text color="#000000">16.800,00</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} gap="5" w="60%">
            <Text color={"#171923"}>
              Esteempreendimento é uma obra de lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut odio porta sed posuere purus donec
              vitae posuere fringilla. Sit nibh id senectus sed eget nisl,
              mollis leo justo. Blandit tristique purus tortor rhoncus. Dolor
              tristique nulla dignissim tellus cursus ac fermentum sit nisi.
              Viverra odio diam non porttitor commodo nullam iaculis in pretium.
              In elementum eu varius eu massa senectus faucibus lacinia blandit.
              Semper quam posuere commodo dui sed urna, senectus nunc.
            </Text>
            <Text color={"#171923"}>
              Elementum odio euismod fermentum urna euismod blandit risus
              viverra. Ligula elementum erat nullam faucibus neque viverra.
              Lacinia eget consectetur pharetra fermentum pellentesque aenean
              elementum pretium. Quis euismod arcu fermentum ac suscipit sed
              neque sodales amet. Donec massa sit enim urna tristique
              adipiscing. Enim id ultrices elit venenatis. Ut egestas venenatis
              lacus vel diam feugiat lobortis tortor et. Volutpat massa
              sagittis, quis vestibulum nunc, eget ullamcorper. Aliquet vitae
              pulvinar risus hac in a. Elementum turpis dis ultrices enim.
              Fringilla in phasellus arcu placerat tristique eget lacinia.
              Aliquam sed hac platea sit ornare nam pellentesque. Nunc lacus
              sapien senectus faucibus felis.
            </Text>
          </Flex>
          <PriceCard axisY="34rem" />
          <Flex mt="4rem" flexDir={"column"}>
            <Text mb="2rem" fontWeight={"600"} fontSize="2xl" color={"#171923"}>
              {t("opportunitieDetails.offers")}
            </Text>
            <Flex gap="8rem">
              <Flex flexDir={"column"} color={"#171923"}>
                <Text>&bull; Salão de festas</Text>
                <Text>&bull; Wifi</Text>
                <Text>&bull; Lavanderia e espaço clean</Text>
                <Text>&bull; Oficina compartilhada</Text>
                <Text>&bull; Quadra poliesportiva</Text>
                <Text>&bull; Piscina</Text>
              </Flex>
              <Flex flexDir={"column"} color={"#171923"}>
                <Text>&bull; Academia</Text>
                <Text>&bull; Espaço pet</Text>
                <Text>&bull; Câmeras de segurança</Text>
                <Text>&bull; Bicicletario</Text>
                <Text>&bull; Area comercial integrado</Text>
                <Text>&bull; Coworking</Text>
              </Flex>
            </Flex>
            <Text
              mt="2.375rem"
              fontSize={"sm"}
              fontWeight={"500"}
              color={"#007D99"}
            >
              {t("opportunitieDetails.seeAll")}
            </Text>
          </Flex>
          <PriceCard axisY="90rem" />
        </Flex>
      </Flex>
      <Flex
        mt="4.375rem"
        px="5rem"
        bgColor={"#E4F2F3"}
        py="2rem"
        flexDir={"column"}
      >
        <Text mb="2rem" fontWeight={"600"} fontSize="2xl" color={"#171923"}>
          {t("opportunitieDetails.soon")}
        </Text>
        <Flex gap="2.1875rem">
          <Flex alignItems={"center"} gap="0.9rem">
            <Img src={"images/icons/Home.png"} />
            <Text fontWeight={"400"} color={"#171923"} w="8.5rem">
              {t("opportunitieDetails.floorPlans")}
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="0.9rem">
            <Img src={"images/icons/Edit Square.png"} />
            <Text fontWeight={"400"} color={"#171923"} w="100%">
              {t("opportunitieDetails.audits")}
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="0.9rem">
            <Img src={"images/icons/Document.png"} />
            <Text fontWeight={"400"} color={"#171923"} w="100%">
              {t("opportunitieDetails.invoices")}
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="0.9rem">
            <Img src={"images/icons/Folder.png"} />
            <Text fontWeight={"400"} color={"#171923"} w="75%">
              {t("opportunitieDetails.extraDoc")}
            </Text>
          </Flex>
        </Flex>
        <Flex mt="2rem">
          <Text color={"#171923"}>{t("opportunitieDetails.stage")}</Text>
        </Flex>
      </Flex>
      <Flex py="4rem" px="5rem" flexDir={"column"}>
        <Flex mb={"2rem"}>
          <Text fontSize={"1.5rem"} fontWeight={"600"} color={"#171923"}>
            {t("opportunities.location")}
          </Text>
        </Flex>
        <Flex>
          <Img w="100%" src={"images/Map.png"} />
        </Flex>
        <Flex mt="2rem" justifyContent={"space-between"}>
          <Flex w="50%" flexDir={"column"} gap="1rem">
            <Text fontWeight={"600"} color={"#171923"}>
              Jurerê, Florianópolis, Santa Catarina
            </Text>
            <Text fontSize={"sm"} color={"#171923"}>
              Situado ao norte da Ilha de Santa Catarina, entre os bairros
              Daniela, Jurerê Tradicional e Canasvieiras, o bairro de Jurerê
              Internacional é considerado o bairro mais sofisticado de
              Florianópolis. Fruto de um projeto urbanístico com foco na
              sustentabilidade, nele tudo foi planejado cuidadosamente para que
              resultasse em um lugar único na Ilha.
            </Text>
            <Text fontSize={"sm"} color={"#171923"}>
              O que se pode encontrar em Jurerê Internacional são ruas largas e
              arborizadas, mansões milionárias, áreas específicas para comércio
              e serviços, amplos estacionamentos, segurança e saneamento
              exclusivos e, sobretudo, organização e natureza.
            </Text>
          </Flex>
          <Flex w="40%">
            <Carousel images={images} widthValue="full" heightValue="16rem" />
          </Flex>
        </Flex>
      </Flex>
    </DefaultTemplate>
  );
};
