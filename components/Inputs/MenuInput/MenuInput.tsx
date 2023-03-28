import React, { FunctionComponent, useCallback } from "react";
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
import { useRouter } from "next/router";

export const MenuInput: FunctionComponent<IMenuInput> = ({
	placeholder,
	color,
	fields,
	param,
}) => {
	const router = useRouter();

	const setParams = useCallback(
		(param: string, value: any) => {
			router.query[param] = value;
			router.push(router);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[router.query]
	);

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
				{fields?.map(field => (
					<MenuItem
						key={field}
						bgColor="#ffffff"
						color="#2D3748"
						onClick={() => setParams(param, field)}
					>
						{field}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export const MenuInputs: FunctionComponent = () => {
	return (
		<Flex gap="1.5rem">
			<MenuInput
				placeholder="Tipo de Imóvel"
				color="#2D3748"
				fields={["Comercial", "Residencial", "Loteamento"]}
				param="enterprise_type"
			/>
			<MenuInput
				placeholder="Previsão de Conclusão"
				color="#2D3748"
				fields={["crescente", "decrescente"]}
				param="expected_delivery_date"
			/>
			<MenuInput
				placeholder="Investimento Mínimo"
				color="#2D3748"
				fields={["min", "max"]}
				param="min_investment"
			/>
			{/* <MenuInput placeholder="Localização" color="#A0AEC0"/> */}
		</Flex>
	);
};
