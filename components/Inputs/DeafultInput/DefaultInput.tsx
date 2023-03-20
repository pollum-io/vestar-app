import React, { FunctionComponent, useMemo } from "react";
import { Flex, Text, Input, FormControl, Select } from "@chakra-ui/react";
import { useRegister } from "../../../hooks/useRegister";
import { IDefaultInput } from "./dto";
import InputMask from "react-input-mask";
import { states } from "./states";

export const DefaultInput: FunctionComponent<IDefaultInput> = ({
	title,
	color,
	placeholderColor,
	bgColor,
	inputSize,
	placeholder,
	type,
	border,
	inputColor,
	registerType,
	register,
	display,
}) => {
	const validation = useMemo(() => {
		if (title === "CPF") {
			return "999.999.999-99";
		} else if (title === "CNPJ") {
			return "99.999.999/9999-99";
		} else {
			return;
		}
	}, [title]);

	return (
		<Flex
			flexDirection="column"
			fontFamily="Poppins"
			gap="0.5rem"
			display={display === undefined ? "flex" : display ? "flex" : "none"}
		>
			<Text
				fontStyle="normal"
				fontWeight="500"
				fontSize="0.875rem"
				lineHeight="1.25rem"
				color={color ? color : "#2D3748"}
			>
				{title}
			</Text>
			{title === "Uf" ? (
				<Select
					_hover={{}}
					w={inputSize || ""}
					h="2rem"
					border={border ? border : "0.0938rem solid #E2E8F0"}
					placeholder="Select option"
					color={"black"}
					fontSize="0.875rem"
					//{...register(registerType, { required: true })}
				>
					{states?.map((value: any) => (
						<option key={value.id} value={value.Uf}>
							{value.State}
						</option>
					))}
				</Select>
			) : (
				<FormControl>
					<Input
						placeholder={placeholder}
						_placeholder={{
							color: placeholderColor
								? placeholderColor
								: "rgba(0, 0, 0, 0.36)",
							fontFamily: "Poppins",
						}}
						border={border ? border : "0.0938rem solid #E2E8F0"}
						bgColor={bgColor}
						fontStyle="normal"
						fontWeight="400"
						w={inputSize || ""}
						fontSize="0.875rem"
						lineHeight="1.25rem"
						borderRadius="0.375rem"
						h="2rem"
						pl="0.7rem"
						color={inputColor ? inputColor : "#2D3748"}
						type={type || "text"}
						_hover={{}}
						_focus={{
							boxShadow: "none",
							border: border ? border : "0.0938rem solid #E2E8F0",
						}}
						//{...register(registerType, { required: true })}
						as={title === "CPF" || title === "CNPJ" ? InputMask : ""}
						mask={validation}
						maskChar={null}
					/>
				</FormControl>
			)}
		</Flex>
	);
};

export const DefaultInputs: FunctionComponent<any> = props => {
	const { register } = props;
	const { isPhysical } = useRegister();

	return (
		<Flex flexDirection="column" gap="1.5rem">
			<DefaultInput
				title={isPhysical ? "Razão Social" : "Nome Completo"}
				inputSize="20rem"
				placeholder={isPhysical ? "Insira aqui" : "Sem abreviações"}
				registerType={isPhysical ? "enterprise_name" : "full_name"}
				register={register}
			/>
			<DefaultInput
				title={isPhysical ? "CNPJ" : "Data de Nascimento"}
				inputSize={isPhysical ? "11rem" : "9.875rem"}
				placeholder={isPhysical ? "00.000.000/0000-00" : "dd/mm/aaaa"}
				type={isPhysical ? "" : "date"}
				registerType={isPhysical ? "cnpj" : "birthday_date"}
				register={register}
			/>
			<DefaultInput
				title={isPhysical ? "Uf" : "CPF"}
				inputSize={isPhysical ? "20rem" : "9.875rem"}
				placeholder={isPhysical ? "Insira aqui" : "000.000.000-00"}
				registerType={isPhysical ? "uf" : "cpf"}
				register={register}
			/>
			<DefaultInput
				title="Quem convidou você para a LIVN?"
				inputSize="20rem"
				placeholder="Insira aqui"
				registerType="invited_by"
				register={register}
			/>
		</Flex>
	);
};
