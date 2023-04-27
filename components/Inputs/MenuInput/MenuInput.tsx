import {
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent, useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IMenuInput } from "./dto";
import { useTranslation } from "react-i18next";

export const MenuInput: FunctionComponent<IMenuInput> = ({
	placeholder,
	color,
	fields,
	param,
}) => {
	const router = useRouter();
	const [value, setValue] = useState<any>("");
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
				gap="80%"
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
				{value ? value : placeholder}
			</MenuButton>
			<MenuList bgColor="#ffffff" border="0.0625rem solid #E2E8F0">
				{fields?.map((field: any) => (
					<MenuItem
						key={field}
						bgColor="#ffffff"
						color="#2D3748"
						onClick={() => {
							setParams(param, field);
							setValue(field);
						}}
					>
						{field}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export const MenuInputs: FunctionComponent = () => {
	const { t } = useTranslation();
	return (
		<Flex gap="1.5rem" alignItems={"center"}>
			<MenuInput
				placeholder={t("inputs.propertyType") as any}
				color="#2D3748"
				fields={["Todos imóveis", "Comercial", "Residencial", "Loteamento"]}
				param="enterprise_type"
			/>
			<MenuInput
				placeholder={t("inputs.completionForecast") as any}
				color="#2D3748"
				fields={["Crescente", "Decrescente"]}
				param="expected_delivery_date"
			/>
			<MenuInput
				placeholder={t("inputs.minimumInvestment") as any}
				color="#2D3748"
				fields={["Mínimo", "Máximo"]}
				param="min_investment"
			/>
			{/* <MenuInput placeholder="Localização" color="#A0AEC0"/> */}
		</Flex>
	);
};
