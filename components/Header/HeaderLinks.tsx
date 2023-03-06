import { Flex, Text } from "@chakra-ui/react";

const links = [
  {
    id: 1,
    name: "Oportunidades",
    url: "/oportunidades",
  },
  {
    id: 2,
    name: "Portfólio",
    url: "/portfolio",
  },
  {
    id: 3,
    name: "Empresas",
    url: "/empresas",
  },
  {
    id: 4,
    name: "Saiba mais",
    url: "/saibamais",
  },
];

export const HeaderLinks: React.FC = () => {
  return (
    <Flex gap="1">
      {links.map(item => (
        <Flex
          key={item.id}
          w="8rem"
          justifyContent="center"
          transition="0.14s"
          borderBottom="2px solid transparent"
          mt="2"
          pb="2"
          color={"#4A5568"}
          _hover={{
            color: "#007D99",
            borderBottom: "2px solid #007D99",
            cursor: "pointer",
          }}
        >
          <Text fontSize={"sm"} fontWeight="medium">
            {item.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
