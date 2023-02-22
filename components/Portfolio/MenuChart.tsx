import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IMenuChart {
  title?: string;
  titleColor?: string;
  defaultSelection: string;
}

const options = [{ id: 1, name: "Option 1" }];

export const MenuChart: FunctionComponent<IMenuChart> = ({
  title,
  titleColor = "#FFFFFF",
  defaultSelection,
}) => {
  return (
    <Flex alignItems="center" mb="3rem" gap="0.75rem" ml="0.7rem" pr="2">
      <Text fontSize={"sm"} fontWeight="500" color={titleColor}>
        {title}
      </Text>
      <Menu>
        <MenuButton
          w="max"
          h="max"
          py="2"
          px="3"
          color="black"
          fontWeight={"400"}
          fontSize="sm"
          bgColor="white"
          as={Button}
          rightIcon={<ChevronDownIcon style={{ marginLeft: "4rem" }} />}
        >
          {defaultSelection}
        </MenuButton>
        <MenuList>
          {options.map((values: any) => (
            <MenuItem key={values.id}>{values.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
