import React, { FunctionComponent } from "react";
import {
	Flex,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { IMenuInput } from "./dto";
import { IoIosArrowDown } from "react-icons/io";

export const MenuInput: FunctionComponent<IMenuInput> = ({
	placeholder,
	color,
}) => {
	return (
		<Menu>
			<MenuButton
				h="2rem"
				as={Button}
				rightIcon={<IoIosArrowDown color="#2D3748" />}
				px="0.75rem"
				gap="50%"
				borderRadius="0.375rem"
				color={color}
				w="14.375rem"
				bgColor="#ffffff"
				border="0.0625rem solid #E2E8F0"
				fontFamily="Poppins"
				fontStyle="normal"
				fontWeight="400"
				fontSize="0.875rem"
				lineHeight="1.25rem"
			>
				{placeholder}
			</MenuButton>
			<MenuList bgColor="#ffffff" border="0.0625rem solid #E2E8F0">
				<MenuItem bgColor="#ffffff" color="#2D3748">
					Pred
				</MenuItem>
				<MenuItem bgColor="#ffffff" color="#2D3748">
					Pedro
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export const MenuInputs: FunctionComponent = () => {
	return (
		<Flex gap="1.5rem">
			<MenuInput placeholder="Tipo de Imóvel" color="#2D3748" />
			<MenuInput placeholder="Previsão de Conclusão" color="#2D3748" />
			<MenuInput placeholder="Investimento Mínimo" color="#2D3748" />
			<MenuInput placeholder="Localização" color="#A0AEC0" />
		</Flex>
	);
};
