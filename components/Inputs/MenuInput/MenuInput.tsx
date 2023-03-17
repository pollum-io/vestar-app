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
import { useTranslation } from "react-i18next";

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
				_hover={{}}
				_expanded={{ bgColor: "#ffffff" }}
				_focus={{ boxShadow: "none", bgColor: "#ffffff" }}
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
	const { t } = useTranslation();
	return (
		<Flex gap="1.5rem">
			<MenuInput placeholder={t("opportunities.type")} color="#2D3748" />
			<MenuInput placeholder={t("opportunities.completion")} color="#2D3748" />
			<MenuInput placeholder={t("opportunities.minimum")} color="#2D3748" />
			<MenuInput placeholder={t("opportunities.location")} color="#A0AEC0" />
		</Flex>
	);
};
