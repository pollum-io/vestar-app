import {
  Flex,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";

export const HamburguerMenu: React.FC = () => {
  return (
    <Flex
      h="max"
      px="2"
      py="1"
      flexDir={"row"}
      alignItems={"center"}
      gap="3"
      border="1px solid #E2E8F0"
      rounded={"1rem"}
    >
      <Icon color="#4A5568 " as={FiMenu} />
      <Text fontSize={"sm"} fontWeight={"400"} color={"#4A5568"}>
        Menu
      </Text>
      <Icon color="#4A5568 " as={HiOutlineUserCircle} />
    </Flex>
  );
};
